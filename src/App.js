import React, {useState} from "react";
import "./App.css"

const App = () => {
//email
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

//password
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

//confirm password
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  

//email validification

  function emailvalidifaction(e) {
    setEmail(e.target.value);
    if((e.target.value).includes("@gmail.com")) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }


  //passward validifiction

  function passwordvalidifaction(e) {
    setPassword(e.target.value);
    if((e.target.value).length>=8) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }

  //confirm password validifiction

  function validatConfirmPassword(e) {
    setConfirmPassword(e.target.value);
    if((e.target.value)===password) {
      setValidConfirmPassword(true);
      return true;
    } else {
      setValidConfirmPassword(false);
      return false;
    }
  }



  const inputEmailStyle = {
    border: validEmail ? "2px solid blue" : "2px solid red",
  };
  const inputPasswordStyle = {
    border: validConfirmPassword ? "2px solid blue" : "2px solid red",
  };


  //form validification after sumbit
  function validateForm(e) {
    e.preventDefault();
    if(validConfirmPassword===false){
      alert("Something went wrong,Form cannot be submitted")
    } else {
      alert("Form submitted successfully!");
    }
  }


  //html part with js
  return (
    <form onSubmit={validateForm} className="verification">

      <div className="insert">
        <label htmlFor="email"><b>Email:</b></label> <br/>
        <input type="email" id="email" onChange={emailvalidifaction} value={email} style={inputEmailStyle} /> <br/>
        {
          validEmail===true? null : <p style={{color:"red"}}>Invalid email format</p> 
        }
      </div>


      <div className="insert">
        <label htmlFor="password"><b>Password:</b></label> <br/>
        <input type="password" id="password" onChange={passwordvalidifaction} value={password} style={inputPasswordStyle} /> <br/>
        {
          validPassword===true ? null : <p style={{color:"red"}}>Password must be atleast 8 characters</p>
        }
      </div>


      <div className="insert">
        <label htmlFor="confirm-password"><b>Confirm Password:</b></label> <br/>
        <input type="password" id="confirm-password" onChange={validatConfirmPassword} value={confirmPassword} style={inputPasswordStyle} /> <br/>
        {
          validConfirmPassword===true ? null : <p style={{color:"red"}}>Password didn't match</p>
        }
      </div>

      
      <button type="submit">Sign in</button>
    </form>
  )
}

export default App;