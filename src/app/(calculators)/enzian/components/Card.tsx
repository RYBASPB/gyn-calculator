import React from "react";

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
            <label>
              <input type="radio" name="stage" value="stage1" />
              до 1 см
            </label>
            <label>
              <input type="radio" name="stage" value="stage2" />
              1-3 см
            </label>
            <label>
              <input type="radio" name="stage" value="stage3" />
              больше 3 см
            </label>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Card;
