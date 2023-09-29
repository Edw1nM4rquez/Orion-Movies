import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./SingUp.css";
import { useNavigate } from "react-router-dom";

/**
 * Function to render error messages within the page
 * @param {*} param0 
 * @returns 
 */
function RenderMessageObligatoryControl({ isInvalidForm, control }) {
  return (
    <>
      {isInvalidForm === false && control === "" && (
        <span style={{ color: "red" }}> Obligatory field </span>
      )}
    </>
  );
}

/**
 * Function to create the record header
 * @returns 
 */
function HeaderRegister() {
  return (
    <>
      <h2> User Register</h2>
      <div className="Title">
        <i className="fas fa-user"></i>
      </div>
    </>
  );
}

/**
 * Function to validate form data
 * @param {*} username 
 * @returns 
 */
function ValidateForm(username) {
  let result = false;
  if (username === "" || username === null) {
    result = true;
  }
  return result;
}

function SingUp() {

  //Variable declaration
  const usenavigation = useNavigate();
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isInvalidForm, setInvalidForm] = useState();
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  /**
   * Validate email 
   * @param {*} email_reference 
   * @returns 
   */
  const validateEmail = (email_reference) => {
    const email_ref = email_reference;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email_ref)) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * Function to record user data
   * @param {*} e 
   */
  const ProceedRegister = async (e) => {
    if (isInvalidForm && isInvalidForm !== undefined) {
      let user = {};
      user.id = nickname;
      user.name = username;
      user.password = password;
      user.email = email;
      user.phone = phone;
      fetch(`http://localhost:3000/users/`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((res) => {
          toast.success("Create user successfully");
          usenavigation("/");
        });
    } else {
      toast.error("Invalid Form");
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="login">
        <div className="container-login">
          <HeaderRegister></HeaderRegister>
          <div className="form-login">
            <form action="" className="form-style registerForm">
              <div className="form">
                <label htmlFor="nickname">Nickname:</label>
                <input
                  className={
                    ValidateForm(nickname) === true && nickname === ""
                      ? "border-danger"
                      : "border-white"
                  }
                  value={nickname}
                  onChange={(e) => {
                    setNickname(e.target.value);
                    setInvalidForm(ValidateForm(nickname));
                  }}
                  type="text"
                />
                <RenderMessageObligatoryControl
                  isInvalidForm={isInvalidForm}
                  control={nickname}
                ></RenderMessageObligatoryControl>
              </div>
              <div className="form">
                <label htmlFor="name">Name:</label>
                <input
                  className={
                    ValidateForm(username) === true && username === ""
                      ? "border-danger"
                      : "border-white"
                  }
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setInvalidForm(ValidateForm(username));
                  }}
                  type="text"
                  id="name"
                />
                 <RenderMessageObligatoryControl
                  isInvalidForm={isInvalidForm}
                  control={username}
                ></RenderMessageObligatoryControl>
                
              </div>

              <div className="form">
                <label htmlFor="email">Email:</label>
                <input
                  className={
                    ValidateForm(email) === true && email === ""
                      ? "border-danger"
                      : "border-white"
                  }
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setInvalidForm(ValidateForm(email));
                  }}
                  type="text"
                />
                 <RenderMessageObligatoryControl
                  isInvalidForm={isInvalidForm}
                  control={email}
                ></RenderMessageObligatoryControl>
                {validateEmail(email) === true &&
                  email === "" &&
                  isInvalidForm === false && (
                    <span style={{ color: "red" }}> Incorrect Email </span>
                  )}
              </div>
              <div className="form">
                <label htmlFor="passw">Password:</label>
                <input
                  className={
                    ValidateForm(password) === true && password === ""
                      ? "border-danger"
                      : "border-white"
                  }
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setInvalidForm(ValidateForm(password));
                  }}
                  type="password"
                  id="passw"
                />
                {isInvalidForm === false && password === "" && (
                  <span style={{ color: "red" }}> Obligatory field </span>
                )}
              </div>
              <div className="form">
                <label htmlFor="phone">Phone:</label>
                <input
                  id="phone"
                  className={
                    ValidateForm(phone) === true && phone === ""
                      ? "border-danger"
                      : "border-white"
                  }
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setInvalidForm(ValidateForm(phone));
                  }}
                  type="phone"
                />
                {isInvalidForm === false && phone === "" && (
                  <span style={{ color: "red" }}> Obligatory field </span>
                )}
              </div>
              <div className="form"></div>
              <div className="button-form">
                <button
                  className="login-button"
                  type="button"
                  onClick={(e) => ProceedRegister(e)}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingUp;
