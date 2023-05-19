# React useContext

Context is useful for universal data across app

- Avoid prop drilling where props are passed from parent to child to grandchild, etc.
- Create with React.createContext();
- Import Context into parent
- Must wrap child component in Context Provider
- Import Context and call useContext in grandchild (or whichever component context is being used)

```
countContext.js
import React from "react";
const CountContext = React.createContext();
export default CountContext;

CounterReadOnly.js
import CountContext from "./CountContext"
return (
  <CountContext.Provider value={num}>
    <button onClick={up}>+1 (from parent)</button>
    <Child />
</CountContext.Provider>
)

GreatGrandReadOnly.js
import CountContext from "./CountContext"
const num = useContext(CountContext);
```
