# 🔐 Documentación Técnica - Sistema de Autenticación

## 📋 Índice
- [Descripción General](#descripción-general)
- [Arquitectura del Sistema](#arquitectura-del-sistema)
- [Flujo de Autenticación](#flujo-de-autenticación)
- [Configuración](#configuración)
- [Gestión de Tokens](#gestión-de-tokens)
- [Componentes Principales](#componentes-principales)
- [Consideraciones de Seguridad](#consideraciones-de-seguridad)
- [Troubleshooting](#troubleshooting)
- [Mejoras Recomendadas](#mejoras-recomendadas)


---

## 🎯 Descripción General

La aplicación utiliza **AWS Amplify v6** con **Amazon Cognito** para gestionar la autenticación de usuarios. El sistema proporciona autenticación robusta, renovación automática de tokens y integración con servicios de tracking.

### Tecnologías Utilizadas
- **AWS Amplify v6.15.1** - Framework principal
- **@aws-amplify/ui-react v6.11.2** - Componentes de UI
- **@aws-amplify/api v6.3.13** - Cliente GraphQL
- **@aws-amplify/auth v6.13.1** - Gestión de autenticación
- **Amazon Cognito** - Servicio de autenticación
- **Redux** - Gestión de estado
- **Mixpanel** - Tracking de eventos

---

## 🏗️ Arquitectura del Sistema

### Estructura de Archivos
```
src/
├── index.js                    # Configuración global de Amplify
├── routes/
│   └── App.js                  # Enrutamiento principal
├── dashboard/
│   ├── routes/
│   │   └── dashboard.routes.js # Rutas protegidas
│   └── containers/
│       └── AuthStateApp.js     # Guardián de autenticación
└── dashboard/
    └── components/
        └── AlertDialog.js      # Manejo de logout
```

### Flujo de Protección de Rutas
```
1. index.js → Authenticator.Provider
2. App.js → Separación dashboard/landing
3. dashboard.routes.js → AuthStateApp wrapper
4. AuthStateApp → Verificación de autenticación
5. Componentes protegidos → Renderizado condicional
```

---

## 🔄 Flujo de Autenticación

### 1. Configuración Inicial
```javascript
// src/index.js
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import amplifyconfig from './amplifyconfiguration.json'

Amplify.configure(amplifyconfig)

root.render(
  <Authenticator.Provider>
    <App />
  </Authenticator.Provider>
)
```

### 2. Enrutamiento y Protección
```javascript
// src/routes/App.js
<Routes>
  <Route path={`${dashboard}/*`} element={<DashboardRoutes />} />
  <Route path={`${landing}/*`} element={<LandingRoutes />} />
</Routes>

// src/dashboard/routes/dashboard.routes.js
<AuthStateApp>
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/client" element={<Client />} />
      {/* ... más rutas protegidas */}
    </Routes>
  </Layout>
</AuthStateApp>
```

### 3. Guardián de Autenticación
```javascript
// src/dashboard/containers/AuthStateApp.js
const { user, route } = useAuthenticator((context) => [context.user, context.route])

return user && authState === 'authenticated'
  ? <div className="App">{children}</div>
  : <div className="authenticator-container">
      <Authenticator
        initialState={initialAuthState}
        formFields={formFields}
        services={{ validateCustomSignUp }}
      />
    </div>
```

---

## ⚙️ Configuración

### Estados de Autenticación
El sistema maneja los siguientes estados (`route`):
- `'signUp'` - Usuario registrándose
- `'signIn'` - Usuario iniciando sesión
- `'authenticated'` - Usuario autenticado
- `'signOut'` - Usuario cerrando sesión
- `'confirmSignUp'` - Confirmando registro
- `'forgotPassword'` - Recuperando contraseña

### Campos de Formulario Personalizados
```javascript
const formFields = {
  signUp: {
    email: { label: 'Email', placeholder: 'jondoe@gmail.com', isRequired: true },
    password: { label: 'Password:', placeholder: 'Enter your Password:', isRequired: true },
    confirm_password: { label: 'Confirm Password:', placeholder: 'Confirm your Password:', isRequired: true },
    phone_number: { label: 'Phone #', placeholder: '4153489900', isRequired: true },
    name: { label: 'First Name', placeholder: 'John', isRequired: true },
    family_name: { label: 'Last Name', placeholder: 'Doe', isRequired: true },
    gender: { label: 'Gender', placeholder: 'Gender', isRequired: true },
    birthdate: { label: 'Birthdate', placeholder: '06/17/1990', isRequired: true }
  }
}
```

### Validación Personalizada
```javascript
services={{
  async validateCustomSignUp(formData) {
    const formErrors = validateForm(formData)
    if (Object.keys(formErrors).length > 0) {
      return formErrors
    }
    return {}
  }
}}
```

---

## 🔑 Gestión de Tokens

### Tipos de Tokens
Amplify maneja automáticamente tres tipos de tokens:

1. **Access Token** (JWT)
   - Duración: 1 hora (configurable)
   - Propósito: Autorización para APIs
   - Renovación: Automática

2. **ID Token** (JWT)
   - Duración: 1 hora (configurable)
   - Propósito: Información del usuario
   - Renovación: Automática

3. **Refresh Token**
   - Duración: 30 días (configurable)
   - Propósito: Renovar access/ID tokens
   - Almacenamiento: localStorage

### Ciclo de Vida de Tokens
```
1. Autenticación → Cognito devuelve 3 tokens
2. Almacenamiento → localStorage (refresh) + memoria (access/ID)
3. Renovación automática → Cada hora (access/ID tokens)
4. Expiración → Solo cuando refresh token expira (30 días)
```

### ¿Por qué las Sesiones No Vencen?
El `Authenticator` de Amplify UI React maneja internamente:
- ✅ Renovación automática de access tokens
- ✅ Gestión transparente de refresh tokens
- ✅ Sincronización entre pestañas
- ✅ Detección automática de expiración

**Resultado**: Las sesiones pueden durar hasta 30 días sin intervención del usuario.

---

## 🧩 Componentes Principales

### AuthStateApp.js
**Propósito**: Guardián principal de autenticación

**Funcionalidades**:
- Verificación de estado de autenticación
- Renderizado condicional de UI
- Tracking de eventos de autenticación
- Gestión de datos del usuario
- Integración con invitaciones

**Hooks principales**:
```javascript
const { user, route } = useAuthenticator()
const [authState, setAuthState] = useState()
const [userData, setUser] = useState(null)
```

### AlertDialog.js
**Propósito**: Manejo de cierre de sesión

**Funcionalidades**:
- Confirmación de logout
- Limpieza de estado Redux
- Tracking de eventos
- Redirección post-logout

```javascript
const { signOut } = useAuthenticator()

const handleSignOut = async () => {
  trackEvents.userLogout()
  await signOut()
  // Limpiar estado Redux
  handleAuthStateChange('signedout')
}
```

---

## 🔒 Consideraciones de Seguridad

### Ventajas del Sistema Actual
✅ **Experiencia de usuario fluida** - No se desconecta cada hora  
✅ **Renovación automática** - Transparente para el usuario  
✅ **Gestión robusta** - Maneja errores automáticamente  
✅ **Estándar de la industria** - Similar a Google, Facebook  

### Desventajas y Riesgos
❌ **Sesiones muy largas** - 30 días por defecto  
❌ **Menos control** - No se puede forzar renovación  
❌ **Dependencia total** en Amplify  
❌ **No hay logout por inactividad**  

### Configuración de Seguridad Recomendada
```javascript
// En AWS Cognito Console
Access Token: 1 hora
ID Token: 1 hora  
Refresh Token: 7 días (en vez de 30)
```

---

## 🐛 Troubleshooting

### Problemas Comunes

#### 1. Sesión No Vence
**Causa**: Refresh tokens duran 30 días por defecto
**Solución**: Configurar tiempo menor en Cognito Console

#### 2. Tokens Expirados
**Causa**: No hay manejo de errores de token expirado
**Solución**: Implementar interceptores de error

```javascript
// Ejemplo de interceptor
const client = generateClient()
client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message?.includes('Token expired')) {
      // Redirigir a login
      window.location.href = '/dashboard'
    }
    return Promise.reject(error)
  }
)
```

#### 3. Estado de Autenticación Inconsistente
**Causa**: Múltiples pestañas o localStorage corrupto
**Solución**: Limpiar localStorage y reiniciar sesión

### Debugging
```javascript
// Agregar en AuthStateApp.js para debugging
useEffect(() => {
  if (user && route === 'authenticated') {
    const session = user.signInUserSession
    if (session) {
      console.log('Access Token expira:', new Date(session.accessToken.payload.exp * 1000))
      console.log('ID Token expira:', new Date(session.idToken.payload.exp * 1000))
      console.log('Refresh Token expira:', new Date(session.refreshToken.payload.exp * 1000))
    }
  }
}, [user, route])
```

---

## 🚀 Mejoras Recomendadas

### 1. Implementar Logout por Inactividad
```javascript
// En AuthStateApp.js
useEffect(() => {
  if (user && route === 'authenticated') {
    let inactivityTimer
    
    const resetTimer = () => {
      clearTimeout(inactivityTimer)
      inactivityTimer = setTimeout(() => {
        signOut()
      }, 30 * 60 * 1000) // 30 minutos
    }
    
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart']
    events.forEach(event => document.addEventListener(event, resetTimer))
    
    resetTimer()
    
    return () => {
      clearTimeout(inactivityTimer)
      events.forEach(event => document.removeEventListener(event, resetTimer))
    }
  }
}, [user, route])
```

### 2. Detección de Expiración de Refresh Token
```javascript
useEffect(() => {
  if (user && route === 'authenticated') {
    const session = user.signInUserSession
    if (session) {
      const refreshTokenExp = session.refreshToken.payload.exp * 1000
      const now = Date.now()
      const timeUntilExpiry = refreshTokenExp - now
      
      if (timeUntilExpiry < 24 * 60 * 60 * 1000) { // Menos de 24 horas
        // Mostrar advertencia al usuario
        console.warn('Refresh token expira pronto')
      }
    }
  }
}, [user, route])
```

### 3. Renovación Manual de Tokens
```javascript
useEffect(() => {
  if (user && route === 'authenticated') {
    const interval = setInterval(async () => {
      try {
        await fetchAuthSession({ forceRefresh: true })
        console.log('Tokens renovados manualmente')
      } catch (error) {
        console.error('Error renovando tokens:', error)
      }
    }, 30 * 60 * 1000) // Cada 30 minutos

    return () => clearInterval(interval)
  }
}, [user, route])
```

### 4. Manejo de Errores de Token Expirado
```javascript
// En actions de Redux
export const listUsersByOrganizationIdAction = (id) => async (dispatch) => {
  try {
    const client = generateClient()
    const response = await client.graphql({ query: getClientsFromCoach(id) })
    // ... manejo exitoso
  } catch (error) {
    if (error.message?.includes('Token expired') || error.code === 'TokenExpiredError') {
      console.log('Token expirado, redirigiendo a login')
      window.location.href = '/dashboard'
      return
    }
    dispatch({
      type: ERROR,
      payload: 'Error in list users'
    })
  }
}
```

---

## 📚 Referencias

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [Amplify UI React Documentation](https://ui.docs.amplify.aws/)
- [Amazon Cognito Documentation](https://docs.aws.amazon.com/cognito/)
- [Amplify v6 Migration Guide](https://docs.amplify.aws/react/build-a-backend/auth/migrate-from-v5-to-v6/)

---

## 📝 Notas de Mantenimiento

### Versiones Actuales
- **AWS Amplify**: v6.15.1
- **@aws-amplify/ui-react**: v6.11.2
- **@aws-amplify/api**: v6.3.13
- **@aws-amplify/auth**: v6.13.1

### Archivos de Configuración
- `amplifyconfiguration.json` - Configuración de Amplify
- `aws-exports.js` - Configuración legacy (no usado en v6)

### Monitoreo
- **Mixpanel**: Tracking de eventos de autenticación
- **Console logs**: Debugging de tokens y sesiones
- **Redux DevTools**: Estado de autenticación

---

*Última actualización: $(date)*
*Versión del documento: 1.0* 