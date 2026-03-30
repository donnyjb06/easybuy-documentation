# Variable: AUTH_FORM_INPUT_CONFIG

```ts
const AUTH_FORM_INPUT_CONFIG: object;
```

Defined in: [auth/auth.constants.ts:15](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.constants.ts#L15)

Maps each auth flow to the ordered field metadata rendered by shared auth form components.

## Type Declaration

### login

```ts
login: (
  | {
  placeholder: string;
  name: "email";
  label: string;
  isPasswordInput?: undefined;
}
  | {
  placeholder: string;
  name: "password";
  label: string;
  isPasswordInput: true;
})[];
```

Field metadata for the login form.

### register

```ts
register: (
  | {
  isPasswordInput?: undefined;
  placeholder: string;
  name: "username";
  label: string;
}
  | {
  isPasswordInput?: undefined;
  placeholder: string;
  name: "email";
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

Field metadata for the registration form.

### verifyEmailOtp

```ts
verifyEmailOtp: object[];
```

Field metadata for the email verification form.

### emailOnly

```ts
emailOnly: object[];
```

Field metadata for forms that only collect an email address.

### verifyPasswordReset

```ts
verifyPasswordReset: (
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

Field metadata for the password reset verification form.
