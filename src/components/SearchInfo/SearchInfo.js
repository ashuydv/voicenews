import React from "react";
import "./SearchInfo.css";
import AlanImg from "../../images/alan.jpg"

const SearchInfo = () => {
  return (
    <div className="w-full min-h-screen bg-gray-600 p-6 font-sans">
      <div className="flex justify-center items-center">
        <img src={AlanImg} alt="" className="rounded-xl  shadow-lg"/>
      </div>
      <div className="flex flex-wrap justify-center text-gray-200 ">
        <div className="flex flex-col rounded-lg shadow-md  w-full m-6 text-center hover:bg-purple-600 transition-all duration-500 cursor-pointer sm:w-52 py-4 bg-purple-500 md:w-1/4">
            <h3 className="mb-4">Latest News </h3>
            <h3  className="italic">Try Saying:</h3>
            <p className="italic">Give the latest news </p>
        </div>
        <div className="flex flex-col rounded-lg shadow-md  w-full m-6 text-center hover:bg-purple-600 transition-all duration-500 cursor-pointer sm:w-52 py-4 bg-purple-500 md:w-1/4">
            <h3 className="mb-4">News by Categories</h3>
            <h3 className="font-bold">Categories:</h3>
            <p>Business, Entertainment, General, Health, Science, Sports, Technology</p>
            <h3 className="italic">Try Saying:</h3>
            <p className="italic">Give the latest Technology news </p>
        </div>
        <div className="flex flex-col rounded-lg shadow-md  w-full m-6 text-center hover:bg-purple-600 transition-all duration-500 cursor-pointer sm:w-52 py-4 bg-purple-500 md:w-1/4">
            <h3 className="mb-4">News by Terms</h3>
            <h3 className="font-bold">Terms:</h3>
            <p>Bitcoin, PlayStation 5, Smartphones, Donald Trump..</p>
            <h3 className="italic">Try Saying:</h3>
            <p className="italic">What\'s up with PlayStation 5 </p>
        </div>
        <div className="flex flex-col rounded-lg shadow-md  w-full m-6 text-center hover:bg-purple-600 transition-all duration-500 cursor-pointer sm:w-52 py-4 bg-purple-500 md:w-1/4">
            <h3 className="mb-4">News by Sources</h3>
            <h3 className="font-bold">Sources:</h3>
            <p>CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...</p>
            <h3 className="italic">Try Saying:</h3>
            <p className="italic">Give me the news from CNN</p>
        </div>
      </div>
    </div>
    );
};

export default SearchInfo;
