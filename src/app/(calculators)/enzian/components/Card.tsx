import React, {
  ComponentProps,
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactNode,
} from "react";

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

function Card() {
  return (
    <div>
      <div>
        <div>P</div>
        <div>Брюшина - Peritoneum</div>
      </div>

      <div>
        <div>
          <img alt="Peritoneum" />
        </div>
      </div>

      <div>
        <form>
          <fieldset>
            <RadioInput name="stage" value="stage1" />
            <RadioInput name="stage" value="stage2" />
            <RadioInput name="stage" value="stage3" />
          </fieldset>
          <button className="rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
            Следующий шаг
          </button>
        </form>
      </div>
    </div>
  );
}

export default Card;
