import React from "react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./HomPage.css";

import logo from "./logo.png";

import { FaUserEdit } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import { RiTeamFill } from "react-icons/ri";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";

import { Link as ScrollLink } from "react-scroll";
import profile1 from "./../../images/profile1.png";
const HomePage = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const [navbar, setNavbar] = useState(false);

  async function handleLogOut() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to Log out");
    }
  }

  const changeBg = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  //Contact
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setuserData({ ...userData, [name]: value });
  };

  // Connect with fireBase

  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, message } = userData;
    const res = await fetch(
      "https://news-application-4947b-default-rtdb.firebaseio.com/userDataRecord.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }
    );

    if (res) {
      alert(
        "Your message has been sent Succesfully!! ThankYou for Your Valuable Response!!"
      );
    } else {
      alert("Please fill the Data correctly!!");
    }
  };

  return (
    <div>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="logo bg-white rounded-full">
          <img src={logo} alt="" className="w-14 h-14 m-0" />
          <span>{error}</span>
        </div>
        <input type="checkbox" id="click" />
        <label for="click" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li className="stroke">
            <ScrollLink
              className="nav-item mr-5 hover:bg-purple-500"
              to="features"
              smooth={true}
              duration={100}
            >
              Features
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="nav-item mr-5 hover:bg-purple-500"
              to="about"
              smooth={true}
              duration={150}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="nav-item mr-5 hover:bg-purple-500"
              to="team"
              smooth={true}
              duration={200}
            >
              Team
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="nav-item mr-5 hover:bg-purple-500"
              to="contact"
              smooth={true}
              duration={250}
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <Link to="/news-cards">
              <button className="bg-purple-500 text-gray-200 font-semibold py-1 px-6 rounded inline-flex items-center">
                <span className="mr-1">News App</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/update-profile">
              <button className="bg-purple-500 text-gray-200 font-semibold py-1 px-6 rounded inline-flex items-center">
                <span title="Click to edit profile" className="mr-1">
                  <div className="flex items-center">
                    {currentUser.email}
                    <FaUserEdit className="ml-3" />
                  </div>
                </span>
              </button>
            </Link>
          </li>
          <li>
            <button
              className="inline-flex items-center text-white bg-red-500  border-0 py-1 px-3 focus:outline-none  rounded  mt-4 md:mt-0"
              onClick={handleLogOut}
            >
              Logout
              <BiLogOut className="ml-3" />
            </button>
          </li>
        </ul>
      </nav>

      <main>
        {/* hero */}
        <section class="text-gray-400 bg-gray-900 body-font hero" id="home">
          <div class="container mx-auto flex px-5 py-32 md:hscreen lg:h-screen md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                What is a voice assistant?
                <br class="hidden lg:inline-block" />
              </h1>
              <p class="mb-8 leading-relaxed">
                A voice assistant is a digital assistant that uses voice
                recognition, language processing algorithms, and voice synthesis
                to listen to specific voice commands and return relevant
                information or perform specific functions as requested by the
                user. Button
              </p>
              <div class="flex justify-center">
                <Link to="/news-cards">
                  <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                    TRY NOW
                  </button>
                </Link>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png"
              />
            </div>
          </div>
        </section>
        {/* hero end */}

        {/* features */}
        <section
          class="text-gray-400 bg-gray-800 body-font features"
          id="features"
        >
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
                Features of News App
              </h1>

              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
              </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-5 flex-shrink-0">
                  <FaRegHandshake className="text-7xl" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">
                    User Friendly
                  </h2>
                  <p class="leading-relaxed text-base">
                    We provide user friendly UI which is very simple and easy to
                    use.Its very easy to locate different tools and options.
                  </p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-5 flex-shrink-0">
                  <AiOutlineFieldTime className="text-7xl" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">
                    Fetch News from real time API's
                  </h2>
                  <p class="leading-relaxed text-base">
                    Get the latest news and stay updated. We use News API to
                    fetch all the news.
                  </p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-5 flex-shrink-0">
                  {/* <AiOutlineFileSearch className="text-7xl" /> */}
                  <RiTeamFill className="text-7xl" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">
                    Provide Human like interactions
                  </h2>
                  <p class="leading-relaxed text-base">
                    Voice search, also called voice-enabled, allows the user to
                    use a voice command to search various kinds of news.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* features-end */}

        {/* about */}
        <section
          class="text-gray-400 bg-gray-900 py-20 body-font about"
          id="about"
        >
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
              About Us
            </h1>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
            </div>
          </div>
          <div class="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="https://cdn-daajg.nitrocdn.com/OWoAjzXljRbSthToxhHyZPSbRFlxmyOx/assets/static/optimized/rev-63c93ba/wp-content/uploads/2021/02/automationedge-virtual-assistant-for-it-support-01.png"
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="text-4xl mb-4 text-white">
                Alan
                <br class="hidden lg:inline-block" />
              </h1>
              <p class="mb-8 leading-relaxed">
                In 2017 Alan set out to take voice assistants to the next level,
                by enabling voice AI for all applications. Using domain specific
                language models and contextual understanding, Alan is focused on
                creating a new generation of Enterprise Voice AI applications.
                By using the Alan Platform, developers are able to take control
                of voice, and create an effective workflow that best fits their
                users with the help of vocal commands.
              </p>
              <div class="flex justify-center">
                <Link to="/news-cards">
                  <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                    Try Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* about end */}

        {/* team */}
        <section class="text-gray-400 bg-gray-800 body-font team" id="team">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
                Our Team
              </h1>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
              </div>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={profile1}
                  />
                  <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-white">
                      Gaurav Patil
                    </h2>
                    <h3 class="text-gray-500 mb-3">Developer</h3>
                    <p class="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={profile1}
                  />
                  <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-white">
                      Vivek Lone
                    </h2>
                    <h3 class="text-gray-500 mb-3">Designer</h3>
                    <p class="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={profile1}
                  />
                  <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-white">
                      Pratik Tayade
                    </h2>
                    <h3 class="text-gray-500 mb-3">UI Developer</h3>
                    <p class="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/2">
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={profile1}
                  />
                  <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-white">
                      Ashutosh Yadav
                    </h2>
                    <h3 class="text-gray-500 mb-3">Designer</h3>
                    <p class="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team end*/}

        {/* contact */}
        <section
          className="text-gray-600 bg-gray-900 body-font relative"
          id="contact"
        >
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
                Contact Us
              </h1>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <form method="POST">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-full sm:w-1/2 md:1/2 lg:1/2">
                    <div className="relative">
                      <label
                        for="name"
                        className="leading-7 text-md text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={userData.name}
                        onChange={postUserData}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-1/2 md:1/2 lg:1/2">
                    <div className="relative">
                      <label
                        for="email"
                        className="leading-7 text-md text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={userData.email}
                        onChange={postUserData}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        for="message"
                        className="leading-7 text-md text-white"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        value={userData.message}
                        onChange={postUserData}
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
                      onClick={submitData}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* contact us */}
      </main>
      <footer className="text-gray-400 bg-gray-800 body-font">
        <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <div className="flex title-font font-medium items-center text-white  md:mb-0">
            <ScrollLink
              to="home"
              className="flex items-center justify-center rounded-full flex-shrink-0"
            >
              <img src={logo} alt="" className="w-14 h-14 m-0 logo" />
              <span className="ml-3 text-xl"></span>
            </ScrollLink>
          </div>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2021 AI NEWS APPLICATION —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @knyttneve
            </a>
          </p>
        </div>
        {/* <ScrollToTop
          smooth
          component={<FaChevronUp />}
          style={{
            color: "white",
            background: "#8b5cf6",
            padding: "12px",
            boxShadow: "0px 0px 5px rgba(0,0,0,.5)",
            marginRight:"70px"
          }}
        /> */}
      </footer>
    </div>
  );
};

export default HomePage;
