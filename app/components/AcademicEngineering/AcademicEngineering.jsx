"use client";
import Image from "next/image";
import React from "react";
import Counter from "@/app/components/Counter";

export default function AcademicEngineering() {
  return (
    <>
    <div
        className="w-full h-36 flex justify-center  items-center"
        style={{
        //   backgroundImage: "url('/logo1.png')",
        backgroundColor:"#d598d6",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Administration And Library Staff</h1>
      </div>

      <div className=" m-auto gap-[100px] mt-12 ">
        <img src="/adminlib.jpg" className="w-[500px] m-auto"></img>
      </div>
      
        
    </>
  );
}
