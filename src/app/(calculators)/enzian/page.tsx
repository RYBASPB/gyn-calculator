"use client"

import React, { FormEvent } from "react";
import Card, { ENZIANCard } from "@/app/(calculators)/enzian/components/Card";

function Enzian() {

  const peritoneumCard: ENZIANCard = {
    description: "Брюшина - Peritoneum",
    image: "",
    inputs: {
      "Суммарный размер": [
      { description: "меньше 3 см", name: "Pstage" },
      { description: "3 - 7 см", name: "Pstage" },
      { description: "больше 7 см", name: "Pstage" },
    ]},
    letter: "P"
  }

  const ovarianCard: ENZIANCard = {
    description: "Кисты яичников",
    image: "",
    inputs: {
      "Суммарный размер слева": [
        { description: "меньше 3 см", name: "OstageL" },
        { description: "3 - 7 см", name: "OstageL" },
        { description: "больше 7 см", name: "OstageL" },
      ],
      "Суммарный размер справа": [
        { description: "меньше 3 см", name: "OstageR" },
        { description: "3 - 7 см", name: "OstageR" },
        { description: "больше 7 см", name: "OstageR" },
      ]
    },
    letter: "O"
  }

  const tubeCard: ENZIANCard = {
    description: "Спаечный процесс придатков матки",
    image: "",
    inputs: {
      "Левые придатки": [
        { description: "стенкой таза", name: "TstageL" },
        { description: "стенкой таза и маткой", name: "TstageL" },
        { description: "стенкой таза, маткой, кишкой", name: "TstageL" },
      ],
      "Правые придатки": [
        { description: "стенкой таза", name: "TstageR" },
        { description: "стенкой таза и маткой", name: "TstageR" },
        { description: "стенкой таза, маткой, кишкой", name: "TstageR" },
      ]
    },
    letter: "Е"
  }

  const aCard: ENZIANCard = {
    description: "Ректовагинальная перегородка, влагалище, ретроцервикальное пространство",
    image: "",
    inputs: {
      "Диаметр": [
        { description: "меньше 1 см", name: "Astage" },
        { description: "1-3 см", name: "Astage" },
        { description: "больше 3 см", name: "Astage" },
      ]
    },
    letter: "A"
  }

  const bCard: ENZIANCard = {
    description: "Крестцово-маточные, кардинальные связки, стенки таза",
    image: "",
    inputs: {
      "Диаметр слева": [
        { description: "меньше 1 см", name: "BstageL" },
        { description: "1-3 см", name: "BstageL" },
        { description: "больше 3 см", name: "BstageL" },
      ],
      "Диаметр справа": [
        { description: "меньше 1 см", name: "BstageR" },
        { description: "1-3 см", name: "BstageR" },
        { description: "больше 3 см", name: "BstageR" },
      ]

    },
    letter: "B"
  }

  const cCard: ENZIANCard = {
    description: "Прямая кишка",
    image: "",
    inputs: {
      "Диаметр": [
        { description: "меньше 1 см", name: "CstageL" },
        { description: "1-3 см", name: "CstageL" },
        { description: "больше 3 см", name: "CstageL" },
      ]
    },
    letter: "C"
  }

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
