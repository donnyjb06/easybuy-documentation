# Function: sendOtpEmail()

```ts
function sendOtpEmail(email: object): Promise<AuthResponse>;
```

Defined in: [auth/auth.actions.ts:73](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.actions.ts#L73)

Requests a new email verification code for the supplied email address.

## Parameters

### email

Object containing the email address used for the resend request.

#### email

`string`

## Returns

`Promise`\<[`AuthResponse`](../../auth.types/interfaces/AuthResponse.md)\>

The parsed auth response returned by the backend.
