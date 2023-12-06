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
import ShowEnzianScore from "@/app/(calculators)/enzian/components/ShowEnzianScore";

const emptyEnzian = {
  a: 0,
  bl: 0,
  br: 0,
  c: 0,
  ol: 0,
  or: 0,
  p: 0,
  tl: 0,
  tr: 0,
};

export type EnzianScore = typeof emptyEnzian;

function Enzian() {
  const [enzianScores, setEnzianScores] = useState<EnzianScore>(emptyEnzian);

  function onFormSubmit(formData: FormData) {
    let hookState = { ...enzianScores };
    for (let [key, value] of formData.entries()) {
      hookState = { ...hookState, [key]: value };
    }
    setEnzianScores(hookState);
  }

  return (
    <div className="flex w-full flex-col items-center justify-center p-4">
      <form
        action={onFormSubmit}
        className="flex flex-col items-center justify-center gap-2"
      >
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
        <ShowEnzianScore score={enzianScores} />
      </form>
    </div>
  );
}

export default Enzian;
