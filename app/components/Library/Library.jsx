"use client"
import React from "react";
import CampusMap from "../CampusMap/CampusMap";
import SliderMain from "../SliderMain/SliderMain";
import Counter from "@/app/components/Counter";

export default function Library() {
  const images = ["/lib.jpg"];
  return (
    <>
      <SliderMain images={images} heading="gcfbdhsnjk" />
      <CampusMap
        heading2="Our buildings"
        paragraph2="The Homeopathy Library at NSHMC serves as a valuable resource for students, faculty, and practitioners, offering a vast collection of books, journals, and research papers dedicated to the study of homeopathy and related medical sciences. The library houses classic works by pioneers like Samuel Hahnemann, James Tyler Kent, and Constantine Hering, alongside modern publications that explore the latest advancements in homeopathic medicine.In addition to an extensive range of materia medica, repertories, and clinical case studies, the library provides access to digital resources, research databases, and journals to support both academic study and research. With comfortable reading spaces and research-friendly environments, the Homeopathy Library is an essential hub for deepening knowledge and fostering a lifelong dedication to learning in the field of homeopathy"
        img2="/lib.jpg"
        heading1="Our buildings"
        paragraph1="The Homeopathy Library at NSHMC serves as a valuable resource for students, faculty, and practitioners, offering a vast collection of books, journals, and research papers dedicated to the study of homeopathy and related medical sciences. The library houses classic works by pioneers like Samuel Hahnemann, James Tyler Kent, and Constantine Hering, alongside modern publications that explore the latest advancements in homeopathic medicine.In addition to an extensive range of materia medica, repertories, and clinical case studies, the library provides access to digital resources, research databases, and journals to support both academic study and research. With comfortable reading spaces and research-friendly environments, the Homeopathy Library is an essential hub for deepening knowledge and fostering a lifelong dedication to learning in the field of homeopathy."
        img1="/lib.jpg"
      />
     <section className=" w-11/12 mx-auto mt-10">
        <div className=" w-8/9 rounded-t-md  sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1  justify-center items-center   dark:bg-dpurple   bg-blue-400">
          <div className="  ">
            <Counter
              initialValue={0}
              targetValue={2000}
              speed={0.001}
              text="Highest Package"
              textColor="text-blue-600"
              title="First Counter"
              color=""
            />
          </div>
          <div className=" ">
            <Counter
              initialValue={20}
              targetValue={100}
              speed={100}
              text="Dream Company Offers"
              textColor="text-green-700"
              title="Second Counter"
              color=""
            />
          </div>
          <div className="">
            <Counter
              initialValue={5}
              targetValue={15}
              speed={200}
              text="Placements Batch 22-23"
              textColor=""
              title="Third Counter"
              color=""
            />
          </div>
          <div className="">
            <Counter
              initialValue={5}
              targetValue={15}
              speed={200}
              text="LNCTians Serving MNC"
              textColor="text-red-600"
              title="Third Counter"
              color=""
            />
          </div>
        </div>
        <div className=" rounded-b-md   sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1  justify-center items-center   dark:bg-dpurple  mb-12 bg-blue-400">
          <div className=" ">
            <Counter
              initialValue={0}
              targetValue={2000}
              speed={0.001}
              text="NIRF All India Rank"
              textColor="text-blue-600"
              title="First Counter"
              color=""
            />
          </div>
          <div className=" ">
            <Counter
              initialValue={20}
              targetValue={100}
              speed={100}
              text="Companies Visited 2022"
              textColor="text-green-700"
              title="Second Counter"
              color=""
            />
          </div>
          <div className="">
            <Counter
              initialValue={5}
              targetValue={15}
              speed={200}
              text="Offers For Core Branch"
              textColor="text-red-600"
              title="Third Counter"
              color=""
            />
          </div>
          <div className="">
            <Counter
              initialValue={5}
              targetValue={15}
              speed={200}
              text="Ph.D Faculties"
              textColor="text-red-600"
              title="Third Counter"
              color=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
