# Function: useRequestPasswordReset()

```ts
function useRequestPasswordReset(): object;
```

Defined in: [auth/hooks/useRequestPasswordReset.ts:13](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/hooks/useRequestPasswordReset.ts#L13)

Manages the request-password-reset form state and submission flow.

## Returns

`object`

Field config, form state, and submit behavior for the request-reset screen.

### config

```ts
config: object[];
```

### control

```ts
control: Control<
  {
    email: string;
  },
  any,
  {
    email: string;
  }
>;
```

### isValid

```ts
isValid: boolean;
```

### handleFormSubmit

```ts
handleFormSubmit: (e?: BaseSyntheticEvent<object, any, any>) => Promise<void>;
```

#### Parameters

##### e?

`BaseSyntheticEvent`\<`object`, `any`, `any`\>

#### Returns

`Promise`\<`void`\>

### loading

```ts
loading: boolean;
```

### globalError

```ts
globalError: string | null;
```
