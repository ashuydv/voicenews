import React from "react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Alert from "../Alert/Alert";
function Home() {
    
    const [error, setError] = useState("")
    const {currentUser , logout} = useAuth()
    const history = useHistory()

    async function handleLogOut(){
        setError('')
        try{
            await logout()
            history.push('/login')
        }catch{
            setError("Failed to Log out")
        }
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
              HOME PAGE  
            </h2>
            {error &&  <Alert errmsg={error}></Alert> }
            <strong> Email : </strong> {currentUser.email}
            <div className="w-full lg:w-3/4">
            <Link to="/update-profile" className="btn btn-info w-100 mt-3"><button className="text-white bg-indigo-500 border-0 py-2 px-6 my-2  focus:outline-none hover:bg-indigo-600 rounded text-lg w-full">
                UPDATE PROFILE  
              </button></Link>

            </div>
            <button onClick={handleLogOut}>
            Log Out
        </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


