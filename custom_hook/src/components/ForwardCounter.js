import { useState, useEffect } from 'react';

import Card from './Card';

import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter(true);

  // 아래 로직을 커스텀훅안에 넣고 커스텀훅을 호출한다.
  // const [counter, setCounter] = useState(0);
  //
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);
  //
  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
