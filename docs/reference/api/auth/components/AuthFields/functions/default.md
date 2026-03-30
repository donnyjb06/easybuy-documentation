# Function: default()

```ts
function default<T>(props: AuthFieldsProps<T>): Element[];
```

Defined in: [auth/components/AuthFields.tsx:20](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/components/AuthFields.tsx#L20)

Renders auth form fields from config using either `TextInput` or `PasswordInput`.

## Type Parameters

### T

`T` _extends_ `FieldValues`

React Hook Form field values for the current auth form.

## Parameters

### props

[`AuthFieldsProps`](../interfaces/AuthFieldsProps.md)\<`T`\>

Field metadata and control state for the current form.

## Returns

`Element`[]

The rendered list of auth field components.
