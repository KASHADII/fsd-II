import { createContext, useState } from "react";

export const CounterContext = createContext();

export function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);

  const obj1 = { count, setCount };

  return (
    <CounterContext.Provider value={obj1}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;
