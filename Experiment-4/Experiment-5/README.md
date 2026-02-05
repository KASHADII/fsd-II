# Lazy Loading SPA Experiment

This experiment demonstrates frontend performance optimization using lazy loading in a Single Page Application (SPA).

## What is Lazy Loading?

Lazy loading is a design pattern that defers loading of non-critical resources at page load time, instead loading them only when they are needed.

## Implementation Details

This React SPA uses:
- **React.lazy()**: Dynamically imports components only when they are rendered
- **Suspense**: Provides a loading fallback while components are being fetched
- **Page-wise loading**: Each page component is loaded on-demand

## How to Test

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Open browser developer tools and go to the Network tab

3. Navigate between pages using the navigation buttons

4. Observe how each page component is only loaded when you click its respective navigation button

## Key Benefits

- **Faster initial page load**: Only the home page component is loaded initially
- **Reduced bundle size**: Components are split into separate chunks
- **Better user experience**: Users only download the content they actually use
- **Improved performance**: Less JavaScript to parse and execute on initial load

## File Structure

```
src/
├── App.jsx              # Main app with lazy loading implementation
├── components/
│   ├── HomePage.jsx     # Home page component
│   ├── AboutPage.jsx    # About page component
│   └── ContactPage.jsx  # Contact page component
```

## Technical Implementation

The lazy loading is implemented using:

```jsx
// Lazy load components
const HomePage = React.lazy(() => import('./components/HomePage'))

// Wrap with Suspense for loading fallback
<Suspense fallback={<LoadingSpinner />}>
  <HomePage />
</Suspense>
```
