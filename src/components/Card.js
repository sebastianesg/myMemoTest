import React, { useState, useEffect } from "react";
import styled, {
    css,
    keyframes,
    ThemeProvider,
    createGlobalStyle,
  } from "styled-components";
import "./Card.scss";
import Caras from "./Caras";
export default function Card(props) {
  const [visible, setVisible] = useState(0);
  const [visible2, setVisible2] = useState(0);
  const [myStyle, setmyStyle] = useState({transform: 'rotateY(180deg)'});
  const [imageCard, setImageCard] = useState("");

  const mostrar = function(){
    setVisible(1);
    setVisible2(1);
    setImageCard(props.img);
    setmyStyle({transform: 'rotateY(0deg)'});
  };
  function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  async function ocultar(){  
    setVisible(0);
    setmyStyle({transform: 'rotateY(180deg)'});
    var x = await resolveAfter2Seconds(10);
    setVisible2(1);
    
    
    
  };
  const handleClick = (e) => {
    if (props.clickeable===1){
      if (visible===0){
        props.met(props.ID,props.imgid,this);
        mostrar();
      }else{
        if (props.state===1){
        ocultar();
      }}
  }};
  if (props.state===1 && visible===1 && props.encontrada===0 ){
    ocultar();
  }


  return (
    <>
  <div className="carta-box" >
  <div className="carta" style={myStyle} onClick={handleClick} >   
      <div className="cara">
      {visible2 === 1 ? (
        <img src={imageCard} width="100" height="100px" />
      ) : ("")}
        
      </div>
      <div className="cara detras">
        <img src="https://1.bp.blogspot.com/-l5IkNPw4bm4/Xvc0Gqs5meI/AAAAAAAAZ2I/gkJrJ2BStoQrbFV3Mcyf1lP9EV0kX8KFwCLcBGAsYHQ/s1600/Pokemon%2B%25287%2529.png" width="100" height="100px" />
      </div>   
  </div>
  </div>
  </>
  );
}

