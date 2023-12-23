---
id: tanstack-query-07
slug: /tanstack-project-setup
title: Project Setup
sidebar_label: 07 - Project Setup
draft: false
---

A few more steps to get our project ready for react-query learning journey! 😊

## 1. VSCode Extension - codeium

Check and follow the tutorial to install [codeium](https://codeium.com/vscode_tutorial) - A free AI code generation.

## 2. Absolute path config

Config paths in tsconfig.json

```json title="tsconfig.json - add new lines as below" {4-7}
{
  "compilerOptions": {
    // ... 
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
}
```

Let vite also understand the `@/*` import syntax

```bash
bun add --dev vite-tsconfig-paths #^4.2.2
```

Add this new plugin to vite.config.ts file:

```ts title="vite.config.ts" {3,8}
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(), 
    tsconfigPaths()
  ],
})
```

Finally, test to see if it works in App.tsx, change css import from `./App.css` to `@/App.css`

```tsx title="App.tsx"
// ...
import '@/App.css'
// ...
```

if it works --> congrats, move to the next step

## 3. Add .prettierrc file

```json title=".prettierrc" - add this file to support code format
{
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false
}
```

## 4. Setup axiosClient

Let find out how to generate this code block with support from Codeium 😱

```ts title="src/api/axios-client.ts"
import axios, { AxiosResponse } from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://js-post-api.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response?.data ?? response,
  (error) => Promise.reject(error),
)

export default axiosClient
```


<BlogFooter />
