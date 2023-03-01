import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
/**
 * 1.在React中，组件的渲染是由状态（state）和属性（props）的变化触发的
 * 2.useEffect的目的是为了在组件渲染后执行副作用操作
 * 3.所谓副作用，是指与组件渲染无关的操作，比如网络请求、修改DOM、订阅事件等
 */

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect的目的是为了在组件渲染后执行副作用操作");
  });

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
