import { useState, useEffect } from "react";

/** useEffect 的返回值
 * 1.return语句的作用是清理effect中的副作用，防止出现内存泄漏等问题
 */

function App() {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log(size);
    // 清理事件
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
    </>
  );
}

export default App;
