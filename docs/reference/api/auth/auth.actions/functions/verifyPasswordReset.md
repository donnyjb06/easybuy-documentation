# Function: verifyPasswordReset()

```ts
function verifyPasswordReset(
  data: Pick<
    {
      otpCode: string;
      password: string;
      confirmPassword: string;
    },
    "password" | "otpCode"
  > &
    object,
): Promise<AuthResponse>;
```

Defined in: [auth/auth.actions.ts:135](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.actions.ts#L135)

Submits a password reset verification code and the replacement password.

## Parameters

### data

`Pick`\<\{
`otpCode`: `string`;
`password`: `string`;
`confirmPassword`: `string`;
\}, `"password"` \| `"otpCode"`\> & `object`

Object containing the OTP code, new password, and email address.

## Returns

`Promise`\<[`AuthResponse`](../../auth.types/interfaces/AuthResponse.md)\>

The parsed auth response returned by the backend.
