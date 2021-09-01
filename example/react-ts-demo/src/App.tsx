import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [content, setContent] = useState("");

  const Dynamic = React.lazy(() => import("./Dynamic"));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <React.Suspense fallback={<div>loading...</div>}>
          <Dynamic />
        </React.Suspense>
        <p>Hello Vite + React!</p>

        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
