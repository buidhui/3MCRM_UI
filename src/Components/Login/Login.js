import React from "react";
import "./LoginStyle.css";
import { Redirect } from "react-router-dom";

export default function Login(props) {
  function onSignIn(e) {
    e.preventDefault();

    localStorage.setItem("token", "okok");
    console.log("Props", props.history);
    props.history.push("/");

    console.log("token", localStorage.getItem("token"));
  }

  if (localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <h1 className="error">3M CRM APPLICATION</h1>

      <div className="crm-two-grids">
        <div className="mid-class">
          <div className="img-right-side">
            <h3>Customers Relationship Managerment</h3>
            <p>
              We bring to you a brand new kind of web app for CRM with a modern
              UI, greate UX.
            </p>
            <img
              src="https://i.imgur.com/viT98Sy.png"
              className="img-fluid"
              alt="login-img"
            />
          </div>
          <div className="txt-left-side">
            <h2> Login Here </h2>
            <form>
              <div className="form-left-to-3m">
                <span className="far fa-user" aria-hidden="true" />
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  tabIndex="1"
                  required
                  autoFocus
                />
                <div className="clear" />
              </div>
              <div className="form-left-to-3m ">
                <span className="fa fa-lock" aria-hidden="true" />
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  tabIndex="2"
                  required
                />
                <div className="clear" />
              </div>
              <div className="main-two-3ms">
                <div className="left-side-forget">
                  <input type="checkbox" className="checked" />
                  <span className="remenber-me">Remember me </span>
                </div>
                <div className="right-side-forget">
                  <a href="top#" className="for">
                    Forgot password...?
                  </a>
                </div>
              </div>
              <div className="btnn">
                <button type="submit" onClick={onSignIn}>
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="copyrigh-wthree">
        <div className="footer-right">
          Copyright &copy; 2019 Design By <a href="top#">3M Team</a>
        </div>
      </footer>
    </React.Fragment>
  );
}
