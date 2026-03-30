# Interface: AuthData

Defined in: [auth/auth.types.ts:69](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.types.ts#L69)

Stores auth state kept on the client.

## Properties

| Property                                            | Type      | Description                                                                    | Defined in                                                                                                                                         |
| --------------------------------------------------- | --------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="property-email"></a> `email?`                | `string`  | Email associated with the active auth flow.                                    | [auth/auth.types.ts:71](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.types.ts#L71) |
| <a id="property-userid"></a> `userId?`              | `string`  | Backend identifier for the current user.                                       | [auth/auth.types.ts:73](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.types.ts#L73) |
| <a id="property-emailverified"></a> `emailVerified` | `boolean` | Indicates whether the current email has been verified.                         | [auth/auth.types.ts:75](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.types.ts#L75) |
| <a id="property-accesstoken"></a> `accessToken?`    | `string`  | Access token currently stored in memory.                                       | [auth/auth.types.ts:77](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.types.ts#L77) |
| <a id="property-isloggedin"></a> `isLoggedIn`       | `boolean` | REQUIRES CLARIFICATION: initialized in the provider but not currently updated. | [auth/auth.types.ts:79](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.types.ts#L79) |
