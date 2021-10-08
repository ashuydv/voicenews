import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import SearchInfo from "../SearchInfo/SearchInfo";
import { Link } from "react-router-dom";

const NewsCards = ({ articles ,activeArticle }) => {
  if (!articles.length) {
    return (
      <>
        <div className="mb-4 p-3">
          <Link className="bg-purple-500 py-2 px-2 text-white rounded" to="/">Go Back To Home Page </Link>
        </div>
        <SearchInfo />
      </>
    );
  }
  return (
    <div>
      <div className="mb-4 p-3">
        <Link to="/" className="bg-purple-500 py-2 px-2 text-white rounded">Go back</Link>
        <div>
          Instructions... 
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-8 border-4 p-10 bg-gray-800">
        {articles.map((article, i) => (
          <div className="lg:w-full  bg-gray-200 rounded-lg  shadow-md hover:bg-gray-300 transition-all duration-200">
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCards;
