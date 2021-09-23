import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router";
import Alert from "../Alert/Alert";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to login");
    }
    setLoading(false);
  }
  return (
    <div>
      <section className="flex justify-center items-center text-gray-700 body-font sm:bg-red-300 bg-green-300 md:bg-yellow-300 lg:bg-purple-800 h-screen sm:h-auto md:h-screen lg:h-screen lg:px-10">
        <div className="container flex px-5 py-8 md:flex-row flex-col items-center ">
          <div className="lg:max-w-lg hidden sm:block md:block lg:w-full md:w-full sm:w-3/4 w-5/6 mb-10 md:mb-0 lg:p-4 md:p-4">
            <img
              className="object-cover object-center rounded p-2 md:w-full"
              alt="hero"
              // src="https://pathwayport.com/saasland/images/login@4x.png"
              src="https://bxminers.com/assets/img/signup-left.png"
            />
          </div>
          <div className="md:w-full my-auto  flex justify-center items-center flex-col  p-2 md:ml-auto bg-purple-300 lg:w-1/2 md:py-8">
            <h2 className="text-gray-900 text-2xl md:text-white lg:text-green mb-1 text-center   font-medium title-font">
              LOGIN 
            </h2>
            {error &&  <Alert errmsg={error}></Alert> }
            <form onSubmit={handleSubmit} className="w-full lg:w-3/4">
              <div className="relative my-4">
                <label for="name" className="leading-7 text-md text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-md text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  ref={passwordRef}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
                />
              </div>

              <button disabled={loading} className="text-white bg-indigo-500 border-0 py-2 px-6 my-2  focus:outline-none hover:bg-indigo-600 rounded text-lg w-full">
                LOGIN
              </button>
              <Link to="/forgot-password">Forgot Password ?</Link>
            </form>
              <p className="text-md text-center border-t-2 border-black py-2 text-gray-500 mt-3">
              Need an account ? <Link to="/signup">SignUp</Link>
              </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
