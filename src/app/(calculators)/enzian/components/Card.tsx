"use client";

import React, { ComponentProps, FormEvent, Fragment, PropsWithChildren } from "react";
import Image, { ImageProps } from "next/image";

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
      name: string;
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
        <form>
            {Object.entries(inputs).map(([legend, radioInputs], index) => {
              const legendKey = legend.replaceAll(" ", "") + index.toString();
              return (
                <fieldset key={legendKey}>
                  <legend>{legend}</legend>
                  {radioInputs.map(({ name, description }, index) => {
                    const key = name + index.toString();
                    return (
                      <Fragment key={key}>
                        <RadioInput name={name} value={key}>
                          {description}
                        </RadioInput>
                      </Fragment>
                    );
                  })}
                </fieldset>
              );
            })}
        </form>
      </div>
    </div>
  );
}

export default Card;
