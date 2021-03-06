import React from "react";

const StepTwo = ({ name, email, password, page, setPage }) => {
  const handleEdit = (event) => {
    event.preventDefault();
    setPage(false);
  };
  return (
    <div className={page === true ? "display" : "hidden"}>
      <h1>Results</h1>
      <div className="results">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>
      <input
        onChange={handleEdit}
        className="edit"
        type="submit"
        value="Edit your information"
      />
    </div>
  );
};

export default StepTwo;
