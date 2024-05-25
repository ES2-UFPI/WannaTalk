'use client';

import SelectMenu from "../components/selectMenu";

import chatconversa from "./chatconversa";



// Adicionando logs para verificar os caminhos de importação
console.log("chatconversa: ", require.resolve("./chatconversa"));

export default function teste() {
  <h1> oiiii</h1>
    return (
      
      <chatconversa/>
    )
  }
  