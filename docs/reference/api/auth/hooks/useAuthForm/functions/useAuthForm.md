# Function: useAuthForm()

```ts
function useAuthForm(isLoginForm: boolean): object;
```

Defined in: [auth/hooks/useAuthForm.ts:13](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/hooks/useAuthForm.ts#L13)

Orchestrates the shared login and registration form behavior.

## Parameters

### isLoginForm

`boolean`

`true` for the login flow and `false` for the registration flow.

## Returns

`object`

Form state and a submit handler for the shared auth form UI.

### globalError

```ts
globalError: string | null;
```

### control

```ts
control: Control<
  | {
      email: string;
      password: string;
      username: string;
      confirmPassword: string;
    }
  | {
      email: string;
      password: string;
    },
  any,
  | {
      email: string;
      password: string;
      username: string;
      confirmPassword: string;
    }
  | {
      email: string;
      password: string;
    }
>;
```

### errors

```ts
errors: FieldErrors<
  | {
      email: string;
      password: string;
      username: string;
      confirmPassword: string;
    }
  | {
      email: string;
      password: string;
    }
>;
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

### isValid

```ts
isValid: boolean;
```

### loading

```ts
loading: boolean;
```
