// import React, { useState } from "react";
import React from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

function Form(props) {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  // function handleFirstNameChange(event){
  //   setFirstName(event.target.value);
  // }
  // function handleLastNameChange(event){
  //   setLastName(event.target.value);
  // }
  return (
    <form>
      <input type="text" value={firstName} />
      <input type="text" value={lastName} />
      <input type="text" onChange={props.handleFirstNameChange} value={props.firstName} />
      <input type="text" onChange={props.handleLastNameChange} value={props.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}
}
export default Form;
