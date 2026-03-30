# Function: useVerifyPasswordReset()

```ts
function useVerifyPasswordReset(): object;
```

Defined in: [auth/hooks/useVerifyPasswordReset.ts:14](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/hooks/useVerifyPasswordReset.ts#L14)

Manages the password reset verification form, resend behavior, and redirects.

## Returns

`object`

Form state, resend timer state, and handlers for the verify-reset screen.

### config

```ts
config: (
  | {
  isPasswordInput?: undefined;
  placeholder: string;
  name: "otpCode";
  label: string;
}
  | {
  placeholder: string;
  name: "password";
  label: string;
  isPasswordInput: true;
}
  | {
  placeholder: string;
  name: "confirmPassword";
  label: string;
  isPasswordInput: true;
})[];
```

### onResend

```ts
onResend: () => Promise<void>;
```

#### Returns

`Promise`\<`void`\>

### seconds

```ts
seconds: number;
```

### isRunning

```ts
isRunning: boolean;
```

### control

```ts
control: Control<
  {
    otpCode: string;
    password: string;
    confirmPassword: string;
  },
  any,
  {
    otpCode: string;
    password: string;
    confirmPassword: string;
  }
>;
```

### loading

```ts
loading: boolean;
```

### globalError

```ts
globalError: string | null;
```

### handleFormSubmit

```ts
handleFormSubmit: (e?: BaseSyntheticEvent<object, any, any>) => Promise<void>;
```

#### Parameters

##### e?

`BaseSyntheticEvent`\<`object`, `any`, `any`\>

#### Returns

`Promise`\<`void`\>

### isValid

```ts
isValid: boolean;
```

## Remarks

REQUIRES CLARIFICATION: direct-entry behavior depends on auth state already containing the email address.
