# 🔐 Technical Documentation - Authentication System

## 📋 Table of Contents
- [General Description](#general-description)
- [System Architecture](#system-architecture)
- [Authentication Flow](#authentication-flow)
- [Configuration](#configuration)
- [Token Management](#token-management)
- [Main Components](#main-components)
- [Security Considerations](#security-considerations)
- [Troubleshooting](#troubleshooting)
- [Recommended Improvements](#recommended-improvements)


---

## 🎯 General Description

The application uses **AWS Amplify v6** with **Amazon Cognito** to manage user authentication. The system provides robust authentication, automatic token renewal, and integration with tracking services.

### Technologies Used
- **AWS Amplify v6.15.1** - Main framework
- **@aws-amplify/ui-react v6.11.2** - UI components
- **@aws-amplify/api v6.3.13** - GraphQL client
- **@aws-amplify/auth v6.13.1** - Authentication management
- **Amazon Cognito** - Authentication service
- **Redux** - State management
- **Mixpanel** - Event tracking

---

## 🏗️ System Architecture

### File Structure
```
src/
├── index.js                    # Global Amplify configuration
├── routes/
│   └── App.js                  # Main routing
├── dashboard/
│   ├── routes/
│   │   └── dashboard.routes.js # Protected routes
│   └── containers/
│       └── AuthStateApp.js     # Authentication guardian
└── dashboard/
    └── components/
        └── AlertDialog.js      # Logout handling
```

### Route Protection Flow
```
1. index.js → Authenticator.Provider
2. App.js → Dashboard/landing separation
3. dashboard.routes.js → AuthStateApp wrapper
4. AuthStateApp → Authentication verification
5. Protected components → Conditional rendering
```

---

## 🔄 Authentication Flow

### 1. Initial Configuration
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

### 2. Routing and Protection
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
      {/* ... more protected routes */}
    </Routes>
  </Layout>
</AuthStateApp>
```

### 3. Authentication Guardian
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

## ⚙️ Configuration

### Authentication States
The system handles the following states (`route`):
- `'signUp'` - User registering
- `'signIn'` - User signing in
- `'authenticated'` - User authenticated
- `'signOut'` - User signing out
- `'confirmSignUp'` - Confirming registration
- `'forgotPassword'` - Password recovery

### Custom Form Fields
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

### Custom Validation
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

## 🔑 Token Management

### Token Types
Amplify automatically handles three types of tokens:

1. **Access Token** (JWT)
   - Duration: 1 hour (configurable)
   - Purpose: API authorization
   - Renewal: Automatic

2. **ID Token** (JWT)
   - Duration: 1 hour (configurable)
   - Purpose: User information
   - Renewal: Automatic

3. **Refresh Token**
   - Duration: 30 days (configurable)
   - Purpose: Renew access/ID tokens
   - Storage: localStorage

### Token Lifecycle
```
1. Authentication → Cognito returns 3 tokens
2. Storage → localStorage (refresh) + memory (access/ID)
3. Automatic renewal → Every hour (access/ID tokens)
4. Expiration → Only when refresh token expires (30 days)
```

### Why Sessions Don't Expire?
The `Authenticator` from Amplify UI React handles internally:
- ✅ Automatic access token renewal
- ✅ Transparent refresh token management
- ✅ Cross-tab synchronization
- ✅ Automatic expiration detection

**Result**: Sessions can last up to 30 days without user intervention.

---

## 🧩 Main Components

### AuthStateApp.js
**Purpose**: Main authentication guardian

**Features**:
- Authentication state verification
- Conditional UI rendering
- Authentication event tracking
- User data management
- Invitation integration

**Main hooks**:
```javascript
const { user, route } = useAuthenticator()
const [authState, setAuthState] = useState()
const [userData, setUser] = useState(null)
```

### AlertDialog.js
**Purpose**: Logout handling

**Features**:
- Logout confirmation
- Redux state cleanup
- Event tracking
- Post-logout redirection

```javascript
const { signOut } = useAuthenticator()

const handleSignOut = async () => {
  trackEvents.userLogout()
  await signOut()
  // Clean Redux state
  handleAuthStateChange('signedout')
}
```

---

## 🔒 Security Considerations

### Current System Advantages
✅ **Smooth user experience** - Doesn't disconnect every hour  
✅ **Automatic renewal** - Transparent to the user  
✅ **Robust management** - Handles errors automatically  
✅ **Industry standard** - Similar to Google, Facebook  

### Disadvantages and Risks
❌ **Very long sessions** - 30 days by default  
❌ **Less control** - Cannot force renewal  
❌ **Total dependency** on Amplify  
❌ **No inactivity logout**  

### Recommended Security Configuration
```javascript
// In AWS Cognito Console
Access Token: 1 hour
ID Token: 1 hour  
Refresh Token: 7 days (instead of 30)
```

---

## 🐛 Troubleshooting

### Common Issues

#### 1. Session Doesn't Expire
**Cause**: Refresh tokens last 30 days by default
**Solution**: Configure shorter time in Cognito Console

#### 2. Expired Tokens
**Cause**: No handling of expired token errors
**Solution**: Implement error interceptors

```javascript
// Example interceptor
const client = generateClient()
client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message?.includes('Token expired')) {
      // Redirect to login
      window.location.href = '/dashboard'
    }
    return Promise.reject(error)
  }
)
```

#### 3. Inconsistent Authentication State
**Cause**: Multiple tabs or corrupted localStorage
**Solution**: Clear localStorage and restart session

### Debugging
```javascript
// Add in AuthStateApp.js for debugging
useEffect(() => {
  if (user && route === 'authenticated') {
    const session = user.signInUserSession
    if (session) {
      console.log('Access Token expires:', new Date(session.accessToken.payload.exp * 1000))
      console.log('ID Token expires:', new Date(session.idToken.payload.exp * 1000))
      console.log('Refresh Token expires:', new Date(session.refreshToken.payload.exp * 1000))
    }
  }
}, [user, route])
```

---

## 🚀 Recommended Improvements

### 1. Implement Inactivity Logout
```javascript
// In AuthStateApp.js
useEffect(() => {
  if (user && route === 'authenticated') {
    let inactivityTimer
    
    const resetTimer = () => {
      clearTimeout(inactivityTimer)
      inactivityTimer = setTimeout(() => {
        signOut()
      }, 30 * 60 * 1000) // 30 minutes
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

### 2. Refresh Token Expiration Detection
```javascript
useEffect(() => {
  if (user && route === 'authenticated') {
    const session = user.signInUserSession
    if (session) {
      const refreshTokenExp = session.refreshToken.payload.exp * 1000
      const now = Date.now()
      const timeUntilExpiry = refreshTokenExp - now
      
      if (timeUntilExpiry < 24 * 60 * 60 * 1000) { // Less than 24 hours
        // Show warning to user
        console.warn('Refresh token expires soon')
      }
    }
  }
}, [user, route])
```

### 3. Manual Token Renewal
```javascript
useEffect(() => {
  if (user && route === 'authenticated') {
    const interval = setInterval(async () => {
      try {
        await fetchAuthSession({ forceRefresh: true })
        console.log('Tokens manually renewed')
      } catch (error) {
        console.error('Error renewing tokens:', error)
      }
    }, 30 * 60 * 1000) // Every 30 minutes

    return () => clearInterval(interval)
  }
}, [user, route])
```

### 4. Expired Token Error Handling
```javascript
// In Redux actions
export const listUsersByOrganizationIdAction = (id) => async (dispatch) => {
  try {
    const client = generateClient()
    const response = await client.graphql({ query: getClientsFromCoach(id) })
    // ... successful handling
  } catch (error) {
    if (error.message?.includes('Token expired') || error.code === 'TokenExpiredError') {
      console.log('Token expired, redirecting to login')
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

## 📚 References

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [Amplify UI React Documentation](https://ui.docs.amplify.aws/)
- [Amazon Cognito Documentation](https://docs.aws.amazon.com/cognito/)
- [Amplify v6 Migration Guide](https://docs.amplify.aws/react/build-a-backend/auth/migrate-from-v5-to-v6/)

---

## 📝 Maintenance Notes

### Current Versions
- **AWS Amplify**: v6.15.1
- **@aws-amplify/ui-react**: v6.11.2
- **@aws-amplify/api**: v6.3.13
- **@aws-amplify/auth**: v6.13.1

### Configuration Files
- `amplifyconfiguration.json` - Amplify configuration
- `aws-exports.js` - Legacy configuration (not used in v6)

### Monitoring
- **Mixpanel**: Authentication event tracking
- **Console logs**: Token and session debugging
- **Redux DevTools**: Authentication state

---

*Last updated: $(date)*
*Document version: 1.0* 