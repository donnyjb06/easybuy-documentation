# Function: requestPasswordReset()

```ts
function requestPasswordReset(data: object): Promise<AuthResponse>;
```

Defined in: [auth/auth.actions.ts:119](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.actions.ts#L119)

Requests a password reset code for the supplied email address.

## Parameters

### data

Password reset request form values.

#### email

`string` = `...`

## Returns

`Promise`\<[`AuthResponse`](../../auth.types/interfaces/AuthResponse.md)\>

The parsed auth response returned by the backend.
