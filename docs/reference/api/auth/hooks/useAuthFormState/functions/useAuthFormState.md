# Function: useAuthFormState()

```ts
function useAuthFormState<TSchema, TConfigKey>(
  formSchema: TSchema,
  configKey: TConfigKey,
  defaultValues?: DefaultValues<TypeOf<TSchema>>,
): object;
```

Defined in: [auth/hooks/useAuthFormState.ts:17](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/hooks/useAuthFormState.ts#L17)

Builds shared React Hook Form state for an auth flow using a Zod schema and config key.

## Type Parameters

### TSchema

`TSchema` _extends_ `ZodTypeAny`

Zod schema used to infer the form value shape.

### TConfigKey

`TConfigKey` _extends_
\| `"login"`
\| `"register"`
\| `"verifyEmailOtp"`
\| `"emailOnly"`
\| `"verifyPasswordReset"`

Key used to select the matching field config.

## Parameters

### formSchema

`TSchema`

Validation schema for the current form.

### configKey

`TConfigKey`

Key used to select field metadata from `AUTH_FORM_INPUT_CONFIG`.

### defaultValues?

`DefaultValues`\<`TypeOf`\<`TSchema`\>\>

Optional initial values passed to `useForm`.

## Returns

`object`

Form helpers, selected field config, and local loading and error state for the auth UI.

### errors

```ts
errors: FieldErrors<TypeOf<TSchema>>;
```

### control

```ts
control: Control<TypeOf<TSchema>, any, TypeOf<TSchema>>;
```

### handleSubmit

```ts
handleSubmit: UseFormHandleSubmit<TypeOf<TSchema>, TypeOf<TSchema>>;
```

### isValid

```ts
isValid: boolean;
```

### globalError

```ts
globalError: string | null;
```

### setGlobalError

```ts
setGlobalError: Dispatch<SetStateAction<string | null>>;
```

### loading

```ts
loading: boolean;
```

### setLoading

```ts
setLoading: Dispatch<SetStateAction<boolean>>;
```

### config

```ts
config: object[TConfigKey];
```
