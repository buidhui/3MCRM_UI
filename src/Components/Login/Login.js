import React from "react";
import "./LoginStyle.css";

export default function Login() {
  function onSignIn(e) {
    // e.preventDefault();

    localStorage.setItem("token", "okok");
  }

  return (
    <React.Fragment>
      <h1 className="error">3M CRM APPLICATION</h1>

      <div className="w3layouts-two-grids">
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
              <div className="form-left-to-w3l">
                <span className="far fa-user" aria-hidden="true" />
                <input type="text" name="Name" placeholder="Email" required />
                <div className="clear" />
              </div>
              <div className="form-left-to-w3l ">
                <span className="fa fa-lock" aria-hidden="true" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <div className="clear" />
              </div>
              <div className="main-two-w3ls">
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
