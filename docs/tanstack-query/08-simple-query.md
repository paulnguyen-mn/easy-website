---
id: tanstack-query-08
slug: /tanstack-simple-query
title: Simple Query
sidebar_label: 08 - Simple Query
draft: true
---

## UserAPI - getProfile()

```ts title="src/api/user-api.ts"
// GPT: export userApi object with one method getProfile from axiosClient.get() with path /public-profile
import axiosClient from './axios-client'

export interface UserProfile {
  id: string
  name: string
  city: string
  email: string
}

export const userApi = {
  getProfile: (): Promise<UserProfile> => axiosClient.get('/public-profile'),
}
```

## New hook: useProfile() 

```ts title="src/hooks/use-profile.ts"
// GPT: define custom hook useProfile to use useQuery and call API userApi.getProfile
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { userApi, UserProfile } from '@/api'

export const useProfile = (options?: Omit<UseQueryOptions<UserProfile>, 'queryKey' | 'queryFn'>) => {
  return useQuery<UserProfile>({
    ...options,
    queryKey: ['profile'],
    queryFn: userApi.getProfile,
  })
}

```

## Use custom hook in our component

```tsx title="src/App.tsx"
// GPT: define App component that use useProfile() hook and render it's data to UI
import { useProfile } from '@/hooks'

const App: React.FC = () => {
  const { data: userProfile, isLoading, isError, error } = useProfile()

  if (isLoading) {
    return <div>Loading profile...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h1>User Profile</h1>
      {userProfile && (
        <div>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          {/* Render other user profile data as needed */}
        </div>
      )}
    </div>
  )
}

export default App
```

## Fix compatible issue, Tanstack Query required at least react 18

Update react, react-dom to the latest version

```bash
bun add react react-dom
bun add --dev @types/react @types/react-dom
```

:::note Notes

In case the issue is not resolved, perhaps we can try to clean node_modules and re-install again.

:::

## Update main.tsx code

```tsx title="main.tsx"
// GPT: change to react 18 setup version
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// create once with default options
const queryClient = new QueryClient()
const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
```

<BlogFooter />
