---
id: tanstack-query-04
slug: /tanstack-query-provider-setup
title: Setup QueryClientProvider
sidebar_label: 04 - Setup QueryClientProvider
draft: false
---

- Create `queryClient` **once** ONLY, as it hold the query cache data.
- QueryClient has default options, check it out [here](https://tanstack.com/query/latest/docs/react/guides/important-defaults) 

```tsx title="src/main.tsx" {1,4,8-10}
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// create once with default options
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

## Add devtools for easier debugging

Install devtools package - [more details](https://tanstack.com/query/latest/docs/react/devtools)

```bash
bun add @tanstack/react-query-devtools
```


```tsx title="src/main.tsx" {1,7}
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

## Core concepts 

| #   | Name               | Desc                                                                            |
| --- | ------------------ | ------------------------------------------------------------------------------- |
| 1   | Queries            | Promise based to fetch data from API, binding to an `unique key`                |
| 2   | Mutations          | Used to modify query data (create/update/delete) or perform server side-effects |
| 3   | Query Invalidation | Smart invalidate queries and potentially trigger refetch                        |

> More details: https://tanstack.com/query/latest/docs/react/quick-start

:::note Notes

- Data fetching is **not** handled by React Query, it will be handled by axios/fetch/... lib instead
- React Query will manage the data return from a Promise (specifically APIs in our case)
- Fetching data can come from HTTP method `GET` or `POST`

:::


<BlogFooter />
