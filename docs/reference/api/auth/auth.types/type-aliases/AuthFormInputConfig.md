# Type Alias: AuthFormInputConfig\<T\>

```ts
type AuthFormInputConfig<T> = object;
```

Defined in: [auth/auth.types.ts:98](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.types.ts#L98)

Describes a single field rendered by the shared auth form components.

## Type Parameters

### T

`T` _extends_ `FieldValues`

## Properties

### name

```ts
name: FieldPath<T>;
```

Defined in: [auth/auth.types.ts:100](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.types.ts#L100)

React Hook Form field name for the input.

---

### placeholder

```ts
placeholder: string;
```

Defined in: [auth/auth.types.ts:102](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.types.ts#L102)

Placeholder text shown when the field is empty.

---

### label

```ts
label: string;
```

Defined in: [auth/auth.types.ts:104](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.types.ts#L104)

Visible label rendered above the field.

---

### isPasswordInput?

```ts
optional isPasswordInput?: boolean;
```

Defined in: [auth/auth.types.ts:106](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/auth/auth.types.ts#L106)

Marks the field to be rendered with the password input component.
