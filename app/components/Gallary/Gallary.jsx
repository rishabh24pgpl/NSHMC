import React from "react";
import CulturalCard from "./CulturalCard";

export default function Gallary() {
  return (
    <div>
      <div class=" mt-2 grid grid-cols-3 gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          ></img>
        </div>
      </div>

      {/* <div className=" w-11/12 mx-auto p-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {[
           2, 3, 4, 5, 6, 7, 8, 1,9, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        ].map((index) => (
          <CulturalCard key={index} img={index}/>
          
        ))}
      </div>
    </div> */}
    </div>
  );
}
