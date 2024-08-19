import React from 'react'
import { Link } from "react-router-dom";

const Articless = ({articles}) => {
  return (
    <>
             {articles.map((article, index) => (
            <div key={index} className="p-4 md:w-1/2">
              <div
                className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg
              overflow-hidden"
              >
                <Link to={`/article/${article.name}`}>
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover"
                    src={article.thumbnail}
                    alt="article"
                  />
                </Link>

                <div className="p-4">
                  <Link key={index} to={`/article/${article.name}`}>
                    <h1 className="text-lg font-medium text-gray-800 mb-3">
                      {article.title}
                    </h1>
                  </Link>

                  <p className="leading-relaxed mb-3">
                    {article.content[0].substring(0,110)} ....
                  </p>

                  <div className="flex items-center flex-wrap">
                    <Link className="text-blue-600 cursor-pointer md:mb-2 lg:mb-0
                    inline-flex items-center text-base"
                     key={index} to={`/article/${article.name}`}>
                    Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </>
  )
}

export default Articless