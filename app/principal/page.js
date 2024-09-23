import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div
        className="w-full h-36 flex justify-center  items-center"
        style={{
          // backgroundImage: "url('/logo1.png')",
          backgroundColor:"#d598d6",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">Principal</h1>
      </div>
      <div className="w-full  border-2 p-20 ">
        <div className=" flex  rounded-xl bg-purple-100">
          <div className="w-1/3 flex flex-col gap-2 bg-purple-300">
            <div className="w-full h-72 border-2 relative">
              <Image
                src="/principalns.jpg"
                alt="chairman"
                fill
                style={{ objectFit: 'fip'  }}
              />
            </div>
            <div>
              <h1 className="py-2 px-10 font-bold text-2xl">
                Dr. R. S. Agrawal{" "}
              </h1>
              <h2 className="py-2 px-10 text-lg">Principal NSHMC</h2>
              <h3 className="py-2 px-10 ">
                Principal & Hospital Superintendent{" "}
              </h3>
            </div>
          </div>
          <div className="w-2/3 p-10">
            <p className="text-sm mb-3">
              A deep sense of joy prevails in the very care of my heart to place
              this official website of Narayanshri Homoeopathic Medical college
              and hospital, Bhopal at your disposal. Narayan Shree Homoeopathic
              Medical College & Hospital is fully equipped with all facilities
              in both academic as well as in clinical side. We are providing
              best education and clinical training by eminent and specialized
              physicians and teachers of various fields eg. Homoeopathy, Modern
              Medicine, Surgery, Gynaecology, ENT, Ophthalmology etc. Our
              institute is having well equipped hospital and research centre and
              we are providing free consultation and medication to the poor
              patients. Our main aim is to take initiative to give a platform to
              budding homoeopaths to enrich and enhance the knowledge base and
              at the same time strengthen the skill sets with the latest
              development in medical science. This will also give a platform to
              reach out to the society and impart best of the health care and
              awareness to the society. The popularity of this institute has
              grown over the years and today it is one of the pioneer
              homoeopathic institutions in the state of Madhya Pradesh. This is
              due to the continuous support of the CCH, Government of M.P. and
              Barkatullah university, as well as, continuous teamwork of the
              institution’s faculty, staff, students. In last, I welcome you to
              join us, I hope that you will take this institution a long way
              with the helpful hands of Homoeopathy fraternity.
            </p>
            
              <p className="text-sm mb-3">Warm regards,</p>
              <p className="text-sm mb-3 font-bold">DR.R.S. Agrawal</p>
              <p className="text-sm mb-3">Principal</p>
              <p className="text-sm mb-3">NSHMC</p>
            
          </div>
        </div>
      </div>
    </>
  );
}
