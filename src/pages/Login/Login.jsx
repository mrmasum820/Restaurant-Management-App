import React, { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import loginImg from "../../assets/login/login.jpg";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  let location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      const loggedUser = result.user;
      Swal.fire({
        title: "Login Successfully",
        icon: "success",
        draggable: true,
      });
      form.reset();
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    if (validateCaptcha(e.target.value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div>
      <Helmet>
        <title>MR's Kitchen | Login</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card md:w-1/2 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-2xl font-bold">Login now!</h1>
              <fieldset className="fieldset">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="label font-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="label font-semibold">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="input"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="label font-semibold">
                      <LoadCanvasTemplate />
                    </label>
                    <input
                      type="text"
                      name="captcha"
                      className="input"
                      onBlur={handleValidateCaptcha}
                      placeholder="type the captcha above"
                    />
                  </div>
                  <input
                    type="submit"
                    disabled={disabled}
                    value="Login"
                    className="btn btn-neutral bg-[#D1A054] w-full border-none mt-4"
                  />
                </form>
                <p className="mt-3">
                  New Here?{" "}
                  <Link className="text-[#D1A054]" to="/signup">
                    Create an account
                  </Link>
                </p>
              </fieldset>
            </div>
          </div>

          <div className="text-center md:w-1/2 lg:text-left">
            <img src={loginImg} alt="login image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
