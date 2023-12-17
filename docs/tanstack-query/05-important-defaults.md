---
id: tanstack-query-05
slug: /tanstack-query-important-defaults
title: Important defaults
sidebar_label: 05 - Important defaults
draft: false
---

A summary from https://tanstack.com/query/latest/docs/react/guides/important-defaults

| Properties           | Default          | Desc                                                 |
| -------------------- | ---------------- | ---------------------------------------------------- |
| staleTime            | 0 (ms)           | cache data is considered as stale by default         |
| gcTime               | 5x60x1000ms (5m) | the time when inactive queries are garbage collected |
| retry / retryDelay   | 3 / 1s-2s-4s     | failed queries will auto retried                     |
| refetchOnMount       | true             | refetch if the new instance of query mount           |
| refetchOnWindowFocus | true             | refetch if the window is refocused                   |
| refetchOnReconnect   | true             | refetch if the network is reconnected                |
| refetchInterval      | N/A              | optional, trigger refetch until a condition is met   |

**Demo**<br/>
[![Edit simple-query-test](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/simple-query-test-3mlzlq?embed=1&file=%2Fsrc%2Findex.jsx)

:::note Notes

- Cache data is considered as `stale` unless you specify the `staleTime`
- Query may not be refetch quite a lot during development, due to refetch configs.

:::


<BlogFooter />
