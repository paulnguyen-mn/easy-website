---
id: tanstack-query-10
slug: /tanstack-dependent-query
title: Dependent Query
sidebar_label: 10 - Dependent Query
draft: false
---

### Overview

- What: `lazy queries`, only fetch when some `conditions are met`
- When: fetch data based on some conditions
- Where: pass conditions from components
- Why: if conditions not match, it may `fail` when querying
- How: use `enabled` props from `useQuery`

:::note Notes

- `enabled` is a boolean, remember to properly convert to boolean
- Example: convert productId string into boolean `enabled: !!productId`

:::

> Ref: https://tanstack.com/query/latest/docs/react/guides/dependent-queries

### Fetch profile only if logged in

- Won't fetch profile until `isLoggedIn = true`

```ts
function useProfile() {
  const { isLoggedIn } = useAuth()

  return useQuery({
    queryKey: [QueryKeys.USER_PROFILE],
    // highlight-next-line
    enabled: isLoggedIn,
  })
}
```

### Fetch product details only if having productId

- Won't fetch product until `isLoggedIn = true` and `productId not empty`

```ts
function useProductDetails(productId) {
  const { isLoggedIn } = useAuth()

  return useQuery({
    queryKey: [QueryKeys.PRODUCT_DETAILS, productId],
    // highlight-next-line
    enabled: isLoggedIn && !!productId,
  })
}
```

### See how it works in our project


```tsx
/* GPT
add a fake button to toggle login
- label: toggle login
- action: toggle state isLoggedIn
bind state isLoggedIn to useProfile --> enabled props
*/

import { useProfile } from '@/hooks'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: profile, isLoading, error } = useProfile({ enabled: isLoggedIn });

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  if (isLoading) {
    return <div>Loading profile...</div>
  }

  if (error) {
    return <div>Error loading profile: {error.message}</div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Profile</h1>
        <button onClick={toggleLogin}>Toggle login</button>
        {profile && (
          <div>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            {/* Render other profile data as needed */}
          </div>
        )}
      </header>
    </div>
  )
}

export default App
```


<BlogFooter />
