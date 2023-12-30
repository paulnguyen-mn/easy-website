---
id: tanstack-query-09
slug: /tanstack-query-key
title: Query Key
sidebar_label: 09 - Query Key
draft: false
---

## 1 - Rules

:::note Notes

- Data Type: Array
- Usually, each item will be a string or object `['todos', { page: 1 }]`
- The order of items doesn't matter in object, **but array**
- Should be `unique`, as each key will point to a piece of data

:::

> Source: https://tanstack.com/query/latest/docs/react/guides/query-keys

### The order of items doesn't matter in object, but array

```ts
// same
const params1 = { page: 1, rows: 10 }
const params2 = { rows: 10, page: 1 }

// different
const params1 = [ page: 1, rows: 10 ]
const params2 = [ rows: 10, page: 1 ]
```

### Centralize query keys into one place for better management:

```ts title="src/constants/query-keys.ts"
export const QueryKeys = {
  TODO_LIST: 'TODO_LIST',
  TODO_DETAILS: 'TODO_DETAILS',
  // ...
}
```


## 2 - Example key of todo details

```ts {4,11}
function useTodoDetails(todoId) {
  return useQuery({
    // NO, all todo details will reuse the same key
    queryKey: [QueryKeys.TODO_DETAILS]
  })
}

function useTodoDetails(todoId) {
  return useQuery({
    // YES, should include deps into query key
    queryKey: [QueryKeys.TODO_DETAILS, todoId]
  })
}
```


## 3 - Example key of list of todo

```ts
// params: { page: 1, rows: 10, status: 'completed' }

function useTodoList(params) {
  return useQuery({
    // NO, as all pages will have the same key
    // highlight-next-line
    queryKey: [QueryKeys.TODO_LIST]
  })
}

function useTodoList(params) {
  return useQuery({
    // YES, each page will have one unique key
    // highlight-next-line
    queryKey: [QueryKeys.TODO_LIST, params]
  })
}
```


<BlogFooter />
