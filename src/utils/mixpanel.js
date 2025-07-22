import mixpanel from 'mixpanel-browser'

// Mixpanel utility functions
export const MixpanelUtils = {
  // Track custom events
  track: (eventName, properties = {}) => {
    try {
      mixpanel.track(eventName, {
        ...properties,
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV
      })
    } catch (error) {
      console.error('Mixpanel track error:', error)
    }
  },

  // Identify user
  identify: (userId, userProperties = {}) => {
    try {
      mixpanel.identify(userId)
      if (Object.keys(userProperties).length > 0) {
        mixpanel.people.set(userProperties)
      }
    } catch (error) {
      console.error('Mixpanel identify error:', error)
    }
  },

  // Set user properties
  setUserProperties: (properties) => {
    try {
      mixpanel.people.set(properties)
    } catch (error) {
      console.error('Mixpanel setUserProperties error:', error)
    }
  },

  // Track page views
  trackPageView: (pageName, properties = {}) => {
    try {
      mixpanel.track('Page View', {
        page_name: pageName,
        ...properties
      })
    } catch (error) {
      console.error('Mixpanel trackPageView error:', error)
    }
  },

  // Track user actions
  trackUserAction: (action, properties = {}) => {
    try {
      mixpanel.track('User Action', {
        action,
        ...properties
      })
    } catch (error) {
      console.error('Mixpanel trackUserAction error:', error)
    }
  },

  // Track form submissions
  trackFormSubmission: (formName, properties = {}) => {
    try {
      mixpanel.track('Form Submission', {
        form_name: formName,
        ...properties
      })
    } catch (error) {
      console.error('Mixpanel trackFormSubmission error:', error)
    }
  },

  // Track errors
  trackError: (errorType, errorMessage, properties = {}) => {
    try {
      mixpanel.track('Error', {
        error_type: errorType,
        error_message: errorMessage,
        ...properties
      })
    } catch (error) {
      console.error('Mixpanel trackError error:', error)
    }
  },

  // Reset user (for logout)
  reset: () => {
    try {
      mixpanel.reset()
    } catch (error) {
      console.error('Mixpanel reset error:', error)
    }
  }
}

// Common event tracking functions
export const trackEvents = {
  // Authentication events
  userLogin: (method = 'email') => {
    MixpanelUtils.track('User Login', { login_method: method })
  },

  userLogout: () => {
    MixpanelUtils.track('User Logout')
    MixpanelUtils.reset()
  },

  userSignup: (method = 'email') => {
    MixpanelUtils.track('User Signup', { signup_method: method })
  },

  // Affirmation events
  createAffirmation: (topics = []) => {
    MixpanelUtils.track('Create Affirmation', {
      topics_count: topics.length,
      topics: topics.map(t => t.name || t)
    })
  },

  deleteAffirmation: (affirmationId) => {
    MixpanelUtils.track('Delete Affirmation', { affirmation_id: affirmationId })
  },

  // Profile events
  updateProfile: (fields = []) => {
    MixpanelUtils.track('Update Profile', { updated_fields: fields })
  },

  uploadProfileImage: () => {
    MixpanelUtils.track('Upload Profile Image')
  },

  // Navigation events
  navigateToPage: (pageName) => {
    MixpanelUtils.trackPageView(pageName)
  },

  // Feature usage
  useFeature: (featureName, properties = {}) => {
    MixpanelUtils.track('Feature Used', {
      feature_name: featureName,
      ...properties
    })
  }
}

export default MixpanelUtils
