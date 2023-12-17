---
id: tanstack-query-06
slug: /tanstack-query-project-structure
title: Project Structure
sidebar_label: 06 - Project Structure
draft: false
---

### The idea

```bash
# Page -> Component -> Hook --> useQuery --> APIs (axios)
# Example:
HomePage
|__ UserAvatar
|  |__ useUserProfile() hook
|     |__ useQuery() hook setup query key 
|        |__ axios get user profile data
```

:::note Notes

- Avoid using `useQuery()` directly in your component, try to put in a custom hook for reuse later.
- Custom hook can be at component or page level, whichever better for your case.

:::

### Sample project structure setup

```bash
src
|__ api
|   |__ axios-client.ts
|   |__ product-api.ts
|   |__ user-api.ts
|   |__ [name]-api.ts
|
|__ hooks # global hooks
|   |__ use-profile.ts
|   |__ use-theme.ts
|   |__ use-language.ts
|
|__ components # global components
|   |__ user-profile.tsx
|
|__ pages
|   |__ product-list # page-level
|   |   |__ components # local components
|   |   |__ hooks # local hooks
|   |       |__ use-product-list.ts
|   |__ home
|
|__ app.tsx # app-level
|__ main.tsx # top-level
```


:::note Notes

- Prefer `local` than `global`
- Naming convention, use lower case with dash (just personal reference)
- No best setup to fit all cases, feel free to customize to fit your needs.

:::

### Code demo

```ts title="src/api/axios-client.ts"
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://dummyapi.com/', // replace with your API base URL
});

export default axiosClient;
```

```ts title="src/api/user-api.ts"
import axiosClient from './axios-client';

export const getUserProfile = async () => {
  const response = await axiosClient.get('/user');
  return response.data;
};
```

```ts title="src/hooks/use-profile.ts"
import { useQuery } from 'react-query';
import { getUserProfile } from '../api/user-api';

export const useProfile = () => {
  return useQuery('profile', getUserProfile);
};
```

```tsx title="src/components/user-profile.tsx"
import React from 'react';
import { useProfile } from '../hooks/use-profile';

const UserProfile: React.FC = () => {
  const { data, isLoading, error } = useProfile();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

  return (
    <div>
      <h1>Welcome, {data?.name}!</h1>
      <p>Your email is {data?.email}</p>
    </div>
  );
}

export default UserProfile;
```

```tsx title="src/pages/home.tsx"
import React from 'react';
import UserProfile from '../components/user-profile';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <UserProfile />
    </div>
  );
}

export default HomePage;
```

> Powered by GPT-4 AI

<BlogFooter />
