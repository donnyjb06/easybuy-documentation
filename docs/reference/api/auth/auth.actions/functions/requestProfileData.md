# Function: requestProfileData()

```ts
function requestProfileData(token: string): Promise<AuthResponse>;
```

Defined in: [auth/auth.actions.ts:36](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.actions.ts#L36)

Requests profile data for the current access token.

## Parameters

### token

`string`

Bearer token used to authorize the profile request.

## Returns

`Promise`\<[`AuthResponse`](../../auth.types/interfaces/AuthResponse.md)\>

The parsed auth response returned by the backend.
