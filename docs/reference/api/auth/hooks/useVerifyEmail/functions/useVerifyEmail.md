# Function: useVerifyEmail()

```ts
function useVerifyEmail(): object;
```

Defined in: [auth/hooks/useVerifyEmail.ts:17](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/hooks/useVerifyEmail.ts#L17)

Manages the email verification form, resend behavior, and route transitions.

## Returns

`object`

Verification form state, resend timer state, and handlers for the verify-email screen.

### config

```ts
config: object[] = AUTH_FORM_INPUT_CONFIG.verifyEmailOtp;
```

### globalError

```ts
globalError: string | null;
```

### control

```ts
control: Control<
  {
    otpCode: string;
  },
  any,
  {
    otpCode: string;
  }
>;
```

### isValid

```ts
isValid: boolean;
```

### seconds

```ts
seconds: number;
```

### isRunning

```ts
isRunning: boolean;
```

### handleResendCode

```ts
handleResendCode: () => Promise<void>;
```

#### Returns

`Promise`\<`void`\>

### handleFormSubmit

```ts
handleFormSubmit: (e?: BaseSyntheticEvent<object, any, any>) => Promise<void>;
```

#### Parameters

##### e?

`BaseSyntheticEvent`\<`object`, `any`, `any`\>

#### Returns

`Promise`\<`void`\>

### loading

```ts
loading: boolean;
```

## Remarks

REQUIRES CLARIFICATION: the resend timer currently restarts before the resend request finishes.
