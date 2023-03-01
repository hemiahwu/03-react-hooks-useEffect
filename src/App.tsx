import { useState, useEffect } from "react";
/**
 * 1.useEffect是异步执行的
 * 2.useEffect中的函数会在每次组件渲染时都会被调用
 * 3.必须要注意不要让函数执行过于频繁，以避免影响性能(需要第二个参数解决)
 */
function App() {
  const [value, setValue] = useState<number>(0);

  // 无关的状态
  const [count, setCount] = useState<number>(0);

  // 异步执行
  useEffect(() => {
    console.log("useEffect 被调用");
    document.title = `您有(${value})条新的消息`;
  });

  console.log("组件渲染");

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        点我
      </button>

      {/* 无关的操作  */}
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        增加数量
      </button>
    </>
  );
}

export default App;
