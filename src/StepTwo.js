import React from "react";

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
