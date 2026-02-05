# Experiment 4: State Management in React

This project demonstrates different state management approaches in React applications as part of Experiment 4 for the Full Stack Development course.

## Objective

To understand and implement various state management techniques in React, comparing local state management with global state management solutions.

## What Was Implemented

### 1. Local State Management
- **Component**: `LocalStateCounter.jsx`
- **Technology**: React `useState` hook
- **Features**: 
  - Independent counter components with local state
  - Each component maintains its own count
  - Demonstrates component-level state isolation

### 2. Global State with Context API
- **Components**: `CounterGlobalContextParent.jsx`, `CounterGlobalContextAPI.jsx`
- **Technology**: React Context API
- **Features**:
  - Shared state across multiple components
  - Global counter that synchronizes across all Context-based components
  - Provider pattern for state distribution

### 3. Global State with Redux
- **Components**: `CounterGlobalReduxParent.jsx`, `CounterReducer.jsx`, `Store.jsx`
- **Technology**: Redux with React-Redux
- **Features**:
  - Centralized state management using Redux store
  - Action-based state mutations (INCREMENT/DECREMENT)
  - Global counter state shared across Redux-connected components

## Technical Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **UI Library**: Material-UI 7.3.7
- **State Management**: 
  - React Hooks (useState)
  - React Context API
  - Redux 5.0.1 with React-Redux 9.2.0
- **Styling**: Emotion (integrated with Material-UI)

## Project Structure

```
src/
├── components/
│   ├── LocalStateCounter.jsx          # Local state demo
│   ├── CounterGlobalContextParent.jsx # Context API demo
│   ├── CounterGlobalReduxParent.jsx   # Redux demo
│   └── context/
│       └── CounterGlobalContextAPI.jsx # Context provider
├── store/
│   ├── CounterReducer.jsx             # Redux reducer
│   └── Store.jsx                      # Redux store
├── App.jsx                            # Main application
└── main.jsx                           # Application entry point
```

## Key Learnings

1. **Local State**: Best for component-specific data that doesn't need to be shared
2. **Context API**: Good for medium-sized applications with moderate state sharing needs
3. **Redux**: Ideal for large applications with complex state management requirements

## Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Experiment Results

The application successfully demonstrates three different state management approaches, showing how data flows and updates differently in each paradigm. Each counter type (local, context, redux) operates independently while showcasing the unique characteristics of its state management solution.
