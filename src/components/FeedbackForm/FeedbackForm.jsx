import React, { useState } from "react";
import Form from "./Form";
import { useParams } from "react-router-dom";
import { submitFeedbackForm } from "../../routes";

export default function FeedbackForm() {
  const [showDisplayForm, setShowDisplayForm] = useState(false);
  const FEEDBACK_FORM_WRAPPER_ID = "feedback-form-wrapper";
  const FEEDBACK_FORM_ID = "feedback-form";
  const { gameId } = useParams();

  const toggleShowDisplayForm = () => {
    setShowDisplayForm(!showDisplayForm);
  };

  // report form
  const [reportForm, setReportForm] = useState({
    gameId,
    scoring: false,
    typo: false,
    lineup: false,
    technical: false,
    other: false,
    comment: "",
  });

  // form handler
  const handleChange = event => {
    setReportForm({
      ...reportForm,
      [event.target.name]: event.target.value,
    });
  };

  // form handler
  const handleChangeCheckbox = event => {
    setReportForm({
      ...reportForm,
      [event.target.name]: event.target.checked,
    });
  };

  const submitForm = async event => {
    event.preventDefault();
    let response = null;
    if (reportForm.comment) {
      response = await submitFeedbackForm(reportForm);
    }  else {
      window.alert("Please provide more details")
    }
    console.log(response);
  };

  const clearForm = () => {
    setReportForm({
      // isScoringIssue: false,
      // isTypo: false,
      // isLineupIssue: false,
      // isTechnicalIssue: false,
      scoring: false,
      typo: false,
      lineup: false,
      technical: false,
      other: false,
      comment: "",
    });
  };
  return (
    <div id={FEEDBACK_FORM_WRAPPER_ID}>
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
          <Form
            handleChangeCheckbox={handleChangeCheckbox}
            handleChange={handleChange}
            submitForm={submitForm}
            clearForm={clearForm}
          />
        </div>
      ) : null}
    </div>
  );
}
