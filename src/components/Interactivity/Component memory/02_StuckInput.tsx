import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  function handleFirstNameChange(e: any) {
    setFormData(e.target.value);
  }

  function handleLastNameChange(e: any) {
    setFormData(e.target.value);
  }

  function handleReset() {
    setFormData({
      firstName: "",
      lastName: "",
    });
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={formData.firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={formData.lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {formData.firstName} {formData.lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
