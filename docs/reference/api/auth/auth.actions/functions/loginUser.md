# Function: loginUser()

```ts
function loginUser(data: object): Promise<AuthResponse>;
```

Defined in: [auth/auth.actions.ts:17](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.actions.ts#L17)

Sends login credentials to the auth login endpoint.

## Parameters

### data

Login form values validated by `loginFormSchema`.

#### email

`string` = `...`

#### password

`string` = `...`

## Returns

`Promise`\<[`AuthResponse`](../../auth.types/interfaces/AuthResponse.md)\>

The parsed auth response returned by the backend.
