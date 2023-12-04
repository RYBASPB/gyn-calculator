"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Card from "@/app/(calculators)/enzian/components/Card";
import {
  aCard,
  bCard,
  cCard,
  ovarianCard,
  peritoneumCard,
  tubeCard,
} from "@/app/(calculators)/enzian/data/cards";

const emptyEnzian = {
  a: 0,
  bl: 0,
  br: 0,
  c: 0,
  ol: 0,
  or: 0,
  p: 0,
  tl: 0,
  tr: 0
};

type EnzianScore = typeof emptyEnzian;

function Enzian() {

  const [enzianScores, setEnzianScores] = useState<EnzianScore>(emptyEnzian);

  function onFormSubmit(formData: FormData) {
    let hookState = {...enzianScores};
    for (let [key, value] of formData.entries()) {
      hookState = {...hookState, [key]: value};
    }
    setEnzianScores(hookState)
  }

  function showEnzianScore() {
    const { a, bl, br, c, ol, or, p, tl, tr } = enzianScores;
    console.log("reload")
    return (
      <>{`P ${p}, O ${ol}/${or}, T ${tl}/${tr}, A ${a}, B ${bl}/${br}, C ${c}`}</>
    );
  }

  return (
    <div>
      {showEnzianScore()}
      <form action={onFormSubmit}>
      <Card {...peritoneumCard} />
      <Card {...ovarianCard} />
      <Card {...tubeCard} />
      <h3>Глубокий инфильтративный эндометриоз</h3>
      <Card {...aCard} />
      <Card {...bCard} />
      <Card {...cCard} />
      <button
        type="submit"
        className="rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
      >
        Следующий шаг
      </button>
    </form></div>
  );
}

export default Enzian;
