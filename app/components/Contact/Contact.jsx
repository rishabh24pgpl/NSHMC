import React from "react";
import SliderMain from "../SliderMain/SliderMain";
import Image from "next/image";
import RelatedLink from "../RelatedLink/RelatedLink";

import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa";
import { IoMdTrain } from "react-icons/io";
import { IoAirplane } from "react-icons/io5";
import Link from "next/link";

export default function Contact() {
  const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];
  

  return (
    <>
      <SliderMain images={images} heading="Contact Us" />

      <div className="w-full mx-auto flex relative">
        <div className="w-2/3 px-10 pt-[36px] ">
          <div className="w-full  flex gap-4 justify-between  p-2 items-center">
            <div className=" w-64 h-20  p-2 flex gap-3 rounded-lg bg-gray-100">
              <div className=" flex justify-center items-center">
                <FaLocationDot
                  size={50}
                  className=" text-blue-400 bg-white rounded-full  p-2 "
                />
              </div>
              <div className=" flex  flex-col">
                <h1 className="text-black text-lg font-semibold capitalize">
                  Address
                </h1>
                <h2 className=" text-xs">
                Pushpa Nagar, Near Main Railway Station, Bhopal-10, Madhya Pradesh
                </h2>
              </div>
            </div>
            <div className=" w-64 h-20  p-2 flex gap-3 rounded-lg bg-gray-100">
              <div className=" flex justify-center items-center">
                <MdEmail
                  size={50}
                  className=" text-blue-400 bg-white rounded-full  p-2 "
                />
              </div>
              <div className=" flex  flex-col">
                <h1 className="text-black text-lg font-semibold capitalize">
                  Email
                </h1>
                <h2 className=" text-xs">nshmcbpl@gmail.com</h2>
              </div>
            </div>
            <div className=" w-64 h-20  p-2 flex gap-3 rounded-lg bg-gray-100">
              <div className=" flex justify-center items-center">
                <FaHeadphones
                  size={50}
                  className=" text-blue-400 bg-white rounded-full  p-2 "
                />
              </div>
              <div className=" flex  flex-col">
                <h1 className="text-black text-lg font-semibold capitalize">
                  Phone Number
                </h1>
                <h2 className=" text-xs">+91 94244 54311 | 0755-2753451</h2>
              </div>
            </div>
          </div>
          <div className="w-full   ">
            <div className="w-full ">
            <Link target="_blank" href="https://www.google.co.in/maps/place/Narayan+Shri+Homeopathic+Hospital/@23.264404,77.4195659,17z/data=!4m15!1m8!3m7!1s0x397c682de90d4015:0x2f5815f2c2865870!2sNarayan+Shri+Homeopathic+Hospital!8m2!3d23.2644572!4d77.4195395!10e5!16s%2Fg%2F1hm2db1zr!3m5!1s0x397c682de90d4015:0x2f5815f2c2865870!8m2!3d23.2644572!4d77.4195395!16s%2Fg%2F1hm2db1zr?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D">
            <Image
            src="/map.png" alt='map' width={500} height={500} className=" w-full " 
            />
            </Link>
            </div>
            {/* <div className="w-1/2  bg-gray-100 p-2">
              <h1 className="p-2 text-black font-semibold text-xl my-3 ">
                How to Reach NSHMC
              </h1>

              <div className="w-full  p-2 bg-gray-50 my-2">
                <div className="flex p-3 gap-5 items-center">
                  <FaRoad
                    size={60}
                    className=" text-blue-400 rounded-full border-8 p-2 border-blue-400 bg-white"
                  />
                  <h1 className=" font-semibold text-xl ">By Train</h1>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque corporis nobis nemo perspiciatis laborum aut quod
                    voluptates velit impedit, ea distinctio facilis ratione.
                  </p>
                </div>
              </div>
              <div className="w-full  p-2 bg-gray-50 my-2">
                <div className="flex p-3 gap-5 items-center">
                  <IoMdTrain
                    size={60}
                    className=" text-blue-400 rounded-full border-8 p-2 border-blue-400 bg-white"
                  />
                  <h1 className=" font-semibold text-xl ">By Air</h1>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque corporis nobis nemo perspiciatis laborum aut quod
                    voluptates velit impedit, ea distinctio facilis ratione.
                  </p>
                </div>
              </div>
              <div className="w-full  p-2 bg-gray-50 my-2">
                <div className="flex p-3 gap-5 items-center">
                  <IoAirplane
                    size={60}
                    className=" text-blue-400 rounded-full border-8 p-2 border-blue-400 bg-white"
                  />
                  <h1 className=" font-semibold text-xl ">By Road</h1>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque corporis nobis nemo perspiciatis laborum aut quod
                    voluptates velit impedit, ea distinctio facilis ratione.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="w-full flex justify-center items-center p-4">
            <table className="">
              <thead>
                <tr>
                  <th className="border p-3">City</th>
                  <th className="border p-3">
                    Rail Distance To Reach NSHMC / Journey time
                  </th>
                  <th className="border p-3">
                    Road distance To Reach NSHMC / Journey time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border py-2 px-2">Indore</td>
                  <td className="border py-2 px-2">150+ kms , 4-5hrs</td>
                  <td className="border py-2 px-2">193.7 km, 4-5hrs</td>
                </tr>
                <tr>
                  <td className="border py-2 px-2">Gwalior</td>
                  <td className="border py-2 px-2">415 Km, 4-5hrs</td>
                  <td className="border py-2 px-2">432.8 km, 7 hr 56 min</td>
                </tr>
                <tr>
                  <td className="border py-2 px-2">Dewas</td>
                  <td className="border py-2 px-2">150+ kms, 3 hr 41 min</td>
                  <td className="border py-2 px-2">153.6 km, 2 hr 56 min </td>
                </tr>
                <tr>
                  <td className="border py-2 px-2">Ujjain</td>
                  <td className="border py-2 px-2">183 kma,4 hr 14 min</td>
                  <td className="border py-2 px-2">192.2 km, 3 hr 45 min </td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 py-10 ">
          <div className="relative h-full ">
            <RelatedLink />
          </div>
        </div>
      </div>
    </>
  );
}
