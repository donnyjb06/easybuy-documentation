# Function: default()

```ts
function default<T>(props: TextInputProps<T>): Element;
```

Defined in: [components/TextInput.tsx:33](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/components/TextInput.tsx#L33)

Renders a controlled text field backed by React Hook Form.

## Type Parameters

### T

`T` _extends_ `FieldValues`

React Hook Form field values for the owning form.

## Parameters

### props

[`TextInputProps`](../interfaces/TextInputProps.md)\<`T`\>

Field metadata and control state for the input.

## Returns

`Element`

A labeled text input with inline validation feedback.
