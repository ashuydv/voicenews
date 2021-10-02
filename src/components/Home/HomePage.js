import React from "react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import Alert from "../Alert/Alert";
import "./HomPage.css";
import { FaChevronUp } from "react-icons/fa";
import logo from "./logo.png";
import ScrollToTop from "react-scroll-to-top";
import { FaUserEdit } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { Link as ScrollLink } from "react-scroll";
import profile1 from "./../../images/profile1.png";
const HomePage = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to Log out");
    }
  }

  return (
    <div>
      <nav className="bg-gray-900">
        <div class="logo">
          <img src={logo} alt="" className="w-14 h-14 m-0" />
          <span>{error}</span>
        </div>
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <ul>
          <li className="stroke">
            <ScrollLink
              class="nav-item mr-5 hover:bg-purple-500"
              to="features"
              smooth={true}
              duration={100}
            >
              Features
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              class="nav-item mr-5 hover:bg-purple-500"
              to="about"
              smooth={true}
              duration={150}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              class="nav-item mr-5 hover:bg-purple-500"
              to="team"
              smooth={true}
              duration={200}
            >
              Team
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              class="nav-item mr-5 hover:bg-purple-500"
              to="contact"
              smooth={true}
              duration={250}
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <Link to="/update-profile">
              <button class="bg-purple-500 text-gray-200 font-semibold py-1 px-6 rounded inline-flex items-center">
                <span title="CLick to edit profile" class="mr-1">
                  <div className="flex items-center">{currentUser.email}<FaUserEdit className="ml-3" /></div>
                </span>
              </button>
            </Link>
          </li>
          <li>
            <button
              class="inline-flex items-center text-white bg-red-500  border-0 py-1 px-3 focus:outline-none  rounded  mt-4 md:mt-0"
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
                Before they sold out
                <br class="hidden lg:inline-block" />
                readymade gluten
              </h1>
              <p class="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Button
                </button>
                <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  Button
                </button>
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
                Our Features
              </h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug.
              </p>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
              </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">
                    Shooting Stars
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine, ramps
                    microdosing banh mi pug VHS try-hard.
                  </p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">
                    The Catalyzer
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine, ramps
                    microdosing banh mi pug VHS try-hard.
                  </p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">
                    Neptune
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine, ramps
                    microdosing banh mi pug VHS try-hard.
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
                Before they sold out
                <br class="hidden lg:inline-block" />
                readymade gluten
              </h1>
              <p class="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Button
                </button>
                <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  Button
                </button>
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
          class="text-gray-600 bg-gray-900 body-font relative"
          id="contact"
        >
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
                Contact Us
              </h1>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
              </div>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-full sm:w-1/2 md:1/2 lg:1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-md text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full sm:w-1/2 md:1/2 lg:1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-md text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="message" class="leading-7 text-md text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button class="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact us */}
      </main>
      <footer class="text-gray-400 bg-gray-800 body-font">
        <div class="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <div class="flex title-font font-medium items-center text-white  md:mb-0">
            <ScrollLink
              to="home"
              class="flex items-center justify-center rounded-full flex-shrink-0"
            >
              <img src={logo} alt="" className="w-14 h-14 m-0 logo" />
              <span class="ml-3 text-xl"></span>
            </ScrollLink>
          </div>
          <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2020 Tailblocks —
            <a
              href="https://twitter.com/knyttneve"
              class="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @knyttneve
            </a>
          </p>
        </div>
        <ScrollToTop
          smooth
          component={<FaChevronUp />}
          style={{
            color: "white",
            background: "#8b5cf6",
            padding: "12px",
            boxShadow: "0px 0px 5px rgba(0,0,0,.5)",
          }}
        />
      </footer>
    </div>
  );
};

export default HomePage;

