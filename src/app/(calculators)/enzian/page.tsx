"use client"

import React, { FormEvent } from "react";
import Card, { ENZIANCard } from "@/app/(calculators)/enzian/components/Card";

function Enzian() {

  const peritoneumCard: ENZIANCard = {
    description: "Брюшина - Peritoneum",
    image: "",
    inputs: [
      { description: "меньше 3 см", name: "stage" },
      { description: "3 - 7 см", name: "stage" },
      { description: "больше 7 см", name: "stage" },
    ],
    legend: "Суммарный размер",
    letter: "P"
  }

  function nextPageButtonHandler(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div>
      <Card {...peritoneumCard}/>
      <button className="rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700" onClick={nextPageButtonHandler}>
        Следующий шаг
      </button>
    </div>
  );
}

export default Enzian;
