import React, { useState } from "react";
import "./style.scss";

const FilterCheckbox = () => {
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <form class="form">
      <div class="inputGroup">
        <input id="option1" name="option1" type="checkbox" />
        <label for="option1">Option One</label>
      </div>

      <div class="inputGroup">
        <input id="option2" name="option2" type="checkbox" />
        <label for="option2">Option Two</label>
      </div>
      <div class="inputGroup">
        <input id="option3" name="option3" type="checkbox" />
        <label for="option3">Option Three</label>
      </div>
      <div class="inputGroup">
        <input id="option4" name="option4" type="checkbox" />
        <label for="option4">Option Four</label>
      </div>
      <div class="inputGroup">
        <input id="option5" name="option5" type="checkbox" />
        <label for="option5">Option Five</label>
      </div>
      <div class="inputGroup">
        <input id="option6" name="option6" type="checkbox" />
        <label for="option6">Option Six</label>
      </div>
    </form>
  );
};

export default FilterCheckbox;
