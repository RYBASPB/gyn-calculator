"use client";

import React, { ChangeEvent, FormEvent } from "react";
import Card, { ENZIANCard } from "@/app/(calculators)/enzian/components/Card";
import { observer } from "mobx-react-lite";
import enzianStore from "@/app/(calculators)/enzian/store/EnzianStore";
import EnzianStore from "@/app/(calculators)/enzian/store/EnzianStore";

const EnzianWithStore = observer(({ store }: { store: typeof EnzianStore }) => {
  const peritoneumCard: ENZIANCard = {
    description: "Брюшина - Peritoneum",
    image: "",
    inputs: {
      "Суммарный размер": [
        { description: "меньше 3 см", name: "p", value: 1 },
        { description: "3 - 7 см", name: "p", value: 2 },
        { description: "больше 7 см", name: "p", value: 3 },
      ],
    },
    letter: "P",
  };

  const ovarianCard: ENZIANCard = {
    description: "Кисты яичников",
    image: "",
    inputs: {
      "Суммарный размер слева": [
        { description: "меньше 3 см", name: "ol", value: 1 },
        { description: "3 - 7 см", name: "ol", value: 2 },
        { description: "больше 7 см", name: "ol", value: 3 },
      ],
      "Суммарный размер справа": [
        { description: "меньше 3 см", name: "or", value: 1 },
        { description: "3 - 7 см", name: "or", value: 2 },
        { description: "больше 7 см", name: "or", value: 3 },
      ],
    },
    letter: "O",
  };

  const tubeCard: ENZIANCard = {
    description: "Спаечный процесс придатков матки",
    image: "",
    inputs: {
      "Левые придатки": [
        { description: "стенкой таза", name: "tl", value: 1 },
        { description: "стенкой таза и маткой", name: "tl", value: 2 },
        { description: "стенкой таза, маткой, кишкой", name: "tl", value: 3 },
      ],
      "Правые придатки": [
        { description: "стенкой таза", name: "tr", value: 1 },
        { description: "стенкой таза и маткой", name: "tr", value: 2 },
        { description: "стенкой таза, маткой, кишкой", name: "tr", value: 3 },
      ],
    },
    letter: "Е",
  };

  const aCard: ENZIANCard = {
    description:
      "Ректовагинальная перегородка, влагалище, ретроцервикальное пространство",
    image: "",
    inputs: {
      Диаметр: [
        { description: "меньше 1 см", name: "a", value: 1 },
        { description: "1-3 см", name: "a", value: 2 },
        { description: "больше 3 см", name: "a", value: 3 },
      ],
    },
    letter: "A",
  };

  const bCard: ENZIANCard = {
    description: "Крестцово-маточные, кардинальные связки, стенки таза",
    image: "",
    inputs: {
      "Диаметр слева": [
        { description: "меньше 1 см", name: "bl", value: 1 },
        { description: "1-3 см", name: "bl", value: 2 },
        { description: "больше 3 см", name: "bl", value: 3 },
      ],
      "Диаметр справа": [
        { description: "меньше 1 см", name: "br", value: 1 },
        { description: "1-3 см", name: "br", value: 2 },
        { description: "больше 3 см", name: "br", value: 3 },
      ],
    },
    letter: "B",
  };

  const cCard: ENZIANCard = {
    description: "Прямая кишка",
    image: "",
    inputs: {
      Диаметр: [
        { description: "меньше 1 см", name: "c", value: 1 },
        { description: "1-3 см", name: "c", value: 2 },
        { description: "больше 3 см", name: "c", value: 3 },
      ],
    },
    letter: "C",
  };

  const changeHandler = (e: ChangeEvent<HTMLFormElement>) => {
    const {name, value} = e.target;
    store.changeScore({[name]: value})
  };

  return (
    <div>
      <form onChange={changeHandler}>
        <Card {...peritoneumCard} />
        <Card {...ovarianCard} />
        <Card {...tubeCard} />
        <h3>Глубокий инфильтративный эндометриоз</h3>
        <Card {...aCard} />
        <Card {...bCard} />
        <Card {...cCard} />
        <button className="rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
          Следующий шаг
        </button>
      </form>
      {store.coding}
    </div>
  );
});

export default function Enzian() {
  return <EnzianWithStore store={enzianStore} />;
}
