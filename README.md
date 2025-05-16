<p align="center">
  <picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://avatars.githubusercontent.com/u/192115606?s=400&u=84f3ce7b97e7ca93ff1be276ef4de0d32312008d&v=4">
  <img src="https://avatars.githubusercontent.com/u/192115606?s=400&u=84f3ce7b97e7ca93ff1be276ef4de0d32312008d&v=4" width="130" alt="Logo for Kaiju">
</picture>
</p>

<h1 align="center">
  kaiju-template
</h1>

<p align="center">
  <b>Kaiju</b> it’s a full-stack, typesafe boilerplate built on top of vanilla React, Hono RPC, PostgreSQL and TypeScript.
</p>

<p align="center">
 Get started with the template by clicking <code>Use this template</code> button on the top of the page.
</p>

## A Modern SPA Starter

> 🚧 **Work in Progress**
>
> Kaiju is currently in active development.

This project is inspired by the [T3 Stack](https://github.com/t3-oss/create-t3-app) but focuses on a different use case: making it easy to build and deploy single-page applications (SPAs) without the overhead of Next.js or server components, while keeping the backend as a separate application.

If your app doesn’t need SSR, using a plain React setup with Vite and deploying it via CDN can be much simpler and cheaper. This starter provides a clean foundation for that kind of workflow.

It’s a reasonably opinionated minimalistic boilerplate where every tool is carefully chosen to provide the best DX and TypeScript support. At the same time every piece is easily replaceable — you can swap Mantine for shadcn/ui, Drizzle for Kysely or Prisma, Hono for tRPC/Express/Nest and more, tailoring the stack to fit your preferences and needs.

## Components

### Frontend

- React
- React Router
- React Query
- Vite
- Mantine UI

### Backend

- Hono
- PostgreSQL
- Drizzle

### Other

- TypeScript
- Zod
- i18n
- ESLint, Prettier, husky
- Turborepo
- Docker
- Digital Ocean
- GitHub Actions
- Sentry

## Requirements

This application uses [Turborepo](https://turbo.build/) and [pnpm](https://pnpm.io/) for monorepo configuration, [docker-compose](https://docs.docker.com/compose/) for running infrastructure (PostgreSQL, Redis, etc).
Install the next tools before starting:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/) &rarr; `npm i -g pnpm@latest-10`
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Turborepo](https://turbo.build/repo/) &rarr; `pnpm i turbo --global`

## Run application

`pnpm infra`. Wait until the whole infrastructure starts and follow the next step.

`pnpm i`. Install dependencies.

`pnpm migrate`. Run migrations.

`pnpm dev`. Run the application.

Application will be accesible on [http://localhost:5173/](http://localhost:5173/)

TBD

## Documentation

TBD

## Deployment

TBD
