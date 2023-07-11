import React from "react";

const Shimmer = () => {
  return (
    <>
      <section class="text-gray-400 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {[...Array(15)].map((elementInArray, index) => (
              <div class="p-4 md:w-1/5">
                <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                  <div class="lg:h-48 bg-gray-300 md:h-20 w-full object-cover object-center"></div>
                  <div class="p-6">
                    <h2 class="bg-gray-300 animate-pulse h-4 w-1/4 mb-2"></h2>
                    <p class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-300"></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shimmer;
