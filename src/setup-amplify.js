// Side-effect-only module: configures Amplify BEFORE any other module
// in the app tree gets a chance to call generateClient(), Auth.fetch(), etc.
//
// Why this exists: the action files (user.actions.js, invitations.actions.js,
// etc.) call `generateClient()` from `@aws-amplify/api` inside their thunk
// bodies. Those thunks fire on initial useEffect of containers like
// AuthStateApp. If Amplify hasn't been configured yet — because index.js
// imports App BEFORE running Amplify.configure — the API client throws
// "Amplify has not been configured." The fix is to configure FIRST, then
// let the rest of the app load.
//
// Usage: `import './setup-amplify'` at the very top of src/index.js,
// before any other imports.

import { Amplify } from 'aws-amplify'
import outputs from './amplifyconfiguration.json'

// Amplify v6 stores Auth/API/Storage configs in a NESTED shape, not the
// v5 flat `aws_*` keys that `amplify pull` writes to
// amplifyconfiguration.json. We tried `Amplify.configure(flatConfig)`
// and `parseAmplifyConfig(flatConfig)` — neither reliably populated the
// API section. Constructing the v6 shape explicitly is the bulletproof fix.

const v6Config = {
  Auth: {
    Cognito: {
      userPoolId: outputs.aws_user_pools_id,
      userPoolClientId: outputs.aws_user_pools_web_client_id,
      identityPoolId: outputs.aws_cognito_identity_pool_id,
      loginWith: {
        oauth: (outputs.oauth && outputs.oauth.domain)
          ? {
              domain: outputs.oauth.domain,
              scopes: outputs.oauth.scope || ['email', 'openid', 'profile'],
              redirectSignIn: (outputs.oauth.redirectSignIn || '').split(','),
              redirectSignOut: (outputs.oauth.redirectSignOut || '').split(','),
              responseType: outputs.oauth.responseType || 'code'
            }
          : undefined,
        username: (outputs.aws_cognito_username_attributes || []).includes('EMAIL') === false,
        email: (outputs.aws_cognito_username_attributes || []).includes('EMAIL')
      },
      mfa: { status: (outputs.aws_cognito_mfa_configuration || 'OFF').toLowerCase() }
    }
  },
  API: {
    GraphQL: {
      endpoint: outputs.aws_appsync_graphqlEndpoint,
      region: outputs.aws_appsync_region,
      defaultAuthMode: 'userPool'
    },
    REST: (outputs.aws_cloud_logic_custom || []).reduce((acc, api) => {
      acc[api.name] = { endpoint: api.endpoint, region: api.region }
      return acc
    }, {})
  },
  Storage: outputs.aws_user_files_s3_bucket
    ? {
        S3: {
          bucket: outputs.aws_user_files_s3_bucket,
          region: outputs.aws_user_files_s3_bucket_region
        }
      }
    : undefined
}

Amplify.configure(v6Config)
// Also keep the v5 flat config registered so legacy code paths that
// query the old shape still find what they expect.
Amplify.configure({ ...v6Config, ...outputs })

if (typeof window !== 'undefined') {
  // eslint-disable-next-line no-console
  console.log('[setup-amplify] configured. API.GraphQL.endpoint =',
    v6Config.API.GraphQL.endpoint)
}
