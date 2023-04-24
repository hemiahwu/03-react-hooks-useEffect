# 03-React-Hooks-useEffect

## 第一章 课程代码

Git仓库地址: https://github.com/hemiahwu/02-reacthooks-useState

百度网盘链接: https://pan.baidu.com/s/1t71gVvJwNWIZ8f-KH9LT_w?pwd=8r2r 提取码: 8r2r



课程答疑微信: 

<img src="https://i.postimg.cc/YCWHJWTw/Wechat-IMG233.jpg" alt="WechatIMG233"  />

## 1. 为什么要使用useEffect

* 在React中，组件的渲染是由状态（state）和属性（props）的变化触发的
* useEffect的目的是为了在组件渲染后执行副作用操作
* 所谓副作用，是指与组件渲染无关的操作，比如网络请求、修改DOM、订阅事件等



* useEffect接收两个参数，第一个参数是一个函数，表示需要执行的副作用操作；
* 第二个参数是一个数组，表示需要监视的状态或属性的变化。
* 如果第二个参数为空数组，则表示只在组件第一次渲染后执行副作用操作



* React中的useEffect是一个hook，它用于在组件渲染时执行副作用操作。所谓副作用，是指与组件渲染无关的操作，比如网络请求、修改DOM、订阅事件等。useEffect的作用类似于类组件中的生命周期方法，比如componentDidMount、componentDidUpdate和componentWillUnmount等。

* useEffect的目的是为了在组件渲染后执行副作用操作。在React中，组件的渲染是由状态（state）和属性（props）的变化触发的。当组件渲染完成后，如果需要执行副作用操作，可以使用useEffect来实现。useEffect接收两个参数，第一个参数是一个函数，表示需要执行的副作用操作；第二个参数是一个数组，表示需要监视的状态或属性的变化。如果第二个参数为空数组，则表示只在组件第一次渲染后执行副作用操作。

* 使用useEffect的好处是可以避免在组件渲染期间频繁地执行副作用操作，从而提高应用性能。同时，useEffect还可以帮助我们管理副作用操作的订阅和取消订阅等问题，确保组件的生命周期方法得到正确的处理。



## 1. 为什么要使用useEffect

* 在React中，组件的渲染是由状态（state）和属性（props）的变化触发的
* useEffect的目的是为了在组件渲染后执行副作用操作
* 所谓副作用，是指与组件渲染无关的操作，比如网络请求、修改DOM、订阅事件等

`````tsx
/**
 * 1.在React中，组件的渲染是由状态（state）和属性（props）的变化触发的
 * 2.useEffect的目的是为了在组件渲染后执行副作用操作
 * 3.所谓副作用，是指与组件渲染无关的操作，比如网络请求、修改DOM、订阅事件等
 */
useEffect(() => {
  console.log("useEffect的目的是为了在组件渲染后执行副作用操作");
});
`````



## 2. useEffect 使用细节

#### 1. 异步执行App.tsx

* useEffect是异步执行的

`````js
import React, { ,useEffect } from 'react'

/**
 * 1.useEffect是异步执行的
 */

function App() {
  // 异步执行
  useEffect(() => {
    console.log("useEffect 被调用");
  });

  console.log("组件渲染");

  return <div>useEffect的使用细节</div>;
}

export default App;

`````

#### 2. App.tsx

* 在React中，组件的渲染是由状态（state）和属性（props）的变化触发的

* useEffect中的函数会在每次组件渲染时都会被调用,因此必须要注意不要让函数执行过于频繁，以避免影响性能

`````js
// 1. 引入useState
import React, { useState, useEffect } from 'react'

/**
 * 1.useEffect是异步执行的
 * 2.useEffect中的函数会在每次组件渲染时都会被调用
 */

function App() {
  const [value, setValue] = useState<number>(0);

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
    </>
  );
}

export default App;
`````

#### 3. App.tsx

* 必须要注意不要让函数执行过于频繁，以避免影响性能

`````js
// 1. 引入useState
import React, { useState, useEffect } from 'react'

/**
 * 1.useEffect是异步执行的
 * 2.useEffect中的函数会在每次组件渲染时都会被调用
 * 3.必须要注意不要让函数执行过于频繁，以避免影响性能(需要第二个参数解决)
 */

function App() {
  const [value, setValue] = useState<number>(0);
  
  // 无关的状态
  const [count, setCount] = useState<number>(0);


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
`````



## 3. useEffect的第二个参数

* useEffect接收两个参数，第一个参数是一个函数
* 第二个参数是一个数组，表示需要监视的状态或属性的变化
* 如果第二个参数是空数组, 那么useEffect仅在初始化执行

`````js
/** useEffect的第二个参数
 * 1.第二个参数是空数组, 那么useEffect仅在初始化执行
 */

useEffect(() => {
  console.log("如果第二个参数是空数组, 那么useEffect仅在初始化执行");
  document.title = `您有(${value})条新的消息`;
}, []);
`````

* 如果第二个参数有依赖的属性,那么属性发生变化就会执行

`````js
/** useEffect的第二个参数
 * 1.参数是空数组, 那么useEffect仅在初始化执行
 * 2.第二个参数（依赖项数组）来控制useEffect的触发时机
 */

useEffect(() => {
  console.log("数组中依赖的状态发生变化,就执行");
  document.title = `您有(${value})条新的消息`;
}, [value]); // 仅在 value 更改时更新
`````

* 多个useEffect 依次执行

`````tsx
/** useEffect的第二个参数
 * 1.参数是空数组, 那么useEffect仅在初始化执行
 * 2.第二个参数（依赖项数组）来控制useEffect的触发时机
 * 3.多个useEffect 依次执行
 */

useEffect(() => {
  console.log('空数组,仅在初始化执行一次')
}, [])

useEffect(() => {
  console.log("如果第二个参数是空数组, 那么useEffect仅在初始化执行");
  document.title = `您有(${value})条新的消息`;
}, [value]); // 仅在 value 更改时更新
`````



## 4.useEffect 的返回值

### 1. 清理功能 App.tsx

* return语句的作用是清理effect中的副作用，防止出现内存泄漏等问题

`````js
import { useState, useEffect } from "react";

/** useEffect 的返回值
 * 1.return语句的作用是清理effect中的副作用，防止出现内存泄漏等问题
 */

function App() {
  const [size, setSize] = useState(window.innerWidth);

  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
    </>
  );
}

export default App;
`````

#### 2. 调整屏幕大小,可实时获取屏幕尺寸

`````js
import React, { useState, useEffect } from 'react'

export default function UseEffectCleanup() {
  // 定义属性
  const [size, setSize] = useState(window.innerWidth)

  // 更新属性
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  // 动态获取屏幕尺寸
  useEffect(() => {
    window.addEventListener('resize', checkSize)
		console.log(size);
    // 清理事件
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  })

  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
    </>
  )
}
`````



## 4 useEffect fetch-Data

#### 1. App.tsx

`````js
import { useState, useEffect } from "react";

/** 
 * useEffect 网络请求
 */

const url = "http://jsonplaceholder.typicode.com/photos";

function App() {
  
}

export default App;
`````

* 定义状态

`````tsx
const [data, setData] = useState([]);
`````

* 更新结构

`````tsx
return (
  <>
    {data.map((item, i) => {
      return <pre key={i}>{JSON.stringify(item)}</pre>;
    })}
  </>
);
`````

* 不能给useEffect添加async

``````tsx
useEffect(async () => {
  
}, []);

/**
 * useEffect 网络请求
 * 
 * 特别注意:
 * useEffect的回调函数使用async是无效的.
 * 因为useEffect的返回值只能是undefine或清除函数
 * 然后async函数总是返回一个promise
 */
``````

* 实现请求

`````tsx
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(url);
    const result = await response.json();

    setData(result);
  };

  fetchData();
}, []);
`````



## 5. useEffect 自定义hook

### 1. 创建hooks文件夹

* hooks/useFetch.ts



### 2. App.tsx 

`````ts
/** 
 * useEffect 自定义hooks
 */
`````



`````tsx
import { useState, useEffect } from "react";

export default (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [url]);

  return data;
};
`````



### 2. App.tsx

`````tsx
import { useState, useEffect } from "react";

import useFetch from "./hooks/useFetch";

function App() {
  const [resourceType, setResourceType] = useState<string>("posts");

  const url = `http://jsonplaceholder.typicode.com/${resourceType}`;
  const data = useFetch(url);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>users</button>
        <button onClick={() => setResourceType("comments")}>comments</button>
      </div>
      {data.map((item, i) => {
        return <pre key={i}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default App;
`````



