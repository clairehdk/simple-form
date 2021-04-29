import React from "react";
import StepTwo from "./StepTwo";

const Form = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPass,
  setConfirmPass,
  samePass,
  setSamePass,
}) => {
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPass(value);
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    if (confirmPass !== password) {
      alert("Vos deux mots de passe ne sont pas identiques");
    } else {
      setSamePass(true);
      <StepTwo
        className={samePass === true ? "display" : "hidden"}
        name={name}
        email={email}
        password={password}
      />;
    }
  };

  return (
    <div>
      <h1>Create account</h1>
      <form
        className={samePass === true ? "hidden" : "display"}
        onSubmit={handleSubmit}
      >
        <span>Name</span>
        <input
          placeholder="Jean Dupont"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <span>Email</span>
        <input
          placeholder="jeandupont@mreacteur.io"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <span>Password</span>
        <input
          placeholder="LeReacTeuR2020"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <span>Confirm your password</span>
        <input
          placeholder="LeReacTeuR2020"
          type="password"
          name="confirmpass"
          value={confirmPass}
          onChange={handleConfirmPasswordChange}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Form;
