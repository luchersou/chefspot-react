# 🍽️ Chef Spot

A modern recipe discovery app built with **React 19**, **TypeScript**, **Vite**, and powered by **TheMealDB API** using **TanStack React Query**. The project includes authentication with **Firebase**, global state management with **Context API**, beautiful UI using **shadcn/ui + Tailwind CSS**, animations with **Framer Motion** and **GSAP**, and a clean, scalable architecture.

#### Live demo: chefspot-react.vercel.app/

## 🚀 Features

### 🔐 Authentication

* Firebase Authentication (email/password)
* AuthContext for global user state
* Protected routes using React Router DOM
* Proper Firebase error handling for better UX

### 🍽️ Recipes

* Fetch recipes by name and by ID from **TheMealDB API**
* Optimized and cached requests with **React Query**
* Favorite meals stored globally using FavoritesContext
* Pagination and filtering system

### 🎨 UI & Styling

* Built with **shadcn/ui** components
* Fully styled using **Tailwind CSS**
* Smooth animations powered by **Framer Motion**
* Responsive layout for all pages

## 📁 Project Structure

#### The project follows a clean and scalable folder organization:


```
src/
  ├── components/ – Reusable UI components (buttons, cards, layouts, headers, etc.)
  ├── context/ – Context API implementations (AuthContext, FavoritesContext).
  ├── data/ – Static data or auxiliary lists used across the app.
  ├── firebase/ – Firebase Authentication configuration and integration.
  ├── hooks/ – Custom hooks, including API fetching, pagination, and UI logic.
  ├── lib/ – External configurations.
  ├── pages/ – Main application pages (Home, Filter, Dashboard, Settings, Login...).
  ├── reducer/ – Reducers used for state management in contexts or specific logic.
  ├── routes/ – Route configuration using React Router DOM.
  ├── services/ – API services (TheMealDB) and external data handling.
  ├── types/ – TypeScript types.
  └── utils/ – Utility functions, including Firebase error handling.
```

## 📄 Pages

### 🏠 Home

Landing page with featured meals and UI animations.

### 🔎 Filter

Filter/search meals by name.

### 📊 Dashboard

User dashboard displaying favorites and personalized info.

### ⚙️ Settings

Page to update user preferences.

### 🔑 Login / Signup

Firebase-based authentication with form validation and error feedback.

## 🧩 Custom Hooks

### 1. `useMealsByName`

Fetches meals using a search query.

### 2. `useMealById`

Fetches a specific meal based on ID.

### 3. `usePagination`

Adds dynamic pagination to list pages.

### 4. `useIsLightBackground`

Changes text colors based on the background of the current page.

## 🛠️ Technologies

| Category         | Stack                          |
| ---------------- | ------------------------------ |
| Frontend         | React 19, TypeScript, Vite     |
| API Consumption  | TanStack React Query           |
| State Management | Context API (Auth + Favorites) |
| UI               | shadcn/ui, Tailwind CSS        |
| Animations       | Framer Motion, GSAP            |
| Routing          | React Router DOM               |
| Auth             | Firebase Authentication        |

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/luchersou/chefspot-react.git

# Enter project folder
cd chefspot-react

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🔌 Environment Variables

Create a `.env` file:

```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender
VITE_FIREBASE_APP_ID=your_app_id
```

## 📄 License

MIT License

