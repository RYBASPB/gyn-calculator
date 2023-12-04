import { ImageProps } from "next/image";

export type RadioInput = {
  [legend: string]:
    {
      name: string;
      description: string;
      value: number;
    }[]
};

export type ENZIANCard = {
  letter: string;
  description: string;
  image: ImageProps["src"];
  inputs: RadioInput;
};

const peritoneumCard: ENZIANCard = {
  description: "Брюшина - Peritoneum",
  image: "",
  inputs: {
    "Суммарный размер": [
      { description: "меньше 3 см", name: "p", value: 1 },
      { description: "3 - 7 см", name: "p", value: 2 },
      { description: "больше 7 см", name: "p", value: 3 },
    ]},
  letter: "P"
}

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
    ]
  },
  letter: "O"
}

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
    ]
  },
  letter: "T"
}

const aCard: ENZIANCard = {
  description: "Ректовагинальная перегородка, влагалище, ретроцервикальное пространство",
  image: "",
  inputs: {
    "Диаметр": [
      { description: "меньше 1 см", name: "a",value: 1 },
      { description: "1-3 см", name: "a", value: 2 },
      { description: "больше 3 см", name: "a", value: 3 },
    ]
  },
  letter: "A"
}

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
    ]

  },
  letter: "B"
}

const cCard: ENZIANCard = {
  description: "Прямая кишка",
  image: "",
  inputs: {
    "Диаметр": [
      { description: "меньше 1 см", name: "c", value: 1 },
      { description: "1-3 см", name: "c", value: 2 },
      { description: "больше 3 см", name: "c", value: 3 },
    ]
  },
  letter: "C"
}

export {peritoneumCard, ovarianCard, tubeCard, aCard, bCard, cCard};
