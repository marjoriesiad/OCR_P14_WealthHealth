import React, { useEffect } from "react";
import states from "../../data/states.js";

/**
 *
 * @param {onChange} props
 * @returns a select input for a form
 */

const Select = (props) => {
  useEffect(() => {
    const stateSelect = document.getElementById("state");
    if (!stateSelect.hasChildNodes()) {
      const option = document.createElement("option");
      option.value = "stateSelect";
      option.text = "Select State";
      stateSelect.appendChild(option);

      states.forEach((state) => {
        const option = document.createElement("option");
        option.value = state.abbreviation;
        option.text = state.name;
        stateSelect.appendChild(option);
      });
    }
  });

  return (
    <select
      name="state"
      id="state"
      defaultValue={"stateSelect"}
      onChange={props.onChange}
    ></select>
  );
};

export default Select;
