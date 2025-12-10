# Migration Documentation - Sensie Web

## Summary of Changes

This document details the migrations and fixes performed in the Sensie Web project to update from Material-UI v4 to MUI v5, React 17 to React 18, and other important improvements.

## 📦 Dependency Updates

### ✅ Updated Dependencies

#### **Material-UI v4 → MUI v5**
- `@material-ui/core` → `@mui/material` (^5.17.1)
- `@material-ui/icons` → `@mui/icons-material` (^5.17.1)
- `@material-ui/lab` → `@mui/lab` (^5.0.0-alpha.165)
- Added `@emotion/react` (^11.14.0) and `@emotion/styled` (^11.14.0)
- Added `@mui/styles` (^6.4.12) for compatibility

#### **React 17 → React 18**
- `react` → ^18.2.0
- `react-dom` → ^18.2.0
- `react-router-dom` → ^6.30.1 (v5 → v6)

#### **AWS Amplify**
- `aws-amplify` → ^6.15.1
- `@aws-amplify/ui-react` → ^6.11.2
- Added individual modules:
  - `@aws-amplify/auth` → ^6.13.1
  - `@aws-amplify/api` → ^6.3.13
  - `@aws-amplify/storage` → ^6.9.1
  - `@aws-amplify/analytics` → ^7.0.82

#### **Testing Library**
- `@testing-library/react` → ^16.3.0
- `@testing-library/user-event` → ^14.6.1
- `@testing-library/jest-dom` → ^6.6.3

#### **Other Important Updates**
- `@nivo/*` → ^0.99.0 (all packages)
- `recharts` → ^3.0.0
- `react-toastify` → ^11.0.5
- `react-particles-js` → `react-tsparticles` (^2.12.2) + `tsparticles` (^3.8.1)
- `@wojtekmaj/react-daterange-picker` → ^6.0.0
- `axios` → ^1.10.0
- `moment` → ^2.30.1
- `prop-types` → ^15.8.1
- `web-vitals` → ^5.0.3

#### **Redux Toolkit**
- Added `@reduxjs/toolkit` → ^1.9.7 (recommended for new Redux projects)

### 🔧 Updated Development Dependencies

#### **ESLint**
- `eslint` → ^8.57.0
- `eslint-config-standard` → ^17.1.0
- `eslint-plugin-promise` → ^6.1.1
- `eslint-plugin-react` → ^7.34.0

#### **Configuration**
- Added `@mui/codemod` → ^7.1.1 (for automatic migrations)
- Added `better-docs` → ^2.3.2 (for JSDoc documentation)
- `sass` → ^1.89.2

### 🗑️ Removed Dependencies

The following dependencies were removed because they are no longer used in the code:
- `react-multi-select-component` - Replaced by native MUI components
- `react-select-search` - Replaced by native MUI components
- `react-scrollmagic` - No usage found in code
- `react-reveal` - No usage found in code

### 📝 Updated Configurations

#### **ESLint (.eslintrc.json)**
- Updated to ES2022
- Added React 18 configuration
- Disabled `react/react-in-jsx-scope` (not needed in React 17+)
- Configured `react/prop-types` as warning

#### **JSDoc (jsdoc.json)**
- Improved exclusion configuration
- Added README.md support
- Improved template configuration

## 🎨 Sass 1.44.0 → 1.89.2 Migration

### **Main Changes in Sass**

#### **1. @import → @use Syntax (Recommended)**

```scss
// ❌ Before (Sass 1.44.0) - @import syntax (deprecated)
@import 'variables';
@import 'mixins';

.container {
  @include flex(row, center, center);
  color: $fontColor1;
}

// ✅ After (Sass 1.89.2) - @use syntax (recommended)
@use 'variables' as vars;
@use 'mixins' as mix;

.container {
  @include mix.flex(row, center, center);
  color: vars.$fontColor1;
}
```

#### **2. Namespace and Aliases**

```scss
// ❌ Before - Global variables
$fontColor1: #ffffff;
$actionColor1: #15E7BC;

// ✅ After - With namespace
@use 'variables' as *; // Import everything without namespace
@use 'variables' as vars; // With 'vars' namespace
@use 'mixins' as mix; // With 'mix' namespace

.container {
  color: $fontColor1; // If using 'as *'
  // Or
  color: vars.$fontColor1; // If using 'as vars'
}
```

#### **3. Real Project Example**

```scss
// ❌ Before (file: src/dashboard/components/TitleAndButton/styles.module.scss)
@import '../../styles/variables';
@import '../../styles/mixins';

.TitleAndButtonContainer {
  @include flex(row, space-between, center, nowrap);
  color: $fontColor1;
  background-color: $grayColor6;
}

// ✅ After (updated file)
@use '../../styles/variables' as vars;
@use '../../styles/mixins' as mix;

.TitleAndButtonContainer {
  @include mix.flex(row, space-between, center, nowrap);
  color: vars.$fontColor1;
  background-color: vars.$grayColor6;
}
```

#### **4. Multiple Imports with @use**

```scss
// ❌ Before - Multiple @import
@import 'variables';
@import 'mixins';
@import 'functions';

// ✅ After - Multiple @use
@use 'variables' as vars;
@use 'mixins' as mix;
@use 'functions' as func;
```

#### **5. Forward and Re-export**

```scss
// ❌ Before - Re-export with @import
// _index.scss
@import 'variables';
@import 'mixins';
@import 'functions';

// ✅ After - Re-export with @forward
// _index.scss
@forward 'variables';
@forward 'mixins';
@forward 'functions';

// Usage in other files
@use 'index' as *;
```

#### **6. Complete Migration Example**

```scss
// ❌ Old file (Sass 1.44.0)
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

// ✅ Migrated file (Sass 1.89.2)
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

#### **7. CSS Custom Properties Variables**

```scss
// ❌ Before - Traditional Sass variables
$primary-color: #15E7BC;
$secondary-color: #FF46B5;

.button {
  background-color: $primary-color;
  color: $secondary-color;
}

// ✅ After - CSS Custom Properties (more modern)
:root {
  --primary-color: #15E7BC;
  --secondary-color: #FF46B5;
}

.button {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}
```

#### **8. Performance Improvements**

```scss
// ❌ Before - Unnecessary imports
@import 'variables';
@import 'mixins';
@import 'functions';
@import 'animations';

// Only using variables and mixins
.container {
  @include flex(row, center, center);
  color: $fontColor1;
}

// ✅ After - Only what you need
@use 'variables' as vars;
@use 'mixins' as mix;

.container {
  @include mix.flex(row, center, center);
  color: vars.$fontColor1;
}
```

### **Benefits of Sass Update**

1. **Better Performance**: `@use` only loads what you need
2. **Namespaces**: Avoids naming conflicts
3. **Tree Shaking**: Better bundle optimization
4. **Compatibility**: Better support for CSS modules
5. **Maintainability**: More organized and predictable code
6. **Future**: Recommended syntax for future versions

### **Automatic Migration Commands**

```bash
# Install sass-migrator (official tool)
npm install -g sass-migrator

# Migrate a specific file
sass-migrator module --migrate-deps <path-to-file>

# Migrate an entire directory
sass-migrator module --migrate-deps src/styles/

# Check compatibility
sass-migrator module --dry-run src/styles/
```

## 🔄 Code Changes

### **Material-UI Imports**
```javascript
// Before (Material-UI v4)
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// After (MUI v5)
import { Button, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
```

### **React Router v5 → v6**
```javascript
// Before (React Router v5)
import { Switch, Route } from 'react-router-dom'
<Switch>
  <Route exact path="/" component={Home} />
</Switch>

// After (React Router v6)
import { Routes, Route } from 'react-router-dom'
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
```

### **AWS Amplify Storage**
```javascript
// Before
import { Storage } from 'aws-amplify'
const url = await Storage.get(key)

// After
import { getUrl } from 'aws-amplify/storage'
const { url } = await getUrl({ key })
```

### **React 18 - createRoot**
```javascript
// Before (React 17)
import ReactDOM from 'react-dom'
ReactDOM.render(<App />, document.getElementById('root'))

// After (React 18)
import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('root'))
root.render(<App />)
```

## 🚀 Benefits of Updates

1. **Better Performance**: React 18 includes significant performance improvements
2. **New Features**: Suspense, Concurrent Features, Automatic Batching
3. **Better Support**: MUI v5 has better support and documentation
4. **Security**: Updated dependencies with security patches
5. **Compatibility**: Better compatibility with modern browsers
6. **Maintainability**: Cleaner and more maintainable code

## 📋 Verification Checklist

- [x] Material-UI v4 → MUI v5
- [x] React 17 → React 18
- [x] React Router v5 → v6
- [x] AWS Amplify updated
- [x] Testing Library updated
- [x] ESLint updated
- [x] JSDoc updated
- [x] Sass updated to 1.89.2
- [x] Dependencies removed
- [x] Imports corrected
- [x] useEffect hooks corrected
- [x] Grid props corrected
- [x] ImageAvatar components corrected
- [x] Manifest.json corrected
- [x] Modals with nested buttons corrected

## 🔍 Common Issues and Solutions

### **Error: "destroy is not a function"**
**Cause**: useEffect returning a promise directly
**Solution**: Wrap the async function in a normal function

```javascript
// ❌ Incorrect
useEffect(async () => {
  const result = await someAsyncFunction()
  return () => result.destroy()
}, [])

// ✅ Correct
useEffect(() => {
  let mounted = true
  const fetchData = async () => {
    const result = await someAsyncFunction()
    if (mounted) {
      // use result
    }
  }
  fetchData()
  return () => {
    mounted = false
  }
}, [])
```

### **Warning: "Invalid DOM property"**
**Cause**: Material-UI v4 props in MUI v5
**Solution**: Use correct MUI v5 props

```javascript
// ❌ Material-UI v4
<Grid item xs={12} sm={6} md={4}>

// ✅ MUI v5
<Grid item xs={12} sm={6} md={4}>
```

### **Error: "Cannot read property 'url' of undefined"**
**Cause**: Amplify Storage URL as object instead of string
**Solution**: Extract URL correctly

```javascript
// ❌ Incorrect
const url = await Storage.get(key)

// ✅ Correct
const { url } = await getUrl({ key })
```

### **Error: "@import is deprecated"**
**Cause**: Using @import in Sass 1.89.2
**Solution**: Migrate to @use

```scss
// ❌ Incorrect
@import 'variables';
@import 'mixins';

// ✅ Correct
@use 'variables' as vars;
@use 'mixins' as mix;
```

## 📚 Additional Resources

- [MUI v5 Migration Guide](https://mui.com/material-ui/migration/migration-v4/)
- [React 18 Upgrade Guide](https://react.dev/blog/2022/03/08/react-18-upgrade-guide)
- [React Router v6 Migration](https://reactrouter.com/docs/en/v6/upgrading/v5)
- [AWS Amplify v6 Migration](https://docs.amplify.aws/lib/migrate-data/q/platform/js/)
- [Sass @use Migration Guide](https://sass-lang.com/documentation/at-rules/use/)
- [Sass Migrator Tool](https://sass-lang.com/documentation/cli/migrator/)

---

**Note**: This document is continuously updated as new migrations and fixes are performed in the project. 