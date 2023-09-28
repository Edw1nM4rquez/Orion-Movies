import { useState } from "react";
import "./Login.css";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function ValidateForm(username, password) {
  let result = true;
  if (username === '' || username === null) {
    result = false;
    toast.error('Please enter username');
  }
  if (password === '' || password === null) {
    result = false;
    toast.error('Please enter password');
  }
  return result;
}

function HeaderLogin() {
  return (
    <>
      <h2> User Login</h2>
      <div className="Title">
        <i className="fas fa-user"></i>
      </div>
    </>
  );
}

function Login() {

  const usenavigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isInvalidForm, setInvalidForm] = useState();

  const ProceedLogin = (e) => {
    e.preventDefault();
    setInvalidForm(ValidateForm(username, password));
    if (isInvalidForm) {
      fetch("http://localhost:3000/users/" + username).then((res) => {
        return res.json();
      }).then((resp) => {
        if (Object.keys(resp).length === 0) {
          toast.error('Please Enter valid username');
        } else {
          if (resp.password === password) {
            toast.success('Success');
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('userrole', resp.role);
            usenavigate('/')
          } else {
            toast.error('Please Enter valid credentials');
          }
        }
      }).catch((err) => {
        toast.error('Login Failed due to :' + err.message);
      });
    }
  };


  return (
    <>
      <Toaster position="top-right"
        reverseOrder={false} />
      <div className="login">
        <div className="container-login">
          <HeaderLogin></HeaderLogin>
          <div className="form-login">
            <form action="" onSubmit={ProceedLogin} className="form-style">
              <div className="form">
                <label htmlFor="email">Email:</label>
                <input
                  className={(isInvalidForm === false && username === '') ? 'border-danger' : 'border-white'}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"

                />
                {(isInvalidForm === false && username === '') && <span style={{ color: 'red' }}> Obligatory field </span>}
              </div>
              <div className="form">
                <label htmlFor="passw">Password:</label>
                <input
                  className={(isInvalidForm === false && password === '') ? 'border-danger' : 'border-white'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
                {(isInvalidForm === false && password === '') && <span style={{ color: 'red' }}> Obligatory field </span>}
              </div>
              <div className="button-form">
                <button className="login-button" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
