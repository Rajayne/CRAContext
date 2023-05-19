import React from "react";
import CounterReadOnly from "./CounterReadOnly";
import ThemeProvider from "./ThemeProvider";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
        <CounterReadOnly />
      </ThemeProvider>
    </div>
  );
}

export default App;
