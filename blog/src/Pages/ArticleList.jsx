import React from "react";
import articleContent from "./articleContent";


import Articless from "../Components/Articless";

const ArticleList = () => {
  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900 ">
        List Of Articles
      </h1>

      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap m-4">
     
     <Articless articles={articleContent} />

        </div>
      </div>
    </div>
  );
};

export default ArticleList;
