/**
 * useEffect 自定义hooks
 */
import useFetch from "./hooks/useFetch";

function App() {
  const url = "http://jsonplaceholder.typicode.com/posts";
  const data = useFetch(url);

  return (
    <>
      {data.map((item, i) => {
        return <pre key={i}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default App;
