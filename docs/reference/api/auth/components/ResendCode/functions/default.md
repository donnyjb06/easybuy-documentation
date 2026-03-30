# Function: default()

```ts
function default(props: ResendCodeButtonProps): Element;
```

Defined in: [auth/components/ResendCode.tsx:19](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/components/ResendCode.tsx#L19)

Renders either the resend cooldown text or the resend action button.

## Parameters

### props

[`ResendCodeButtonProps`](../interfaces/ResendCodeButtonProps.md)

Timer state and resend callback for the OTP flow.

## Returns

`Element`

Cooldown feedback while running, otherwise a resend button.
