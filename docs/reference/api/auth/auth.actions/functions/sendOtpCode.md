# Function: sendOtpCode()

```ts
function sendOtpCode(data: object): Promise<AuthResponse>;
```

Defined in: [auth/auth.actions.ts:94](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.actions.ts#L94)

Submits an email verification code for the supplied email address.

## Parameters

### data

Object containing the email address and OTP code to verify.

#### otpCode

`string`

#### email

`string`

## Returns

`Promise`\<[`AuthResponse`](../../auth.types/interfaces/AuthResponse.md)\>

The parsed auth response returned by the backend.
