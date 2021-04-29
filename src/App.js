import "./App.css";

import { useState } from "react";
import Form from "./Form";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

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
      />
    </div>
  );
};

export default App;
