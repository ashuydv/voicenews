import React from "react";
import NewsImage from "../../images/news_default.jpg";
import "./NewsCard.css";
import { useState, useEffect, createRef } from "react";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
  activeArticle,
}) => {
  const [eleRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && eleRefs[activeArticle]) {
      scrollToRef(eleRefs[activeArticle]);
    }
  }, [i, activeArticle, eleRefs]);

  return (
    <div
      className={
        "card h-full hover:bg-gray-300 transition-all duration-200 " +
        (activeArticle === i ? "activeCard" : null)
      }
      ref={eleRefs[i]}
    >
      <div>
        <img
          alt="News Thumbnail"
          className="rounded-t-lg h-auto"
          src={urlToImage || NewsImage}
        />
      </div>
      <div>
        <div className="details">
          <div>{new Date(publishedAt).toDateString()}</div>
          <div className="text-red-600">{source.name}</div>
        </div>

        <div className="rounded-lg">
          <div>
            <div className="title font-bold text-xl px-3 ">{title}</div>
            <div className="px-3">{description}</div>
          </div>

          <div className="cardActions mt-4">
            <a
              className="bg-purple-500 text-white py-1 px-2 rounded-md hover:bg-purple-600 transition-all duration-200"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
            <span className="numberCircle">{i + 1}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
