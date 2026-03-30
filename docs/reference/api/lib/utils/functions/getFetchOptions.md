# Function: getFetchOptions()

```ts
function getFetchOptions(
  method?: "POST" | "GET" | "PUT" | "PATCH" | "DELETE",
  body?: Record<string, unknown>,
  token?: string,
): object;
```

Defined in: [lib/utils.ts:6](https://github.com/donnyjb06/easybuy-frontend/blob/f335e58b3343f58ac61377e7e5bc4ed20294ddf7/vendor/lib/utils.ts#L6)

## Parameters

### method?

`"POST"` \| `"GET"` \| `"PUT"` \| `"PATCH"` \| `"DELETE"`

### body?

`Record`\<`string`, `unknown`\>

### token?

`string`

## Returns

`object`

### method

```ts
method: "POST" | "GET" | "PUT" | "PATCH" | "DELETE";
```

### headers

```ts
headers: object;
```

#### headers.content-type

```ts
content-type: string = "application/json";
```

#### headers.authorization?

```ts
optional authorization?: string;
```

### body?

```ts
optional body?: string;
```
