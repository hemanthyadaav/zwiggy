import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="shimmer-card">
        {[...Array(20)].map((elementInArray, index) => (
          <article key={index}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="shimmer"></div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
