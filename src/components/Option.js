import React, { useState, useEffect } from "react";
import styled, {
    css,
    keyframes,
    ThemeProvider,
    createGlobalStyle,
  } from "styled-components";

export default function Option(props) {
    let mainColor = "#D92CFF",
    mainAlphaColor80 = "#8600A3";
    const setTransitionTime = (time) => `all ${time} ease-in-out`;

    const fadeIn = keyframes`
      0% {
        opacity: 0;
      }
      
      100% {
        opacity: 1;
       }
    `;
    const MyH3 = styled.h3`
    display:flex;
    align-content:center;
    justify-content:center;
    color: ${({ color }) => color || "#000"};
    background-color: ${mainColor};
    transition: ${setTransitionTime("0.2s")};
    animation: ${fadeIn} 2s ease-out;
    border-radius:25px;
    width: 120px;
    height: 50px;
    /* ${({ isButton }) =>
      isButton &&
      css`

        max-width: 50%;
        border-radius: 0.25rem;
        cursor: pointer;
      `} */
      &:hover {
        color: #fff;
      }
  `;

  return (
    <>
      <button onClick={props.evento(props.level)}>{props.desc}asd</button>
    </>
  );
}