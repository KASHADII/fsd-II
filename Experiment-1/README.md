# 📘 Experiment Learnings – React + Vite SPA

## Key Learnings
- **Vite** provides a fast development environment with Hot Module Replacement (HMR).
- React enables building reusable UI components.
- The application follows a **Single Page Application (SPA)** architecture.

## React Router
- Used for client-side routing without page reloads.
- `<Routes>` and `<Route>` map URLs to components.
- `<Link>` enables smooth navigation.
- Parent routes use `/*` to support nested routes.

## State Management (Counter)
- `useState` hook manages component state.
- UI updates automatically when state changes.

```jsx
const [count, setCount] = useState(0);
setCount(count + 1);


## 💻 Commands Used

- `npm create vite@latest` – Create a React + Vite project  
- `npm install` – Install required dependencies  
- `npm run dev` – Start the development server  
- `npm run build` – Generate production build (`dist/`)  
- `npm run preview` – Preview the production build  
- `git init` – Initialize Git repository  
- `git add .` – Stage files for commit  
- `git commit -m "message"` – Commit changes  
- `git push` – Push code to GitHub  
