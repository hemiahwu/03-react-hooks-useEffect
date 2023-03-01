import { useState, useEffect } from "react";

/** useEffect的第二个参数
 * 1.参数是空数组, 那么useEffect仅在初始化执行
 * 2.第二个参数（依赖项数组）来控制useEffect的触发时机
 * 3.多个useEffect 依次执行
 */

function App() {
  const [value, setValue] = useState<number>(0);

  // 无关的状态
  const [count, setCount] = useState<number>(0);

  // 异步执行
  useEffect(() => {
    console.log("useEffect 被调用");
    document.title = `您有(${value})条新的消息`;
  }, [value]); // 仅在 value 更改时更新

  useEffect(() => {
    console.log("空数组,仅在初始化执行一次");
  }, []);

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
