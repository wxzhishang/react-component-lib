import React, { Reducer, useState, useReducer, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

interface AAAprops {
  name: string,
  content: React.ReactNode
}

const AAA = (props: AAAprops) => {
  return <div>{props.name}{props.content}</div>
}

function App() {

  const [count, setCount] = useState(0);

  console.log(typeof AAA);


  return <div>
    <AAA name='guang' content={'xxx'}></AAA>
  </div>
}

export default App;
