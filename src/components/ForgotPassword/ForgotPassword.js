import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Alert from "../Alert/Alert";


const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {

    setMessage("")
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }
  return (
    <div>
      <section className="flex justify-center items-center text-gray-600 body-font sm:bg-red-300 bg-green-300 md:bg-yellow-300 lg:bg-blue-700 h-screen sm:h-auto md:h-screen lg:h-screen lg:px-10">
        <div className="container flex px-5 py-8 md:flex-row flex-col items-center ">
          <div className="lg:max-w-lg hidden sm:block md:block lg:w-full md:w-full sm:w-3/4 w-5/6 mb-10 md:mb-0 lg:p-4 md:p-4">
            <img
              className="object-cover object-center rounded p-2 md:w-full"
              alt="hero"
              src="https://pathwayport.com/saasland/images/login@4x.png"
            />
          </div>
          <div className="md:w-full my-auto bg-white flex justify-center items-center flex-col  p-2 md:ml-auto bg-blue-200 lg:w-1/2 md:py-8">
            <h2 className="text-gray-900 text-2xl md:text-white lg:text-green mb-1 text-center   font-medium title-font">
              RESET PASSWORD 
            </h2>
            {error &&  <Alert errmsg={error}></Alert> }
            {message && <Alert>{message}</Alert>}
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
              <button disabled={loading} className="text-white bg-indigo-500 border-0 py-2 px-6 my-2  focus:outline-none hover:bg-indigo-600 rounded text-lg w-full">
                RESET PASSWORD 
              </button>
              <Link to="/login">Login</Link>
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

export default ForgotPassword;

