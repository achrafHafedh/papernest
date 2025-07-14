This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

It is built with **Next.js 15**, **React 19**, **Tailwind CSS**, and **TypeScript**.  
It supports **Storybook**, **internationalization**, and a complete testing setup with **Vitest**, **Playwright**, and **Testing Library**.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Storybook

To run Storybook locally:

```bash
npm run storybook
```

Storybook will open at [http://localhost:6006](http://localhost:6006).

## Testing

This project includes unit, integration, and end-to-end (E2E) tests.

### Run unit tests

```bash
npm run test:unit
```

### Run integration tests

```bash
npm run test:integration
```

### Run all tests (unit + integration)

```bash
npm run test
```

### View test coverage

```bash
npm run test:coverage
```

### Run end-to-end (E2E) tests

```bash
npm run test:e2e
```
**Important**: To run the functional tests correctly, make sure the application is running locally using npm run dev. The tests depend on the app being available during execution.

## Internationalization

Internationalization is handled with [`next-intl`](https://next-intl-docs.vercel.app/), making it easy to support multiple languages.

## Tech Stack

- **Next.js 15** – Full-stack React framework
- **React 19** – Latest features like React Compiler
- **Tailwind CSS** – Utility-first styling
- **TypeScript** – Type-safe JavaScript
- **Storybook 9** – Isolated component development
- **Headless UI** – Unstyled accessible components

## Testing Stack

- **Vitest** – Fast unit/integration testing
- **Playwright** – End-to-end browser testing
- **testing-library/react** – Behavior-focused component tests

## Local Environment Variables

To run the app locally, you need to have a `.env.local` file in the root of the project containing environment variables.  

You can create this file with the following variables for the frontend and API endpoints:

```env
NEXT_PUBLIC_URL=http://localhost:3000
NEXT_PUBLIC_API=http://localhost:3000/api
```


## Github

- [GitHub Repository](https://github.com/achrafHafedh/papernest) – this is the public repo containing everything in a versioned repository.

## Deploy on Vercel


This app is already deployed on Vercel and available at:  
[https://papernest-gamma.vercel.app/fr](https://papernest-gamma.vercel.app/fr)
