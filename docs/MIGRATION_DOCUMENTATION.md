# Documentación de Migración - Sensie Web

## Resumen de Cambios

Este documento detalla las migraciones y correcciones realizadas en el proyecto Sensie Web para actualizar desde Material-UI v4 a MUI v5, React 17 a React 18, y otras mejoras importantes.

## 📦 Actualizaciones de Dependencias

### ✅ Dependencias Actualizadas

#### **Material-UI v4 → MUI v5**
- `@material-ui/core` → `@mui/material` (^5.17.1)
- `@material-ui/icons` → `@mui/icons-material` (^5.17.1)
- `@material-ui/lab` → `@mui/lab` (^5.0.0-alpha.165)
- Agregado `@emotion/react` (^11.14.0) y `@emotion/styled` (^11.14.0)
- Agregado `@mui/styles` (^6.4.12) para compatibilidad

#### **React 17 → React 18**
- `react` → ^18.2.0
- `react-dom` → ^18.2.0
- `react-router-dom` → ^6.30.1 (v5 → v6)

#### **AWS Amplify**
- `aws-amplify` → ^6.15.1
- `@aws-amplify/ui-react` → ^6.11.2
- Agregados módulos individuales:
  - `@aws-amplify/auth` → ^6.13.1
  - `@aws-amplify/api` → ^6.3.13
  - `@aws-amplify/storage` → ^6.9.1
  - `@aws-amplify/analytics` → ^7.0.82

#### **Testing Library**
- `@testing-library/react` → ^16.3.0
- `@testing-library/user-event` → ^14.6.1
- `@testing-library/jest-dom` → ^6.6.3

#### **Otras Actualizaciones Importantes**
- `@nivo/*` → ^0.99.0 (todos los paquetes)
- `recharts` → ^3.0.0
- `react-toastify` → ^11.0.5
- `react-particles-js` → `react-tsparticles` (^2.12.2) + `tsparticles` (^3.8.1)
- `@wojtekmaj/react-daterange-picker` → ^6.0.0
- `axios` → ^1.10.0
- `moment` → ^2.30.1
- `prop-types` → ^15.8.1
- `web-vitals` → ^5.0.3

#### **Redux Toolkit**
- Agregado `@reduxjs/toolkit` → ^1.9.7 (recomendado para nuevos proyectos Redux)

### 🔧 Dependencias de Desarrollo Actualizadas

#### **ESLint**
- `eslint` → ^8.57.0
- `eslint-config-standard` → ^17.1.0
- `eslint-plugin-promise` → ^6.1.1
- `eslint-plugin-react` → ^7.34.0

#### **Configuración**
- Agregado `@mui/codemod` → ^7.1.1 (para migraciones automáticas)
- Agregado `better-docs` → ^2.3.2 (para documentación JSDoc)
- `sass` → ^1.89.2

### 🗑️ Dependencias Removidas

Las siguientes dependencias fueron removidas porque ya no se utilizan en el código:
- `react-multi-select-component` - Reemplazado por componentes MUI nativos
- `react-select-search` - Reemplazado por componentes MUI nativos
- `react-scrollmagic` - No se encontró uso en el código
- `react-reveal` - No se encontró uso en el código

### 📝 Configuraciones Actualizadas

#### **ESLint (.eslintrc.json)**
- Actualizado a ES2022
- Agregada configuración para React 18
- Deshabilitado `react/react-in-jsx-scope` (no necesario en React 17+)
- Configurado `react/prop-types` como warning

#### **JSDoc (jsdoc.json)**
- Mejorada la configuración de exclusión
- Agregado soporte para README.md
- Mejorada la configuración de templates

## 🎨 Migración de Sass 1.44.0 → 1.89.2

### **Cambios Principales en Sass**

#### **1. Sintaxis @import → @use (Recomendado)**

```scss
// ❌ Antes (Sass 1.44.0) - Sintaxis @import (deprecada)
@import 'variables';
@import 'mixins';

.container {
  @include flex(row, center, center);
  color: $fontColor1;
}

// ✅ Después (Sass 1.89.2) - Sintaxis @use (recomendada)
@use 'variables' as vars;
@use 'mixins' as mix;

.container {
  @include mix.flex(row, center, center);
  color: vars.$fontColor1;
}
```

#### **2. Namespace y Aliases**

```scss
// ❌ Antes - Variables globales
$fontColor1: #ffffff;
$actionColor1: #15E7BC;

// ✅ Después - Con namespace
@use 'variables' as *; // Importa todo sin namespace
@use 'variables' as vars; // Con namespace 'vars'
@use 'mixins' as mix; // Con namespace 'mix'

.container {
  color: $fontColor1; // Si usas 'as *'
  // O
  color: vars.$fontColor1; // Si usas 'as vars'
}
```

#### **3. Ejemplo Real del Proyecto**

```scss
// ❌ Antes (archivo: src/dashboard/components/TitleAndButton/styles.module.scss)
@import '../../styles/variables';
@import '../../styles/mixins';

.TitleAndButtonContainer {
  @include flex(row, space-between, center, nowrap);
  color: $fontColor1;
  background-color: $grayColor6;
}

// ✅ Después (archivo actualizado)
@use '../../styles/variables' as vars;
@use '../../styles/mixins' as mix;

.TitleAndButtonContainer {
  @include mix.flex(row, space-between, center, nowrap);
  color: vars.$fontColor1;
  background-color: vars.$grayColor6;
}
```

#### **4. Múltiples Imports con @use**

```scss
// ❌ Antes - Múltiples @import
@import 'variables';
@import 'mixins';
@import 'functions';

// ✅ Después - Múltiples @use
@use 'variables' as vars;
@use 'mixins' as mix;
@use 'functions' as func;
```

#### **5. Forward y Re-export**

```scss
// ❌ Antes - Re-export con @import
// _index.scss
@import 'variables';
@import 'mixins';
@import 'functions';

// ✅ Después - Re-export con @forward
// _index.scss
@forward 'variables';
@forward 'mixins';
@forward 'functions';

// Uso en otros archivos
@use 'index' as *;
```

#### **6. Ejemplo Completo de Migración**

```scss
// ❌ Archivo antiguo (Sass 1.44.0)
@import '../../styles/variables';
@import '../../styles/mixins';

.MultipleSelectCheckboxContainer {
  @include flex(row, center, center, nowrap);
  position: relative;
  
  button {
    width: 100%;
    @include flex(row, space-between, center, nowrap);
    
    span {
      color: $fontColor1;
      margin-right: 10px;
    }
  }
}

.MultipleSelectCheckboxMenuItem {
  .MultipleSelectCheckboxMenuItemCheckbox {
    color: $actionColor1 !important;
  }
  
  div {
    padding-right: 10px;
  }
}

// ✅ Archivo migrado (Sass 1.89.2)
@use '../../styles/variables' as vars;
@use '../../styles/mixins' as mix;

.MultipleSelectCheckboxContainer {
  @include mix.flex(row, center, center, nowrap);
  position: relative;
  
  button {
    width: 100%;
    @include mix.flex(row, space-between, center, nowrap);
    
    span {
      color: vars.$fontColor1;
      margin-right: 10px;
    }
  }
}

.MultipleSelectCheckboxMenuItem {
  .MultipleSelectCheckboxMenuItemCheckbox {
    color: vars.$actionColor1 !important;
  }
  
  div {
    padding-right: 10px;
  }
}
```

#### **7. Variables CSS Custom Properties**

```scss
// ❌ Antes - Variables Sass tradicionales
$primary-color: #15E7BC;
$secondary-color: #FF46B5;

.button {
  background-color: $primary-color;
  color: $secondary-color;
}

// ✅ Después - CSS Custom Properties (más moderno)
:root {
  --primary-color: #15E7BC;
  --secondary-color: #FF46B5;
}

.button {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}
```

#### **8. Mejoras de Performance**

```scss
// ❌ Antes - Imports innecesarios
@import 'variables';
@import 'mixins';
@import 'functions';
@import 'animations';

// Solo uso variables y mixins
.container {
  @include flex(row, center, center);
  color: $fontColor1;
}

// ✅ Después - Solo lo que necesitas
@use 'variables' as vars;
@use 'mixins' as mix;

.container {
  @include mix.flex(row, center, center);
  color: vars.$fontColor1;
}
```

### **Beneficios de la Actualización de Sass**

1. **Mejor Performance**: `@use` solo carga lo que necesitas
2. **Namespaces**: Evita conflictos de nombres
3. **Tree Shaking**: Mejor optimización del bundle
4. **Compatibilidad**: Mejor soporte para módulos CSS
5. **Mantenibilidad**: Código más organizado y predecible
6. **Futuro**: Sintaxis recomendada para futuras versiones

### **Comandos de Migración Automática**

```bash
# Instalar sass-migrator (herramienta oficial)
npm install -g sass-migrator

# Migrar un archivo específico
sass-migrator module --migrate-deps <path-to-file>

# Migrar todo un directorio
sass-migrator module --migrate-deps src/styles/

# Verificar compatibilidad
sass-migrator module --dry-run src/styles/
```

## 🔄 Cambios en el Código

### **Imports de Material-UI**
```javascript
// Antes (Material-UI v4)
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Después (MUI v5)
import { Button, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
```

### **React Router v5 → v6**
```javascript
// Antes (React Router v5)
import { Switch, Route } from 'react-router-dom'
<Switch>
  <Route exact path="/" component={Home} />
</Switch>

// Después (React Router v6)
import { Routes, Route } from 'react-router-dom'
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
```

### **AWS Amplify Storage**
```javascript
// Antes
import { Storage } from 'aws-amplify'
const url = await Storage.get(key)

// Después
import { getUrl } from 'aws-amplify/storage'
const { url } = await getUrl({ key })
```

### **React 18 - createRoot**
```javascript
// Antes (React 17)
import ReactDOM from 'react-dom'
ReactDOM.render(<App />, document.getElementById('root'))

// Después (React 18)
import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('root'))
root.render(<App />)
```

## 🚀 Beneficios de las Actualizaciones

1. **Mejor Rendimiento**: React 18 incluye mejoras significativas de rendimiento
2. **Nuevas Características**: Suspense, Concurrent Features, Automatic Batching
3. **Mejor Soporte**: MUI v5 tiene mejor soporte y documentación
4. **Seguridad**: Dependencias actualizadas con parches de seguridad
5. **Compatibilidad**: Mejor compatibilidad con navegadores modernos
6. **Mantenibilidad**: Código más limpio y mantenible

## 📋 Checklist de Verificación

- [x] Material-UI v4 → MUI v5
- [x] React 17 → React 18
- [x] React Router v5 → v6
- [x] AWS Amplify actualizado
- [x] Testing Library actualizado
- [x] ESLint actualizado
- [x] JSDoc actualizado
- [x] Sass actualizado a 1.89.2
- [x] Dependencias removidas
- [x] Imports corregidos
- [x] Hooks useEffect corregidos
- [x] Props de Grid corregidos
- [x] Componentes ImageAvatar corregidos
- [x] Manifest.json corregido
- [x] Modales con botones anidados corregidos

## 🔍 Problemas Comunes y Soluciones

### **Error: "destroy is not a function"**
**Causa**: useEffect retornando una promesa directamente
**Solución**: Envolver la función async en una función normal

```javascript
// ❌ Incorrecto
useEffect(async () => {
  const result = await someAsyncFunction()
  return () => result.destroy()
}, [])

// ✅ Correcto
useEffect(() => {
  let mounted = true
  const fetchData = async () => {
    const result = await someAsyncFunction()
    if (mounted) {
      // usar result
    }
  }
  fetchData()
  return () => {
    mounted = false
  }
}, [])
```

### **Warning: "Invalid DOM property"**
**Causa**: Props de Material-UI v4 en MUI v5
**Solución**: Usar props correctos de MUI v5

```javascript
// ❌ Material-UI v4
<Grid item xs={12} sm={6} md={4}>

// ✅ MUI v5
<Grid item xs={12} sm={6} md={4}>
```

### **Error: "Cannot read property 'url' of undefined"**
**Causa**: URL de Amplify Storage como objeto en lugar de string
**Solución**: Extraer correctamente la URL

```javascript
// ❌ Incorrecto
const url = await Storage.get(key)

// ✅ Correcto
const { url } = await getUrl({ key })
```

### **Error: "@import is deprecated"**
**Causa**: Uso de @import en Sass 1.89.2
**Solución**: Migrar a @use

```scss
// ❌ Incorrecto
@import 'variables';
@import 'mixins';

// ✅ Correcto
@use 'variables' as vars;
@use 'mixins' as mix;
```

## 📚 Recursos Adicionales

- [MUI v5 Migration Guide](https://mui.com/material-ui/migration/migration-v4/)
- [React 18 Upgrade Guide](https://react.dev/blog/2022/03/08/react-18-upgrade-guide)
- [React Router v6 Migration](https://reactrouter.com/docs/en/v6/upgrading/v5)
- [AWS Amplify v6 Migration](https://docs.amplify.aws/lib/migrate-data/q/platform/js/)
- [Sass @use Migration Guide](https://sass-lang.com/documentation/at-rules/use/)
- [Sass Migrator Tool](https://sass-lang.com/documentation/cli/migrator/)

---

**Nota**: Este documento se actualiza continuamente conforme se realizan nuevas migraciones y correcciones en el proyecto. 