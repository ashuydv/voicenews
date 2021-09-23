import React, { useState } from "react";
import { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Alert from "../Alert/Alert";

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, upEmail, upPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(upEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(upPassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
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
              UPDATE PROFILE
            </h2>
            {error && <Alert errmsg={error}></Alert>}
            <form onSubmit={handleSubmit} className="w-full lg:w-3/4">
              <div className="relative my-4">
                <label for="name" className="leading-7 text-md text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
                  required
                  defaultValue={currentUser.email}
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-md text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  ref={passwordRef}
                  placeholder="Leave blank to keep the same"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-md text-gray-600">
                  Confirm Password
                </label>
                <input
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="Leave blank to keep the same"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
                />
              </div>

              <button
                disabled={loading}
                className="text-white bg-indigo-500 border-0 py-2 px-6 my-2  focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
              >
                UPDATE 
              </button>
            </form>
            <p className="text-md text-center border-t-2 border-black py-2 text-gray-500 mt-3">
            <Link to="/">Cancel</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateProfile;
