"use client"

import React, {
  ComponentProps,
  FormEvent,
  PropsWithChildren
} from "react";
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
  name: string,
  description: string
}

export type ENZIANCard = {
  letter: string,
  description: string,
  image: ImageProps["src"],
  legend: string,
  inputs: RadioInput[]
}

function Card({ description, image, inputs, legend, letter }: ENZIANCard) {


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
          <fieldset>
            <legend>{legend}</legend>
            {inputs && inputs.map(({name, description}, index) => {
              const key = name + index.toString();
              return (
                <RadioInput name={name} value={key} key={key}>
                  {description}
                </RadioInput>
              )
            })}
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Card;
