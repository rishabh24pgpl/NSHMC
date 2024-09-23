"use client";
import React from "react";
import { useState } from "react";

export default function OurCommittes () {
  const [collegeNameIndex, setCollegeNameIndex] = useState(0);

  const collegeNames = ["NSHMC ", "एसकेसी एलएनसीटी "];
  const[active,setActive] = useState(0);
  const buttons=[
    'Academic Committe','Anti-Ragging Committe','Anti-Sexual Harrasment Committe','CBDC Committe','College Council Committe'
  ]
  return (
    <div>
      <div
        className="w-full h-36 flex justify-center  items-center"
        style={{
        //   backgroundImage: "url('/logo1.png')",
        backgroundColor:"#d598d6",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Our Committes</h1>
      </div>
      <div className='mt-4 flex items-center gap-5'>
      {
        buttons.map((item,index)=>(
          <button onClick={()=>setActive(index)} className='border-2 p-4 rounded-lg bg-purple-500 hover:bg-purple-700' key={index}>{item}</button>
        ))
      }
      </div>
      <div className="w-full">
        {
          active===0 &&(
            <div className=" m-auto gap-[100px] mt-12 ">
        <img src="/academiccommitte.jpg" className="w-[500px] m-auto"></img>
      </div>
          )
        }
        {
          active===1 &&(
            <div className=" m-auto gap-[100px] mt-12 ">
        <img src="/antiragging.jpg" className="w-[500px] m-auto"></img>
      </div>
          )
        }
        {
          active===2 &&(
            <div className=" m-auto gap-[100px] mt-12 ">
        <img src="/antisexual.jpg" className="w-[500px] m-auto"></img>
      </div>
          )
        }
        {
          active===3 && (
            <div className=" m-auto gap-[100px] mt-12 ">
        <img src="/cbdc.jpg" className="w-[500px] m-auto"></img>
      </div>
          )
        }
        {
          active===4 && (
            <div className=" m-auto gap-[100px] mt-12 ">
        <img src="/collegecouncil.jpg" className="w-[500px] m-auto"></img>
      </div>
          )
        }
        </div>      

      
    </div>
  );
}