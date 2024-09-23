import React from 'react'
import SliderMain from '@/app/components/SliderMain/SliderMain'
import FacultyCard from '../FacultyCard/FacultyCard';
import Image from 'next/image';
import RuleCard from '../RuleCard/RuleCard';

export default function Rules_Regulations() {
    const images = ["/ar-3.jpg"];
  return (
    <div>
     <SliderMain images={images} heading="College Magazine"/>
     <div className="w-full mx-auto flex relative">
        <div className="w-2/3 px-10 pt-[36px]  grid grid-cols-3  gap-5 justify-evenly pb-10 ">
        <RuleCard bgcolor="bg-red-200" link="https://drive.google.com/file/d/1e8q1DcvtwuYlPLY9etr-_Kw7a1Tbs7wZ/view?usp=sharing" heading="Homeo Shree 76th Edition"/>
        <RuleCard bgcolor="bg-green-200" link="https://drive.google.com/file/d/1VD26bzuBWZo_9TIPM2UXdSK50DN__ddF/view?usp=sharing" heading="Homeo Shree 77th Edition"/>
        <RuleCard bgcolor="bg-gray-200" link="https://drive.google.com/file/d/1h_iDrLyGuuyllxGQ_YY6J-MFC9kVXrf6/view?usp=sharing" heading="Homeo Shree 78th Edition"/>
        <RuleCard bgcolor="bg-blue-200" link="https://drive.google.com/file/d/1w1CS6wNibnH83XPirTSlU1KKpz415RjD/view?usp=sharing" heading="Homeo Shree 79th Edition"/>
        <RuleCard bgcolor="bg-pink-200" link="/" heading="Uploading soon"/>
        <RuleCard bgcolor="bg-purple-200" link="/" heading="Uploading soon"/>
        <RuleCard bgcolor="bg-lime-200" link="/" heading="Uploading soon"/>
        <RuleCard bgcolor="bg-blue-200" link="/" heading="Uploading soon"/>
      
        
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 p-10 ">
        <div className="relative h-full ">
              <Image
                src="/welcome.jpeg"
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
        </div>
      </div>
    </div>
    
  )
}
