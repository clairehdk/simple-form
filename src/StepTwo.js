import React from "react";
import Form from "./Form";

const handleSubmit = (event) => {
  event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
  <Form />;
};

const StepTwo = ({ name, email, password }) => {
  return (
    <div>
      <h1>Results</h1>
      <div>
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>
      <input type="submit" value="Edit your information" />
    </div>
  );
};

export default StepTwo;
