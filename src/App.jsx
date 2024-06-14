import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilState } from 'recoil'
import { counter } from './Atoms/atom'

function App() {
  const [count, setCount] = useRecoilState(counter)
  // const increase=()=>
  //   {
  //     setCount(count=count+1);
  //   }
  //   const desress=()=>
  //     {
  //       setCount(count=count-1);
  //     }

  return (
    <>
   <button onClick={() => setCount(count + 1)}>+</button>
   <div>{count}</div>
   <button onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}

export default App
