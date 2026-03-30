# Function: default()

```ts
function default<T>(props: PasswordInputProps<T>): Element;
```

Defined in: [components/PasswordInput.tsx:37](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/components/PasswordInput.tsx#L37)

Renders a controlled password field with show and hide toggle behavior.

## Type Parameters

### T

`T` _extends_ `FieldValues`

React Hook Form field values for the owning form.

## Parameters

### props

[`PasswordInputProps`](../interfaces/PasswordInputProps.md)\<`T`\>

Field metadata and control state for the input.

## Returns

`Element`

A labeled password input with inline validation feedback.
