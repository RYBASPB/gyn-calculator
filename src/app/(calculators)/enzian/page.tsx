"use client"

import React, { FormEvent } from "react";
import Card, { ENZIANCard } from "@/app/(calculators)/enzian/components/Card";
import { aCard, bCard, cCard, ovarianCard, peritoneumCard, tubeCard } from "@/app/(calculators)/enzian/data/cards";

function Enzian() {

  function nextPageButtonHandler(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div>
      <Card {...peritoneumCard}/>
      <Card {...ovarianCard}/>
      <Card {...tubeCard}/>
      <h3>Глубокий инфильтративный эндометриоз</h3>
      <Card {...aCard}/>
      <Card {...bCard}/>
      <Card {...cCard}/>
      <button className="rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700" onClick={nextPageButtonHandler}>
        Следующий шаг
      </button>
    </div>
  );
}

export default Enzian;
