# Function: useAuth()

```ts
function useAuth(): AuthContextType;
```

Defined in: [auth/auth.consumer.ts:10](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.consumer.ts#L10)

Returns the current auth context value.

## Returns

[`AuthContextType`](../../auth.types/interfaces/AuthContextType.md)

The auth state and actions exposed by `AuthProvider`.

## Throws

Error when used outside of `AuthProvider`.
