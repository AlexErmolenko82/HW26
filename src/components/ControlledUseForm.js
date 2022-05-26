import { useState } from "react";

const ControlledUseForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorEmailMsg, setErrorEmailMsg] = useState("");
  const [errorPasswordMsg, setErrorPasswordMsg] = useState("");
  const [errorPasswordConfirmMsg, setErrorPasswordConfirmMsg] = useState("");

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case "email": {
        setEmail(value);
        break;
      }
      case "password": {
        setPassword(value);
        break;
      }
      case "confirm-password": {
        setConfirmPassword(value);
        break;
      }
    }
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorEmailMsg("");
    setErrorPasswordMsg("");
    setErrorPasswordConfirmMsg("");

    function isValidEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim()))
        return true;
      else return false;
    }

    if (!isValidEmail(email)) {
      setErrorEmailMsg(` << Wrong email! Email is a required field`);
      return;
    }

    if (password.trim().length < 4) {
      setErrorPasswordMsg(` << Minimum password length is 4 digits`);
      return;
    }

    if (password !== confirmPassword) {
      setErrorPasswordConfirmMsg(" << Confirm password failed!");
      return;
    }

    console.log("email", email);
    console.log("password", password);
    console.log("confirm-password", confirmPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        {errorEmailMsg && <span className="error">{errorEmailMsg}</span>}
      </div>
      <div>
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        {errorPasswordMsg && <span className="error">{errorPasswordMsg}</span>}
      </div>
      <div>
        <label>
          Confirm password:{" "}
          <input
            type="password"
            name="confirm-password"
            value={confirmPassword}
            onChange={handleChange}
          />
        </label>
        {errorPasswordConfirmMsg && (
          <span className="error">{errorPasswordConfirmMsg}</span>
        )}
      </div>
      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default ControlledUseForm;
