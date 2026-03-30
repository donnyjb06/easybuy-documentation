# Function: registerUser()

```ts
function registerUser(
  data: Pick<RegisterSchemaType, "email" | "password" | "username">,
): Promise<AuthResponse>;
```

Defined in: [auth/auth.actions.ts:51](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.actions.ts#L51)

Sends registration data to the auth register endpoint.

## Parameters

### data

`Pick`\<[`RegisterSchemaType`](../../auth.types/type-aliases/RegisterSchemaType.md), `"email"` \| `"password"` \| `"username"`\>

Registration values required by the backend, excluding `confirmPassword`.

## Returns

`Promise`\<[`AuthResponse`](../../auth.types/interfaces/AuthResponse.md)\>

The parsed auth response returned by the backend.
