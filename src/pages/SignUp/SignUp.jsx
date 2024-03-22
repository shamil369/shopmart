import React from 'react'

function SignUp() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup-box">
    <label className="block head-label">Sign Up</label>
    <div className="signup-img">
      <img src="/signup-logo.svg" alt="Sign up Logo" />
    </div>
    <div className="signup-input">
      <div className="firstname-div margin">
        <label className="block input-label">Firstname</label>
        <input
          className="input-type"
          placeholder="Enter Firstname"
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
      </div>
      <div className="lastname-div margin">
        <label className="block input-label">Lastname</label>
        <input
          className="input-type"
          placeholder="Enter Lastname"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
      </div>
      <div className="email-div margin">
        <label className="block input-label">Email address</label>
        <input
          className="input-type"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="password-div margin">
        <label className="block input-label">Password</label>
        <input
          className="input-type"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="register-div">
        <input type="submit" value="Register" />
      </div>
    </div>
  </div>
  )
}

export default SignUp