# Chef Virtual - Technical Instructions

This document provides foundational context, architectural patterns, and development workflows for the **Chef Virtual** project.

## Project Overview

Chef Virtual is a Next.js application that allows users to select ingredients and generate Brazilian recipes using Google's Gemini 3.1 Flash Lite model.

- **Primary Stack:** Next.js (13.4.7), TypeScript, React (18.2.0).
- **State Management:** Redux (legacy `createStore` with `react-redux`).
- **Styling:** Tailwind CSS (utility-first) with some usage of `@styled-icons/material`.
- **API Integration:** Google Generative AI SDK (`@google/generative-ai`).
- **Testing:** Vitest for unit testing.
- **AI Model:** `gemini-3.1-flash-lite` (via `@google/generative-ai`).

## Architecture & Conventions

### Directory Structure
- `src/app`: Next.js App Router (entry point: `page.tsx`).
- `src/templates`: High-level page layouts and associated logic (e.g., `Home`, `Recipes`).
- `src/components`: Reusable UI components (Button, Ingredient, Menu, etc.).
- `src/redux`: State management logic (actions, reducers, selectors, store).
- `src/services`: Integration with external services (e.g., Gemini API).
- `src/api`: Static JSON files for ingredient lists (`ingredients.json`, `fullIngredients.json`).
- `public/assets`: Static images for ingredients.

### State Management (Redux)
The project uses a standard Redux pattern:
- **Root Reducer:** Located at `src/redux/root-reducer.ts`.
- **Slices:** Organized by feature (e.g., `src/redux/selected-ingredients`).
- **Access:** Components use `useSelector` and `useDispatch` from `react-redux`.

### Logic & Data Fetching
- **Custom Hooks:** Business logic for templates is extracted into custom hooks (e.g., `src/templates/Home/useHome.ts`).
- **Gemini Integration:** Centralized in `src/services/gemini.ts`. The prompt requests HTML output from Gemini for direct rendering.

### Styling
- **Tailwind CSS:** Preferred for most UI elements.
- **Styled Components:** While `styled-components` is in `package.json`, current implementation (e.g., `Home.tsx`, `Ingredient.tsx`) heavily favors Tailwind utility classes.
- **Icons:** Use `@styled-icons/material`.

## Building and Running

### Commands
- **Development:** `npm run dev` (runs `next dev`)
- **Build:** `npm run build` (runs `next build`)
- **Start:** `npm run start` (runs `next start`)
- **Lint:** `npm run lint` (runs `next lint`)
- **Test:** `npm run test` (runs `vitest`)

### Environment Variables
- `NEXT_PUBLIC_GEMINI_API_KEY`: Required for recipe generation via Google AI Studio.

## Development Standards

- **TypeScript:** Strict typing is encouraged. Define interfaces/types for props and state.
- **Components:** Functional components with React hooks.
- **State:** Keep UI state local where possible; use Redux for globally shared state like `selectedIngredients`.
- **Formatting:** Use Prettier and ESLint (configs provided in root).
- **Testing:** Add unit tests in `index.test.ts` or near the relevant component using Vitest.
- **Language:** The codebase uses English for code and variables, but the GPT prompt and some UI strings are in Portuguese (culinária brasileira).
