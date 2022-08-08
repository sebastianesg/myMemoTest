import React, { useState, useEffect } from "react";
import styled, {
    css,
    keyframes,
    ThemeProvider,
    createGlobalStyle,
  } from "styled-components";
import "./Card.scss";
export default function Caras(props) {
  const [visible, setVisible] = useState(0);
  const [myStyle, setmyStyle] = useState({transform: 'rotateY(180deg)'});
  let image="http://wiki.vykar.com/skins/common/images/2000px-Playing_card_spade_A_svg.png";
  const [imageCard, setImageCard] = useState("");

  const handleClick = (e) => {
    if (visible===0){
      setVisible(1);
      setImageCard(image);
      setmyStyle({transform: 'rotateY(0deg)'});}
    else{
      setVisible(0)
      setmyStyle({transform: 'rotateY(180deg)'});
      setImageCard("");
    }
  };
  return (
    <>
    <div className="carta" style={myStyle} onClick={handleClick}>   
      <div className="cara">
        <img src="" width="100" height="100px" />
      </div>
      <div className="cara detras">
        <img src="'http://chetart.com/blog/wp-content/uploads/2012/05/playing-card-back.jpg'" width="100" height="100px" />
      </div>   
  </div>
  </>
  );
}
