
import React, {useState} from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent(){
    return(
        <div>
        <Form 
          firstName={firstName}  
          lastName={lastName} 
          handleFirstNameChange={handleFirstNameChange} 
          handleLastNameChange={handleLastNameChange}/>
          <DisplayData firstName={firstName} lastName={lastName} />
        </div>
    );

}

export default ParentComponent;