"use client";

import React, { ComponentProps, FormEvent, Fragment, PropsWithChildren } from "react";
import Image, { ImageProps } from "next/image";
import { EnzianScore } from "@/app/(calculators)/enzian/store/EnzianStore";

function RadioInput({
  children,
  name,
  value,
  ...props
}: PropsWithChildren<ComponentProps<"input">>) {
  return (
    <label>
      <input type="radio" name={name} value={value} {...props} />
      {children}
    </label>
  );
}

export type RadioInput = {
  [legend: string]:
    {
      name: keyof EnzianScore;
      value: EnzianScore[keyof EnzianScore];
      description: string;
    }[]
};

export type ENZIANCard = {
  letter: string;
  description: string;
  image: ImageProps["src"];
  inputs: RadioInput;
};

function Card({ description, image, inputs, letter }: ENZIANCard) {
  return (
    <div>
      <div>
        <div>{letter}</div>
        <div>{description}</div>
      </div>

      <div>
        <div>
          <Image src={image} alt="Peritoneum" />
        </div>
      </div>

      <div>
            {Object.entries(inputs).map(([legend, radioInputs], index) => {
              const legendKey = legend.replaceAll(" ", "") + index.toString();
              return (
                <fieldset key={legendKey}>
                  <legend>{legend}</legend>
                  {radioInputs.map(({ name, description, value }) => {
                    const key = name + value.toString();
                    return (
                      <Fragment key={key}>
                        <RadioInput name={name} value={value}>
                          {description}
                        </RadioInput>
                      </Fragment>
                    );
                  })}
                </fieldset>
              );
            })}
      </div>
    </div>
  );
}

export default Card;
