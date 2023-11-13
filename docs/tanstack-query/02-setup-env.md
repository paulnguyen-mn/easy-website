---
id: tanstack-query-02
slug: /tanstack-query-setup-env
title: Setup Environment
sidebar_label: 02 - Setup Environment
draft: false
---

Let get your project ready within 1m!? 😱

## 1 - JS Runtime & Toolkit - `bun.sh` 

Install `bun`, [docs](https://bun.sh/docs/installation)

```bash
curl -fsSL https://bun.sh/install | bash # for macOS, Linux, and WSL
```

Update Zsh profile or restart terminal:

```bash
source ~/.zshrc
```

Verify `bun` is installed successfully

```bash
bun -v
# 1.0.11
```

## 2 - Project setup using `bun create`

Setup react project using [vite](https://vitejs.dev/)

```bash		
bun create vite YOUR_PROJECT_NAME
```

:::note Notes

- Replace `YOUR_PROJECT_NAME` with your prefered name
- Follow the instruction to select REACT --> REACT-TS

:::


`cd` to your project folder:

```bash
bun install
```

Start your project locally:

```bash
bun run dev
```

Now your project is ready! ✅

## 3 - Install libs using `bun add`

1. Tanstack Query - v5
2. React Router - v6
3. Axios - v1.6
4. Zustand - v4.4

```bash
bun add @tanstack/react-query react-router-dom axios zustand
```


<BlogFooter />
