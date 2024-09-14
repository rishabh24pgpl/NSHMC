"use client";
import Image from "next/image";
import React from "react";
import Counter from "@/app/components/Counter";

export default function AcademicEngineering() {
  return (
    <>
      <div className="w-full flex h-[650px]  ">
        <div className="w-[850px] h-full flex flex-col justify-center items-center p-4 ">
          <h1 className="text-4xl font-semibold flex items-center text-blue-600 ">
            Homeopathy at NSHMC Bhopal
          </h1>
          <p className="text-black text-justify pt-2">
            {" "}
            NSHMC emphasizes a holistic approach to healthcare, teaching students to treat patients as whole individuals rather than just addressing their symptoms. The college fosters a deep understanding of how physical, mental, and emotional states are interconnected, and how homeopathic treatments can bring balance to all aspects of health. Through rigorous academic training and practical, hands-on experience in the colleges hospital and outpatient department, students develop the clinical skills necessary to assess, diagnose, and treat patients using individualized homeopathic care.
            What sets NSHMC apart is its commitment to bridging traditional homeopathic principles with modern healthcare needs. The faculty at NSHMC is composed of experienced practitioners and educators who are dedicated to preparing students for successful careers as homeopathic professionals. The colleges focus on research and innovation in homeopathy also provides students with opportunities to contribute to the advancement of the field, ensuring that graduates are well-equipped to meet the evolving healthcare challenges of todays world.
          </p>
        </div>
        <div className="w-full  relative -z-10 ">
          {" "}
          <Image src="/mainImg.jpeg" alt="img" fill />
        </div>
      </div>
      {/* <h1 className="text-3xl bg-blue-600 p-6  text-white "> DEPARTMENT</h1>
      <div className="w-full grid grid-cols-3 justify-around   bg-blue-600 p-4">
        <div className="mx-auto p-4">
          <Image src="/bme.png" alt="img" width={80} height={80} />
          <h1 className="text-xl font-semibold w-80 ">
            Department of Organon of Medicine
          </h1>
        </div>
        <div className="mx-auto p-4">
          <Image src="/bme.png" alt="img" width={80} height={80} />
          <h1 className="text-xl font-semibold w-80 ">
            Department of Materia Medica & Therapeutics
          </h1>
        </div>
        <div className="mx-auto p-4">
          <Image src="/ce-icon.png" alt="img" width={100} height={100} />
          <h1 className="text-xl font-semibold w-80 ">
            Department of Forensic Medicine & Toxicology
          </h1>
        </div>
        <div className="mx-auto p-4">
          <Image src="/cse.png" alt="img" width={100} height={100} />
          <h1 className="text-xl font-semibold w-80 ">
            Department of Community Medicine
          </h1>
        </div>
        <div className="mx-auto p-4">
          <Image src="/civil.png" alt="img" width={100} height={100} />
          <h1 className="text-xl font-semibold w-80 ">
          Department of Physiology & BioChemistry
          </h1>
        </div>
        <div className="mx-auto p-4">
          <Image src="/me.png" alt="img" width={100} height={100} />
          <h1 className="text-xl font-semibold w-80 ">
            Department of Obstretics & Gynecology
          </h1>
        </div>
        <div className="mx-auto p-4">
          <Image src="/ee.png" alt="img" width={100} height={100} />
          <h1 className="text-xl font-semibold w-80 ">
        Department of Pathology & Microbiology
          </h1>
        </div>
        <div className="mx-auto p-4">
          <Image src="/ee.png" alt="img" width={100} height={100} />
          <h1 className="text-xl font-semibold w-80 ">
        Department of Practice of Medicine
          </h1>
        </div>
        <div className="mx-auto p-4">
          <Image src="/ee.png" alt="img" width={100} height={100} />
          <h1 className="text-xl font-semibold w-80 ">
        Department of Repertory
          </h1>
        </div>
        <div className="mx-auto p-4">
          <Image src="/ee.png" alt="img" width={100} height={100} />
          <h1 className="text-xl font-semibold w-80 ">
        Department of Pharmacy
          </h1>
        </div>
        <div className="mx-auto p-4">
          <Image src="/ee.png" alt="img" width={100} height={100} />
          <h1 className="text-xl font-semibold w-80 ">
        Department of Anatomy
          </h1>
        </div>
        <div className="mx-auto p-4">
          <Image src="/ee.png" alt="img" width={100} height={100} />
          <h1 className="text-xl font-semibold w-80 ">
        Department of Surgery
          </h1>
        </div>
      </div> */}
      {/* <section>
        <div className=" flex flex-col justify-center  mx-auto items-center p-10">
          <h1 className="text-blue-600 font-light  text-center  text-4xl">
            Engineering @ NITR at a glance
          </h1>
        </div>
        <div className="w-11/12 mx-auto  rounded-full   sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1 gap-5  justify-center items-center   dark:bg-dpurple  mb-12">
          <div className=" ">
            <Counter
              initialValue={0}
              targetValue={2000}
              speed={0.001}
              text="Seed"
              textColor="text-blue-600"
              title="First Counter"
              color="bg-[#bd5638]"
            />
          </div>
          <div className=" ">
            <Counter
              initialValue={20}
              targetValue={100}
              speed={100}
              text="Seed"
              textColor="text-green-700"
              title="Second Counter"
              color="bg-[#5a3224]"
            />
          </div>
          <div className="">
            <Counter
              initialValue={5}
              targetValue={15}
              speed={200}
              text="Seed"
              textColor="text-red-600"
              title="Third Counter"
              color="bg-[#223250]"
            />
          </div>

          <div className="">
            <Counter
              initialValue={5}
              targetValue={15}
              speed={200}
              text="Seed"
              textColor="text-red-600"
              title="Third Counter"
              color="bg-[#22472d]"
            />
          </div>
        </div>
      </section> */}
      <div className=" flex flex-col justify-center  mx-auto items-center p-10">
        <h1 className="text-blue-600 font-light  text-center  text-4xl">
        The physician&apos;s highest calling, his only calling, is to make sick people healthy — to heal, as it is called.
        </h1>
        <p className="text-black text-xl">- Samuel Hahnemann (Founder of Homeopathy)</p>
      </div>
    </>
  );
}
