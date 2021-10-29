import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import SearchInfo from "../SearchInfo/SearchInfo";
import { Link } from "react-router-dom";

const NewsCards = ({ articles, activeArticle }) => {
  if (!articles.length) {
    return (
      <>
        <div className="p-8 bg-gray-600">
          <Link
            className="bg-purple-500 py-2 px-2 text-white rounded sm:text-center"
            to="/"
          >
            Go Back To Home Page{" "}
          </Link>
        </div>
        <SearchInfo />
      </>
    );
  }
  return (
    <div>
      <div className="mb-0 p-3  bg-gray-800">
        <div className="m-5">
          <Link to="/" className="bg-purple-500 py-2 px-2 text-white rounded">
            Go back to Homepage
          </Link>
        </div>
        <div className="bg-purple-500 m-4 p-5 text-white">Try saying : Open article 3 , Go back , How's the Wheather in Mumbai <br />Search News , Wheather . </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-8 border-4 p-10 bg-gray-800">
        {articles.map((article, i) => (
          <div className="lg:w-full  bg-gray-200 rounded-lg  shadow-md hover:bg-gray-300 transition-all duration-200">
            <NewsCard key={article.url} article={article} activeArticle={activeArticle} i={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCards;
