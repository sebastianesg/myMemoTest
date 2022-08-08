import React, { useState, useEffect } from "react";
import './Board.css';
import Card from "./Card";
import CreateGame from "./CreateGame";
export default function Board(props) {
  const [ocultar, setOcultar] = useState(0);
  const [inicializado, setInicializado] = useState(0);
  const [clickedCards, setClickedCards] = useState(999);
  const [ganado, setGanado] = useState(0);
  const [cards, setCards] = useState([]);
  const [clickeable, setClickeable] = useState(1);
  const [diff, setDiff] = useState(null);
  const [initial, setInitial] = useState(null);
  const [contador, setContador] = useState(0);


  let imagenes=[];
  let aCard = {nro:0,img:"https://images.pexels.com/photos/12156677/pexels-photo-12156677.jpeg",imgid:0};
  let auxCards=[];
  let img="";
  let sameCard=0;
  let idPair=0;
  
  const tick= () => {
    setDiff(new Date(+new Date()-initial))
  };
  const start = () => {setInitial(+new Date())}; 

  const getPokemons = async (url) => {
    let res = await fetch(url),
      json = await res.json();
    //console.log(json);

    json.results.forEach(async (el) => {
      let res = await fetch(el.url),
        json = await res.json();

      //console.log(json);
      let pokemon = {
        id: json.id,
        name: json.name,
        avatar: json.sprites.front_default,
      };

      imagenes.push(pokemon);
    });
  };
  function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  async function genera() {
    getPokemons("https://pokeapi.co/api/v2/pokemon/");
    var y = await resolveAfter2Seconds(10);
    for (let i = 0; i < props.cant; i++) {

      let aCard = {nro:i,img:imagenes[idPair].avatar,imgid:idPair,encontrada:0,orden:Math.random()};
      sameCard+=1;
      if (sameCard===2) {
          sameCard=0;
          idPair+=1;
      }
      auxCards.push(aCard)
      
    }
    setCards(auxCards.sort(function(a,b){return a.orden-b.orden}));
    auxCards=[];
    start();
  };
  function gano(cards){
    if (cards.find(card => card.encontrada===0)===undefined){
      return true;
    }return false;
  }
  const clickear = (cardId,ImgID) => {
    if (clickedCards===999) {
      setClickedCards(ImgID);
      setOcultar(0);
    } else {
      setContador(contador+1);
      if (clickedCards===ImgID) {
        auxCards = cards.map(function(card){if (card.imgid === ImgID){card.encontrada=1}return card})
        setCards(auxCards);
        setClickedCards(999);
        if (gano(cards)){setGanado(1)}
        
      } else {
        setClickedCards(999);
        hideCards();
        
      } 
    }
  };
  async function hideCards() {
    setClickeable(0);
    var x = await resolveAfter2Seconds(10);
    setOcultar(1); // 10
    setClickeable(1);
  }
  if (inicializado===0){
    genera();
    setInicializado(1);
  };

  useEffect(() => {
    if (initial) {
      requestAnimationFrame(tick);
    }
  },[initial]);

  useEffect(() => {
    if (diff && ganado===0) {
      requestAnimationFrame(tick);
    }
  },[diff]);

  const timeformat = (date) => {
    if (!date) return "00:00:00";

    let mm = date.getUTCMinutes();
    let ss = date.getSeconds();
    mm = mm < 10 ? "0"+ mm: mm;
    ss = ss < 10 ? "0"+ ss: ss;
    return `${mm}:${ss}`;

  }
  return (
    <>
        
        <h2>Movimientos={contador}</h2>
        <h2>{timeformat(diff)}</h2>
        <h2>{ganado}</h2>
        {cards.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        <div className="grid">
          {cards.map(item =>
            <Card key={item.nro} ID={item.nro} img={item.img} imgid={item.imgid} met={clickear} state={ocultar} encontrada={item.encontrada} clickeable={clickeable}/>
          )}
        </div>)}
    </>
  );
}