# Function: useResendTimer()

```ts
function useResendTimer(email: string | undefined): object;
```

Defined in: [auth/hooks/useResendTimer.ts:16](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/hooks/useResendTimer.ts#L16)

Starts and manages the resend-code countdown used by OTP-based auth flows.

## Parameters

### email

`string` \| `undefined`

Email value used to decide whether the timer should start on first mount.

## Returns

`object`

Timer state plus helpers for restarting the countdown and creating a new expiry timestamp.

### seconds

```ts
seconds: number;
```

### isRunning

```ts
isRunning: boolean;
```

### restart

```ts
restart: (newExpiryTimestamp: Date, newAutoStart?: boolean) => void;
```

#### Parameters

##### newExpiryTimestamp

`Date`

##### newAutoStart?

`boolean`

#### Returns

`void`

### getOtpExpiry

```ts
getOtpExpiry: () => Date;
```

#### Returns

`Date`
