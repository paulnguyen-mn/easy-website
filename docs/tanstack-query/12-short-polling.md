---
id: tanstack-query-12
slug: /tanstack-short-polling
title: Short Polling
sidebar_label: 12 - Short Polling
draft: false
---

### Overview

- What: keep fetching data until some conditions are met
- Where: transaction details page
- How: short polling using `refetchInterval`
  - if status is not final (success, cancelled) --> refetch in X miliseconds
  - otherwise --> stop refetching

### Implementation

- [x] BE API: [tnx list](https://js-post-api.herokuapp.com/api/transactions?_page=1&_limit=10)
- [x] New API file: transaction details
- [x] New hook: useTnxDetails() --> useQuery()
  - Fetch every 3s until status is final (success, cancelled)
- [x] New page: TnxDetailsPage - Display transaction data
  - Get tnxId from url params
  - Use new hook to get data and render on UI

:::tip GPT - useTnxDetails()

change code to integrate with tnxApi.getDetails
receive a new params tnxId as the first position
enabled only if tnxId is truthy
refetchInterval - keep fetching until status is completed or cancelled or failed

:::

:::tip GPT - TnxDetailsPage

setup a new component to get tnxId from search url params
use tnxId to call useTnxDetails() and render data to UI

:::


<BlogFooter />
