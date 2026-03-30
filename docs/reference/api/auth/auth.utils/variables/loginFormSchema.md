# Variable: loginFormSchema

```ts
const loginFormSchema: ZodObject<
  {
    email: ZodString;
    password: ZodString;
  },
  "strip",
  ZodTypeAny,
  {
    email: string;
    password: string;
  },
  {
    email: string;
    password: string;
  }
>;
```

Defined in: [auth/auth.utils.ts:28](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.utils.ts#L28)

Validation schema for the login form.
