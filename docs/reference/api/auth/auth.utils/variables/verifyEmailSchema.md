# Variable: verifyEmailSchema

```ts
const verifyEmailSchema: ZodObject<
  {
    otpCode: ZodString;
  },
  "strip",
  ZodTypeAny,
  {
    otpCode: string;
  },
  {
    otpCode: string;
  }
>;
```

Defined in: [auth/auth.utils.ts:41](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.utils.ts#L41)

Validation schema for submitting an email verification OTP code.
