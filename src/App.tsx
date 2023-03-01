import { useState, useEffect } from "react";

/**
 * useEffect 网络请求
 *
 * 特别注意:
 * useEffect的回调函数使用async是无效的.
 * 因为useEffect的返回值只能是undefine或清除函数
 * 然后async函数总是返回一个promise
 */

const url = "http://jsonplaceholder.typicode.com/users";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();

      setData(result);
    };

    fetchData();
  }, []);

  return (
    <>
      {data.map((item, i) => {
        return <pre key={i}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default App;
