import "./App.css";

import { useState } from "react";
import Form from "./Form";
import StepTwo from "./StepTwo";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [page, setPage] = useState(false);

  return (
    <div class="container">
      <Form
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPass={confirmPass}
        setConfirmPass={setConfirmPass}
        page={page}
        setPage={setPage}
      />
      <StepTwo page={page} name={name} email={email} password={password} />
    </div>
  );
};

export default App;
