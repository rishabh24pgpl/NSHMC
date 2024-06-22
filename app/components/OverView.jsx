"use client"
import CampusMap from "@/app/components/CampusMap/CampusMap";
import Gallary from "@/app/components/Gallary/Gallary";
import { ParallaxScroll } from "@/app/components/ParallaxScroll/ParallaxScroll";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function OverView() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 1300); // Adjust the interval as needed (currently set to 5000 milliseconds or 5 seconds)
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];
  const imagess = [
    "/speaker.JPG",
    "/award.JPG",
    "/principals.JPG",
    "/award2.jpg",
    "/grp.JPG",
    "/Sports.jpg",
    "/lnct-awards.jpg",
    "/lnct-sports.jpg",
    "/lnct-stunt.jpg",
    "/ar-1.jpg",
    "/lnct-awards2.jpg",
    "/ar-3.jpg",
    "/ar-1.jpg",
    "/ar-2.jpg",
    "/ar-3.jpg",
    "/ar-1.jpg",
    "/ar-2.jpg",
    "/ar-3.jpg",
    "/ar-1.jpg",
    "/ar-2.jpg",
    "/ar-3.jpg",
    "/ar-1.jpg",
    "/ar-2.jpg",
    "/ar-3.jpg",
  ];
  return (
    <>
    
      <div className="w-full flex h-[650px]  ">
        <div className="w-[850px] h-full flex flex-col justify-center items-center p-4 ">
          <Image src="/LNMC-BPL.png" width={150}
          height={150} />
          <h1 className="text-4xl font-semibold flex items-center text-purple-600 ">
           Overview of NSHMC Bhopal
          </h1>
          <p className="text-black text-justify pt-2">
            {" "}
            NIT Rourkela is one of the institutes of national importance under
            Ministry of Education, Government of India. Government of India has
            elevated the Regional Engineering College, Rourkela to an autonomous
            institution under the name of National Institute of Technology,
            Rourkela.
          </p>
        </div>
        <div className="w-full   overflow-hidden ">
          {" "}
          <div className="md:w-full lg:w-full sm:w-full w-full flex justify-center items-center ">
       
        <Image
          className="duration-500 w-full min-h-[330px] max-h-[730px]"
          src={images[currentSlide]}
          alt={"images"}
          width={700}
          height={650}
        />
      </div>
        </div>
      </div>
     
      <div className=" w-11/12 mx-auto mt-10">
        <ParallaxScroll images={imagess} />
      </div>
    </>
  );
}
