# Variable: registerFormSchema

```ts
const registerFormSchema: ZodEffects<
  ZodObject<
    {
      email: ZodString;
      password: ZodString;
      username: ZodString;
      confirmPassword: ZodString;
    },
    "strip",
    ZodTypeAny,
    {
      email: string;
      password: string;
      username: string;
      confirmPassword: string;
    },
    {
      email: string;
      password: string;
      username: string;
      confirmPassword: string;
    }
  >,
  {
    email: string;
    password: string;
    username: string;
    confirmPassword: string;
  },
  {
    email: string;
    password: string;
    username: string;
    confirmPassword: string;
  }
>;
```

Defined in: [auth/auth.utils.ts:5](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.utils.ts#L5)

Validation schema for the registration form, including password confirmation matching.
