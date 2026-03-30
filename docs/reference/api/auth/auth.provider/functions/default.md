# Function: default()

```ts
function default(props: AuthProviderProps): Element;
```

Defined in: [auth/auth.provider.tsx:35](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.provider.tsx#L35)

Provides auth state and auth actions to the application tree.

## Parameters

### props

[`AuthProviderProps`](../interfaces/AuthProviderProps.md)

Contains the child subtree that consumes auth state.

## Returns

`Element`

An auth context provider wrapping the supplied children.
