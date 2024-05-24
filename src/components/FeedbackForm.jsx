import React, { useState } from "react";

export default function FeedbackForm() {
  const [showDisplayForm, setShowDisplayForm] = useState(true);
  const FEEDBACK_FORM_WRAPPER_ID = "feedback-form-wrapper";
  const FEEDBACK_FORM_ID = "feedback-form";


  const toggleShowDisplayForm = () => {
    setShowDisplayForm(!showDisplayForm);
  };

  const submitForm = (event) => {
    event.preventDefault()
    console.log("shup")
  }

  return (
    <div id={FEEDBACK_FORM_WRAPPER_ID} >
      <p>
        Report an issue{" "}
        {!showDisplayForm ? (
          <button onClick={toggleShowDisplayForm}>Show Form</button>
        ) : (
          <button onClick={toggleShowDisplayForm}>Hide Form</button>
        )}
      </p>
      {showDisplayForm ? (
        <div id={FEEDBACK_FORM_ID}>
          <form onSubmit={submitForm}>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" />
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" />
            <input type="submit" id="lname" name="lname" text="hi"/>
          </form>
        </div>
      ) : null}
    </div>
  );
}
