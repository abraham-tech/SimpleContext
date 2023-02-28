import { createContext, useState } from "react";
import ContextComponent from "./ContextComponent";
import { ThemeProvider } from "./ThemeContext";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ContextComponent />
      </ThemeProvider>
    </div>
  );
}
