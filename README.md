# React + TypeScript Boilerplate

This project is a modern React boilerplate with TypeScript, Redux Toolkit, React Router, SCSS, ESLint, Prettier, Husky, and Storybook.

## Features & Setup Summary

- **React + TypeScript**: Type-safe React development
- **Redux Toolkit**: State management with example slice and async thunks
- **React Router**: Routing setup
- **SCSS**: Sass styling support
- **ESLint & Prettier**: Code linting and formatting
- **Husky**: Git hooks for linting on commit
- **Storybook**: UI component development and documentation
- **Alias Imports**: Clean import paths using `@src` (see `tsconfig.json`)

## Environment Variables

Environment variables are managed using [env-cmd](https://www.npmjs.com/package/env-cmd) and separate `.env` files for each environment.

### Setup

Create your environment files in the `env/` directory:

```
env/
	.env.dev      # Development environment variables
	.env.staging  # Staging environment variables
	.env.prod     # Production environment variables
```

Example `.env.dev`:

```
REACT_APP_API_URL=https://dev.api.example.com
REACT_APP_FEATURE_FLAG=true
```

### Usage

To use environment variables in your code, reference them as:

```
process.env.REACT_APP_API_URL
```

Scripts like `npm run dev`, `npm run staging`, and `npm run prod` will automatically load the correct environment file.

## How to Run the Project

### Development

```
yarn dev
# or
npm run dev
```

### Staging

```
yarn staging
# or
npm run staging
```

### Production

```
yarn prod
# or
npm run prod
```

### Build

```
yarn build:dev
yarn build:staging
yarn build:prod
# or
npm run build:dev
npm run build:staging
npm run build:prod
```

### Test

```
yarn test
# or
npm run test
```

### Lint & Format

```
npm run eslint:check
npm run eslint:fix
npm run prettier:check
npm run prettier:fix
```

### Storybook

```
npm run storybook
# Open http://localhost:6006 to view Storybook
```

## Additional Info

- **Git Hooks**: Husky runs lint checks before commit
- **Alias Imports**: Use `@src/` for cleaner imports
- **SCSS**: Import `.scss` files directly in components
- **Redux**: See `src/redux/slices/` for example slice and async thunks
- **Storybook**: See `.storybook/` for config and `src/**/*.stories.tsx` for stories

---

For more details, see the documentation for each tool:
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Storybook](https://storybook.js.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
