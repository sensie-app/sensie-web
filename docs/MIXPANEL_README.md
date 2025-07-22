# Mixpanel Integration and Tracking

## 1. Mixpanel Installation

Install the official Mixpanel library for JavaScript:
```bash
npm install mixpanel-browser
```

---

## 2. Global Mixpanel Configuration

**Modified file:**  
`src/index.js`

**Changes made:**
- Mixpanel was imported and configured at the app startup.
- Initialized with the Mixpanel token using an environment variable (`REACT_APP_MIXPANEL_TOKEN`).

**Code snippet:**
```js
import mixpanel from 'mixpanel-browser'

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, {
  debug: process.env.NODE_ENV === 'development',
  track_pageview: true,
  persistence: 'localStorage'
})

mixpanel.track('App Loaded')
```

**Note:**  
Make sure you have in your `.env` file:
```
REACT_APP_MIXPANEL_TOKEN=your_mixpanel_token
```

---

## 3. Mixpanel Event Utilities

**Created file:**  
`src/utils/mixpanel.js`

**What does it contain?**
- Utility functions for tracking events, identifying users, tracking pages, actions, forms, and errors.
- Helpers for common events such as login, logout, registration, affirmation creation, etc.

**Usage example:**
```js
import { trackEvents, MixpanelUtils } from '../utils/mixpanel'

// Track login
trackEvents.userLogin('email')

// Identify user
MixpanelUtils.identify(userId, { $email: user.email, $name: user.name })
```

---

## 4. Authentication Event Tracking

**Modified file:**  
`src/dashboard/containers/AuthStateApp.js`

**Features implemented:**
- Automatic tracking of login, registration, and logout using Amplify hooks.
- User identification in Mixpanel with their email, name, and other data.
- Improved function to get user email from different possible locations in the user object.

**Relevant code snippet:**
```js
const getUserEmail = (user) => {
  return (
    user?.attributes?.email ||
    user?.email ||
    user?.signInUserSession?.idToken?.payload?.email ||
    user?.signInDetails?.loginId ||
    undefined
  )
}

useEffect(() => {
  if (route === 'authenticated' && previousRoute !== 'authenticated') {
    trackEvents.userLogin('email')
    console.log('Amplify user:', user)
    if (user) {
      MixpanelUtils.identify(user.username, {
        $email: getUserEmail(user),
        $name: `${user.attributes?.name || ''} ${user.attributes?.family_name || ''}`.trim(),
        user_id: user.username,
        sign_up_date: user.attributes?.created_at,
        phone_number: user.attributes?.phone_number
      })
    }
  }
  // ...other events
}, [route, user, previousRoute])
```

---

## 5. Manual Logout Tracking

**Modified file:**  
`src/dashboard/components/AlertDialog.js`

**Features implemented:**
- Tracking of the logout event when the user manually signs out from the logout dialog.

**Code snippet:**
```js
import { trackEvents } from '../../utils/mixpanel'

const handleSignOut = async () => {
  try {
    trackEvents.userLogout()
    await signOut()
    handleAuthStateChange('signedout')
  } catch (error) {
    console.error('Error signing out:', error)
  }
}
```

---

## 6. Profile Event Tracking

**Modified file:**  
`src/dashboard/pages/Profile/index.js`

**Features implemented:**
- Tracking when uploading or deleting profile image.
- Tracking when saving profile changes.

**Code snippet:**
```js
import { trackEvents } from '../../../utils/mixpanel'

// When uploading image
trackEvents.uploadProfileImage()

// When deleting image
trackEvents.useFeature('Remove Profile Image')

// When saving profile
trackEvents.updateProfile(updatedFields)
```

---

## 7. Landing Page Visit Tracking

**Modified file:**  
`src/landing/pages/Home.js`

**Features implemented:**
- Automatic tracking when a user visits the landing page.

**Code snippet:**
```js
import { trackEvents } from '../../utils/mixpanel'

useEffect(() => {
  trackEvents.navigateToPage('Landing Page')
}, [])
```

---

## 8. **Events Being Tracked**

- **App Loaded**: When the app initializes.
- **User Login**: When a user signs in.
- **User Signup**: When a user registers.
- **User Logout**: When a user signs out (automatic or manual).
- **Landing Page**: When a user visits the landing page.
- **Upload Profile Image**: When a user uploads a profile image.
- **Remove Profile Image**: When a user deletes their profile image.
- **Update Profile**: When a user updates their profile.
- **Page View**: When navigating to a specific page (you can use `trackEvents.navigateToPage('Page Name')` on any page).

---