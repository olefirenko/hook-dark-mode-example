import React from "react";
import "./App.css";
import { useDarkMode } from "hook-dark-mode";

function App() {
  const [prefersDarkMode, setDarkMode] = useDarkMode();

  return (
    <div className={"App " + (prefersDarkMode ? "dark" : "light")}>
      <header className="App-header">
        <p>Current color mode: {prefersDarkMode ? "Dark" : "Light"}</p>

        <button type="button" onClick={() => setDarkMode(!prefersDarkMode)}>
          Set {prefersDarkMode ? "light" : "dark"} mode
        </button>
      </header>
    </div>
  );
}

export default App;
