# Function: default()

```ts
function default(props: ErrorTextProps): false | Element;
```

Defined in: [components/ErrorText.tsx:17](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/components/ErrorText.tsx#L17)

Conditionally renders styled error text.

## Parameters

### props

[`ErrorTextProps`](../interfaces/ErrorTextProps.md)

Visibility flag, message content, and passthrough text props.

## Returns

`false` \| `Element`

The styled error message when visible; otherwise nothing.
