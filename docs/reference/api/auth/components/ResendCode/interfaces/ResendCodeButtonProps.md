# Interface: ResendCodeButtonProps

Defined in: [auth/components/ResendCode.tsx:4](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/components/ResendCode.tsx#L4)

## Properties

| Property                                                  | Type                      | Description                                           | Defined in                                                                                                                                                                 |
| --------------------------------------------------------- | ------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="property-seconds"></a> `seconds`                   | `number`                  | Remaining seconds in the resend cooldown.             | [auth/components/ResendCode.tsx:6](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/components/ResendCode.tsx#L6)   |
| <a id="property-isrunning"></a> `isRunning`               | `boolean`                 | Indicates whether the cooldown timer is still active. | [auth/components/ResendCode.tsx:8](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/components/ResendCode.tsx#L8)   |
| <a id="property-handleresendcode"></a> `handleResendCode` | () => `Promise`\<`void`\> | Callback fired when the user requests a new OTP code. | [auth/components/ResendCode.tsx:10](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/components/ResendCode.tsx#L10) |
