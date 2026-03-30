# Variable: verifyPasswordResetSchema

```ts
const verifyPasswordResetSchema: ZodEffects<
  ZodObject<
    {
      otpCode: ZodString;
      password: ZodString;
      confirmPassword: ZodString;
    },
    "strip",
    ZodTypeAny,
    {
      otpCode: string;
      password: string;
      confirmPassword: string;
    },
    {
      otpCode: string;
      password: string;
      confirmPassword: string;
    }
  >,
  {
    otpCode: string;
    password: string;
    confirmPassword: string;
  },
  {
    otpCode: string;
    password: string;
    confirmPassword: string;
  }
>;
```

Defined in: [auth/auth.utils.ts:51](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.utils.ts#L51)

Validation schema for verifying a password reset code and replacement password.
