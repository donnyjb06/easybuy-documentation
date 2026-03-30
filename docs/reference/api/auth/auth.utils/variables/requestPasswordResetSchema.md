# Variable: requestPasswordResetSchema

```ts
const requestPasswordResetSchema: ZodObject<
  {
    email: ZodString;
  },
  "strip",
  ZodTypeAny,
  {
    email: string;
  },
  {
    email: string;
  }
>;
```

Defined in: [auth/auth.utils.ts:47](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.utils.ts#L47)

Validation schema for requesting a password reset email.
