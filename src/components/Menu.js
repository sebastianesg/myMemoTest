import React, { useState, useEffect } from "react";
import Option from "./Option";

export default function Menu(props) {
  
  const {handler} = props;
  return (
    <>
    <ul>
        <i><Option desc="Easy" level="1" evento={props.handler}/></i>

    </ul>
    </>
  );
}