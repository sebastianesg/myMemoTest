import React, { useState} from "react";
import Menu from "./Menu";
import Board from "./Board";

export default function Memotest(props) {
  const [menu, setMenu] = useState(1);
  const [level, setLevel] = useState(0);
  
  const handlerLevel = (a) => {
    setMenu(1);
    setLevel(a);
    console.log("CLK");
  };
  return (
    <>
    {menu===1 ? <Menu handler={handlerLevel}/> : <Board />}
    </>
  );
}