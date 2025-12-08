# Documentación de la API de `sensiebackendUserManager`

La función Lambda `sensiebackendUserManager` se encarga de gestionar las operaciones relacionadas con los usuarios en Amazon Cognito. Todas las operaciones expuestas a través de GraphQL que utilizan esta función están restringidas al grupo de `admins`.

A continuación, se detallan las mutaciones y consultas disponibles.

## Mutaciones (Mutations)

Las mutaciones se utilizan para modificar datos.

---

### 1. `updateCognitoUser`

Actualiza los atributos de un usuario existente en Cognito.

**Input:** `CognitoUpdateUserInput!`

| Campo | Tipo | Descripción | Requerido |
| :--- | :--- | :--- | :--- |
| `username` | `String!` | El nombre de usuario (generalmente el `sub` o email) del usuario a modificar. | Sí |
| `attributes` | `[CognitoUserAttributeInput!]!` | Una lista de atributos para actualizar. | Sí |

**`CognitoUserAttributeInput`**

| Campo | Tipo | Descripción | Requerido |
| :--- | :--- | :--- | :--- |
| `Name` | `String!` | El nombre del atributo a actualizar (ej: 'email', 'name', 'gender'). | Sí |
| `Value` | `String!` | El nuevo valor para el atributo. | Sí |

**Respuesta:** `CognitoUserResponse`

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `success` | `Boolean!` | `true` si la operación fue exitosa, `false` en caso contrario. |
| `username` | `String` | El nombre de usuario del usuario afectado. |
| `message` | `String` | Un mensaje descriptivo sobre el resultado de la operación. |

**Ejemplo de uso:**

```graphql
mutation UpdateUser {
  updateCognitoUser(
    input: {
      username: "a1b2c3d4-e5f6-7890-1234-567890abcdef"
      attributes: [
        { Name: "name", Value: "John" }
        { Name: "family_name", Value: "Doe" }
      ]
    }
  ) {
    success
    username
    message
  }
}
```

---

### 2. `verifyCognitoUserAttribute`

Marca un atributo de usuario como verificado en Cognito. Esto es útil, por ejemplo, para verificar manualmente un correo electrónico o número de teléfono.

**Input:** `CognitoVerifyUserInput!`

| Campo | Tipo | Descripción | Requerido |
| :--- | :--- | :--- | :--- |
| `username` | `String!` | El nombre de usuario del usuario a modificar. | Sí |
| `attributeName` | `String!` | El nombre del atributo a verificar (ej: 'email'). | Sí |
| `attributeValue` | `String!` | El valor del atributo en true o false. | Sí |

**Respuesta:** `CognitoUserResponse` (Misma estructura que `updateCognitoUser`)

**Ejemplo de uso:**

```graphql
mutation VerifyUserEmail {
  verifyCognitoUserAttribute(
    input: {
      username: "a1b2c3d4-e5f6-7890-1234-567890abcdef"
      attributeName: "email"
      attributeValue: "true"
    }
  ) {
    success
    username
    message
  }
}
```

---

### 3. `resetCognitoUserPassword`

Inicia el flujo de restablecimiento de contraseña para un usuario. Esto generalmente envía un código o un enlace al correo electrónico o teléfono verificado del usuario.

**Input:** `CognitoUsernameInput!`

| Campo | Tipo | Descripción | Requerido |
| :--- | :--- | :--- | :--- |
| `username` | `String!` | El nombre de usuario para el cual se restablecerá la contraseña. | Sí |

**Respuesta:** `CognitoUserResponse` (Misma estructura que `updateCognitoUser`)

**Ejemplo de uso:**

```graphql
mutation ResetPassword {
  resetCognitoUserPassword(input: { username: "a1b2c3d4-e5f6-7890-1234-567890abcdef" }) {
    success
    username
    message
  }
}
```

---

## Consultas (Queries)

Las consultas se utilizan para leer datos.

---

### 1. `getCognitoUser`

Obtiene los detalles de un usuario específico de Cognito.

**Input:** `CognitoUsernameInput`

| Campo | Tipo | Descripción | Requerido |
| :--- | :--- | :--- | :--- |
| `username` | `String!` | El nombre de usuario del usuario a consultar. | Sí |

**Respuesta:** `CognitoUserPool`

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `Username` | `ID!` | El identificador único del usuario. |
| `UserStatus` | `String` | El estado del usuario (ej: 'CONFIRMED', 'UNCONFIRMED'). |
| `Enabled` | `Boolean` | Indica si el usuario está habilitado. |
| `UserCreateDate` | `AWSDateTime` | La fecha y hora de creación del usuario. |
| `UserLastModifiedDate`| `AWSDateTime` | La fecha y hora de la última modificación del usuario. |
| `Attributes` | `UserCognitoAttributes` | Un objeto que contiene los atributos del usuario. |

**`UserCognitoAttributes`**

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `email` | `String` | El correo electrónico del usuario. |
| `email_verified` | `Boolean` | `true` si el email ha sido verificado. |
| `phone_number` | `String` | El número de teléfono del usuario. |
| `phone_number_verified`| `Boolean` | `true` si el teléfono ha sido verificado. |
| `name` | `String` | El nombre de pila del usuario. |
| `family_name` | `String` | El apellido del usuario. |
| `preferred_username` | `String` | El nombre de usuario preferido. |
| `gender` | `String` | El género del usuario. |
| `birthdate` | `String` | La fecha de nacimiento del usuario. |
| `sub` | `String` | El identificador único universal del usuario. |

**Ejemplo de uso:**

```graphql
query GetUser {
  getCognitoUser(input: { username: "a1b2c3d4-e5f6-7890-1234-567890abcdef" }) {
    Username
    UserStatus
    Attributes {
      email
      name
    }
  }
}
```

---

### 2. `listCognitoUsers`

Obtiene una lista de todos los usuarios de Cognito en el User Pool.

**Input:** Ninguno.

**Respuesta:** `[CognitoUserPool]`

Una lista de objetos `CognitoUserPool`. La estructura de cada objeto es la misma que la respuesta de `getCognitoUser`.

**Ejemplo de uso:**

```graphql
query ListAllUsers {
  listCognitoUsers {
    Username
    UserStatus
    Enabled
    Attributes {
      email
      name
      family_name
    }
  }
}
```
