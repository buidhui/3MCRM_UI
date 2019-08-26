import React, { useState } from "react";
import "./LoginStyle.css";
import { Redirect } from "react-router-dom";
import url from "../url";
import axios from "axios";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSignIn(e) {
    e.preventDefault();

    // localStorage.setItem("token", "okok");

    axios({
      method: "get",
      url: `${url}/staffs?email=${email}`,
      headers: {
        "content-type": "application/json"
      }
    })
      .then(respone => {
        console.log("respone", respone.data);
        // Neu k dung:
        if (!respone.data) {
          alert("Sai mật khẩu hoặc email");
        } else {
          // Ket qua thanh cong email & pasword đúng
          localStorage.setItem("role", respone.data.role);
          localStorage.setItem("token", respone.data.phone);
          window.location.href = "/";
          // props.history.push("/");
        }
      })
      .catch(error => {
        // Ket qua sai: email & password sai
        console.log(error);
      });

    // console.log("token", localStorage.getItem("token"));
  }

  if (localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <h1 className="error">ỨNG DỤNG QUẢN LÍ KHÁCH HÀNG</h1>

      <div className="crm-two-grids">
        <div className="mid-class">
          <div className="img-right-side">
            <h3>Customers Relationship Managerment 3M CRM</h3>
            <p>
              Chúng tôi mang đến cho bạn một ứng dụng web quản lí khách hàng
              hoàn toàn mới, với giao diện hiện đại và trải nghiệm tuyệt vời.
            </p>
            <img
              src="https://i.imgur.com/viT98Sy.png"
              className="img-fluid"
              alt="login-img"
            />
          </div>
          <div className="txt-left-side">
            <h2> Đăng nhập </h2>
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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
                  placeholder="Mật khẩu"
                  tabIndex="2"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <div className="clear" />
              </div>
              <div className="main-two-3ms">
                <div className="left-side-forget">
                  <input type="checkbox" className="checked" />
                  <span className="remenber-me">Lưu đăng nhập</span>
                </div>
                <div className="right-side-forget">
                  <a href="top#" className="for">
                    Quên mật khẩu...?
                  </a>
                </div>
              </div>
              <div className="btnn">
                <button type="submit" onClick={onSignIn}>
                  Đăng nhập
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
