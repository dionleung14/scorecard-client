import React from "react";

export default function Form({
  handleChangeCheckbox,
  handleChange,
  submitForm,
  clearForm,
}) {
  return (
    <form onSubmit={submitForm} onReset={clearForm}>
      <input id="reset-form-button" type="reset" value="Reset form" />
      <p>
        What type of issue would you like to report? <br />
        (check all that apply)
      </p>
      <div>
        <input
          type="checkbox"
          id="scoring"
          name="scoring"
          value="scoring"
          onChange={handleChangeCheckbox}
        />
        <label for="scoring">Scoring</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="typo"
          name="typo"
          value="typo"
          onChange={handleChangeCheckbox}
        />
        <label for="typo">Typo</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="lineup"
          name="lineup"
          value="lineup"
          onChange={handleChangeCheckbox}
        />
        <label for="lineup">Lineup/Substitution</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="technical"
          name="technical"
          value="technical"
          onChange={handleChangeCheckbox}
        />
        <label for="technical">Technical</label>
      </div>{" "}
      <div>
        <input
          type="checkbox"
          id="other"
          name="other"
          value="other"
          onChange={handleChangeCheckbox}
        />
        <label for="other">Other</label>
      </div>
      <div>
        <label for="comment">
          Please provide more details
        </label>
        <input
          type="text"
          id="comment"
          name="comment"
          onChange={handleChange}
        />
      </div>
      <input type="submit" id="submit-report-form" />
    </form>
  );
}
