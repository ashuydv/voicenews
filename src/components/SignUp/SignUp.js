import React, { useState } from "react";
import { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
// import Alert from "../Alert/Alert";
import suImg from "../../images/signup.png"


import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup} = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      alert("Please enter correct credentials. Password lenght should be greater than 5");
    }
    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/")
    } catch {
      alert("Failed to create an account")
    }
    setLoading(false);
  }
  return (
    <div>
      <section className="flex justify-center items-center text-gray-600 body-font bg-gray-900 h-screen sm:h-auto md:h-screen lg:h-screen lg:px-10">
        <div className="container flex px-5 py-8 md:flex-row flex-col items-center ">
          <div className="lg:max-w-lg hidden sm:block md:block lg:w-full md:w-full sm:w-3/4 w-5/6 mb-10 md:mb-0 lg:p-4 md:p-4">
            <img
              className="object-cover object-center rounded p-2 md:w-full"
              alt="hero"
              src={suImg}
            />
          </div>
          <div className="md:w-full my-auto  flex justify-center items-center flex-col  p-2 md:ml-auto bg-gray-800 lg:w-1/2 md:py-8">
            <h2 className="text-gray-900 text-2xl md:text-white lg:text-green mb-1 text-center   font-medium title-font">
              SIGN UP
            </h2>
            <form onSubmit={handleSubmit} className="w-full lg:w-3/4">
              <div className="relative my-4">
                <label for="name" className="leading-7 text-md text-white">
                  Email
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-md text-white">
                  Password
                </label>
                <input
                  type="password"
                  ref={passwordRef}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-md text-white">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  ref={passwordConfirmRef}
                  className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
                />
              </div>

              <button disabled={loading} className="text-white bg-purple-500 border-0 py-2 px-6 my-2  focus:outline-none hover:bg-purple-600 rounded text-lg w-full">
                SIGN UP 
              </button>
            </form>
              <p className="text-md w-3/4 text-center border-t-2 border-gray-400 py-2 text-gray-300 mt-3">
              Already have an account ? <Link to="/login" className='underline text-purple-400'>Log In </Link>
              </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
