import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";

import "./app.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer noopener">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer noopener">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>FazTar React-CRA Boilerplate Template</h1>
      <div className="card">
        <p>
          <code>Thanks For Choosing To Use FazTar</code>
        </p>
      </div>
    </>
  );
}

export default App;
