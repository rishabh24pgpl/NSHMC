"use client";
import React ,{useState}from "react";
import SliderMain from "../SliderMain/SliderMain";
import Image from "next/image";
import Counter from "@/app/components/Counter";
import DeptCounter from "../DeptCounter/DeptCounter";
import ProgramCard from "../ProgramCard/ProgramCard";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Slider from "../Slider/Slider";
import { head } from "lodash";
import Curriculumn from "../Curriculumn/Curriculumn";


export default function DeptEr({ dept }) {
  const images = ["/ar-3.jpg"];
  const counter = [
    {
      title: "undergraduate students",
      value: "120",
      textColor: "text-red-600",
      color: "bg-red-500",
      speed: "40",
    },
    {
      title: "postgraduate students",
      value: "60",
      textColor: "text-red-600",
      color: "bg-purple-500",
      speed: "35",
    },
    {
      title: "doctoral students",
      value: "30",
      textColor: "text-red-600",
      color: "bg-pink-500",
      speed: "30",
    },
    {
      title: "recent job offers",
      value: "300",
      textColor: "text-red-600",
      color: "bg-yellow-500",
      speed: "30",
    },
    {
      title: "faculties",
      value: "60",
      textColor: "text-red-600",
      color: "bg-teal-500",
      speed: "30",
    },
  ];

  let headD;
  let headImg;
  let phoneHead;
  let emailHead;
  let faculties;
  let aboutDept;
  let deptImg;
  let slogan;
  let author;
  let experience;
  let degree;
  switch (dept) {
    case "me":
      slogan = "Empowering Healers with the Timeless Principles of Homeopathy.";
      author = "Dr.Sandeep Jha";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Organon of Medicine at NSHMC is the cornerstone of homeopathic education, focusing on the fundamental principles and philosophy of homeopathy as laid out by its founder, Samuel Hahnemann. This department delves into the study of the Organon, which serves as the guiding text for understanding the laws of nature in health and disease, and how to apply them for holistic healing. Through a combination of theoretical instruction and practical application, students are trained to develop a deep understanding of patient-centered care and the science of individualized treatment. The department fosters critical thinking and a compassionate approach, ensuring that future homeopaths are well-versed in both the philosophy and practice of this profound healing system";
      dept = "Organon of Medicine";
      headD = "Dr.Sandeep Jha";

      headImg = "/sandeepjha.jpg";
      phoneHead = "+91 9303132274";
      emailHead = "drsandeepjha@hotmail.com";
      degree = "DHMS, BHMS, M.D. (Hom)/ 10020"
      experience = '33 years & 8 months/ F.T.';
      faculties = [
        {
          name: "Dr. Anupama Jaiswal",
          position: "Associate Professor",
          degree: "BHMS, M.D. (Hom.)/ 15865",
          experience: "9 years & 7 months/ F.T.",
          email: 'dr.praveenjaisal@gmail.com',
          image: "/anupamajaiswal.jpg"
        },
        {
          name: "Dr. Priyanka Tiwari",
          position: "Assistant Professor",
          degree: "BHMS, M.D (Hom.)/ 17037",
          experience: "1 year & 1 months/ F.T.",
          email: "drpriyanka55555@gmail.com",
          image: "/priyanakatiwari.jpeg"
        },
       
        // Add more faculty members as needed
      ];

      break;
    case "cse":
      slogan = "Unlocking the Science of Cure through the Laws of Health";
      author = "Dr. Neelam Sharma";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Materia Medica at NSHMC is dedicated to the study of homeopathic remedies and their therapeutic applications. This department provides students with a comprehensive understanding of the origins, properties, and clinical uses of various homeopathic medicines. Through both theoretical instruction and case-based learning, students are trained to accurately match remedies to specific symptoms, tailoring treatments to individual patients. The department emphasizes a deep knowledge of remedies, enabling future practitioners to make informed, effective choices in patient care, fostering a holistic and individualized approach to healing.";
      dept = "Materia Medica And Therapeutics";
      headD = "Dr. Neelam Sharma";
      headImg = "/neelamsharma.jpg";
      phoneHead = "+91 9993375073";
      emailHead = "drneelamsharma01@gmail.com";
      degree="MD (Hom.)/11385",
      experience="16 years/F.T."
      faculties = [
        {
          name: "Dr. Megha Mungaria",
          position: "Assistant Professor",
          degree: "MD (Hom.)/21869",
          experience: "3 years 3 month/F.T.",
          email: "meghamungaria@gmail.com",
          image: "/megha.jpg"
        },
        // {
        //   name: "MS. SHARSHTI ATRE",
        //   position: "Assistant Professor",
        //   degree: "MSc",
        //   experience: "3 years",
        // },
        // {
        //   name: "Ms. MAMTA GEHLOT",
        //   position: "Assistant Professor",
        //   degree: "M.E.",
        //   experience: "1 years",
        // },
        // Add more faculty members as needed
      ];

      break;
    case "ece":
      slogan = "Foundation of Homeopathic Wisdom, Leading to Holistic Wellness.";
      author = "Dr. Farook Mohd. Khan";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Forensic Medicine and Toxicology at NSHMC equips students with the knowledge and skills to understand the medical and legal aspects of healthcare. This department focuses on the study of medical jurisprudence, the investigation of unnatural deaths, and the effects of toxic substances on the human body. Students are trained to apply forensic principles in analyzing injuries, poisons, and criminal cases, while also understanding their legal implications. With a strong emphasis on ethical practices and accuracy, the department plays a critical role in preparing students to contribute to both healthcare and the justice system.";
      dept = "Forensic Medicine And Toxicology";
      headD = "Dr. Farook Mohd. Khan";
      headImg = "/farook.jpg";
      phoneHead = "+91 9425451532";
      emailHead = "k.farooq2012@gmail.com";
      degree="DHMS/11769";
      experience="25 years & 5 months/F.T."
      faculties = [
        {
          name: "Dr. Avaneesh Kumar Pandey",
          position: "Assistant Professor",
          degree: "BHMS, MD (Hom.)/ 23080",
          experience: "3 Years & 3 months/ F.T.",
          email:"dr.avaneesh1@gmail.com",
          image:"/Avaneesh.jpg"
        },
        // {
        //   name: "Jane Smith",
        //   position: "Data Scientist",
        //   degree: "Masters in Data Science",
        //   experience: "3 years",
        // },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        // },
        // Add more faculty members as needed
      ];

      break;
    case "eet":
      slogan = "Foundation of Homeopathic Wisdom, Leading to Holistic Wellness.";
      author = "Dr. Garima Namdev";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Community Medicine at NSHMC focuses on the health and well-being of populations, emphasizing preventive healthcare, public health initiatives, and health education. This department trains students to understand the social, environmental, and behavioral factors that influence health, aiming to promote disease prevention and improve community health outcomes. Through fieldwork, research, and community engagement, students learn to assess health needs, plan interventions, and implement public health programs. The department is committed to producing healthcare professionals who are skilled in addressing the broader determinants of health and making a positive impact on public health at both local and globally.";
      dept = "Communtiy Medicine";
      headD = "Dr. Garima Namdev";
      headImg = "/garima.jpg";
      phoneHead = "+91 8889150998";
      emailHead = "namdevgarima50@gmail.com";
      degree="M.B.B.S. M.D. (C.M.) /9154",
      experience="13 years & 7 months/ G.F."
      faculties = [
        {
          name: "Dr. Shoeba Perveen",
          position: "Associate  Professor",
          degree: "BHMS, M.D. (Hom.)/ 22445",
          experience: "4 year & 6 months/F.T.",
          email: "drshoebaali1991@gmail.com",
          image: "/shoeba.jpg"
        },
        {
          name: "Dr. Bhumika Gangwani",
          position: "Assistant Professor",
          degree: "BHMS, M.D. (Hom.)/ H038739",
          experience: "1 year/F.T.",
          email: "bhumibhms2605@gmail.com",
          image: "/bhumika.jpg"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        // },
        // Add more faculty members as needed
      ];

      break;
    case "it":
      slogan = "Unlocking the Secrets of Health Through Physiology and Biochemistry.";
      author = "Dr. Shail Jain";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Physiology & Biochemistry at NSHMC provides a foundational understanding of the human body’s functions and chemical processes. Physiology explores how various systems and organs work together to maintain health, while Biochemistry focuses on the molecular mechanisms that underlie these functions. Through interactive lectures, lab work, and research, students gain in-depth knowledge of essential processes like metabolism, cellular function, and hormonal regulation.These disciplines are critical in understanding how the body responds to health challenges and treatment, making them central to both homeopathic and conventional medical education. The department fosters a comprehensive, integrative approach, equipping students with the knowledge and skills to understand health at both the systemic and molecular levels.";
      dept = "Physiology & BioChemistry";
      headD = "Dr. Shail Jain";
      headImg = "/shailjain.jpg";
      phoneHead = "+91 9893269251";
      emailHead = "drshailjain@yahoo.com";
      degree="MBBS/8905",
      experience="22 years/ F.T."
      faculties = [
        {
          name: "Dr. Naveen Jaggi",
          position: "Associate Professor",
          degree: "DHMS, BHMS(Graded)/13720",
          experience: "20 years & 11 months/ F.T.",
          email: "dr.naveenjaggi@gmail.com",
          image: "/naveen.jpg"
        },
        {
          name: "Dr. Rajani Suryawanshi",
          position: "Associate Professor",
          degree: "DHMS, M.D. (Hom.)/13218",
          experience: "6 years & 4  months/F.T.",
          email: "rajanishakya302@gmail.com",
          image: "/rajani.jpg"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;
    case "og":
      slogan = "Guiding Safe Journeys from Motherhood to Womanhood.";
      author = "Dr. Rinku Bhaskar";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Obstetrics & Gynaecology at NSHMC is dedicated to the comprehensive study of women's health, focusing on pregnancy, childbirth, and the reproductive system. The department provides students with both theoretical knowledge and practical skills in managing pregnancy, labor, and postpartum care, as well as diagnosing and treating gynecological disorders. With a strong emphasis on maternal and fetal health, students are trained in both preventive and curative care, ensuring they are well-prepared to support women through all stages of life.Through hands-on clinical training, interactive learning, and research opportunities, the department equips future practitioners with the expertise to deliver compassionate, patient-centered care. The holistic approach integrates modern medical practices with homeopathic principles, fostering a well-rounded understanding of women’s health.";
      dept = "Obstretics & Gynaecology";
      headD = "Dr. Rinku Bhaskar";
      headImg = "/rinku.jpg";
      phoneHead = "+91 9425339648";
      emailHead = "nshmcbpl@gmail.com";
      degree="MBBS, DGO/5486",
      experience="13 years & 9 months/ G.F."
      faculties = [
        {
          name: "Dr. Prerna Tiwari",
          position: "Associate Professor",
          degree: "BHMS, M.D. (Hom.)/ 22406",
          experience: "5 years/ F.T.",
          email: "prernaghmc@gmail.com",
          image: "/prerna.jpg"
        },
        {
          name: "Dr. Niharika Prahladi",
          position: "Assistant Professor",
          degree: "BHMS, M.D. (Hom)/ 24219",
          experience: "8 months/ F.T.",
          email: "niharikasinghharshana@gmail.com",
          image: "/niharika.jpg"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;
    case "pm":
      slogan = "Where Pathology Meets Microbiology: Understanding Health from Every Angle.";
      author = "Dr. Ritesh Kumbhare";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Pathology & Microbiology at NSHMC focuses on the study of disease processes and the role of microorganisms in health and illness. Pathology involves the examination of tissues, organs, and bodily fluids to understand the nature and progression of diseases, while Microbiology explores the impact of bacteria, viruses, fungi, and parasites on human health.Students receive in-depth training in diagnostic techniques, laboratory analysis, and disease management, learning to identify and interpret pathological and microbiological findings. The department emphasizes both theoretical knowledge and practical skills, preparing students to diagnose diseases accurately and understand the microbial factors influencing health. By integrating these disciplines, the department ensures a comprehensive approach to understanding and combating diseases, essential for effective medical and homeopathic practice.";
      dept = "Pathology & Microbiology";
      headD = "Dr. Ritesh Kumbhare";
      headImg = "/ritesh.jpg";
      phoneHead = "+91 9584340592";
      emailHead = "drriteshkumbhare0909@gmail.com";
      degree="BHMS/14425",
      experience="12 years & 8 Months/ F.T."
      faculties = [
        {
          name: "Dr. Arun Maity",
          position: "Software Engineer",
          degree: "MBBS, M.D. (Pathology)/ 8836",
          experience: "14 Years 4 Months/G.F.",
          email: "N/A",
          image: "/arun.jpg"
        },
        {
          name: "Dr. Shailendra Singh",
          position: "Assistant Professor",
          degree: "MBHMS, MD (Hom.)/21037",
          experience: "3 year & 3 Months/ F.T.",
          email: "mr.shailendra@gmail.com",
          image: "/shailendra.jpg"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;
    case "pfm":
      slogan = "dfsghj slogan";
      author = "Dr. Nitesh Suryawanshi";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Practice of Medicine at NSHMC is dedicated to the application of medical knowledge and skills in diagnosing and treating a wide range of health conditions. This department focuses on integrating clinical theory with hands-on practice, emphasizing patient-centered care and evidence-based treatment approaches. Students gain practical experience through direct patient interactions, case studies, and clinical rotations, learning to apply diagnostic techniques, develop treatment plans, and manage diverse medical conditions.With a curriculum that balances foundational knowledge with real-world practice, the department prepares students to become proficient, compassionate practitioners. The emphasis is on developing clinical reasoning, decision-making skills, and the ability to provide holistic care that addresses both physical and emotional aspects of patient health.";
      dept = "Practice of Medicine";
      headD = "Dr. Nitesh Suryawanshi";
      headImg = "/nitesh.jpg";
      phoneHead = "+91 9893547451";
      emailHead = "dr.niteshsuryawanshi@gmail.com";
      degree="DHMS, M.D. (Hom.)/ 13245",
      experience="20 years & 9 month/ F.T."
      faculties = [
        {
          name: "Dr. Rupesh Chandra",
          position: "Associate Professor",
          degree: "BHMS, M.D. (Hom.)/ 26582",
          experience: "13 years & 6 months/ F.T.",
          email: "drrupeshchandra@gmaill.com",
          image: "/rupesh.jpg"
        },
        {
          name: "Dr. Prachi Shrivastava Dubey",
          position: "Assistant Professor",
          degree: "BHMS, M.D. (Hom)/ 22649",
          experience: "2 Years & 9 Months/ F.T.",
          email: "prachi.prachi.27@gmail.com ",
          image: "/prachi.jpg"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;
    case "rep":
      slogan = "Navigating Symptoms to Remedies with Expertise and Insight.";
      author = "Dr. Rajendra Prasad Sharma";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Repertory at NSHMC is dedicated to the art and science of repertorization, the method of systematically matching homeopathic remedies to patient symptoms. This department provides students with comprehensive training in using homeopathic repertories, which are essential tools for selecting individualized treatments. The curriculum includes detailed study of various repertories, case analysis, and practical applications to refine students' skills in remedy selection.Students learn to navigate and interpret repertories effectively, enhancing their ability to provide precise and effective homeopathic care. The department emphasizes the integration of repertory knowledge with clinical practice, ensuring that graduates are well-prepared to offer targeted, patient-centered remedies that address unique health needs.";
      dept = "Department of Repertory";
      headD = "Dr. Rajendra Prasad Sharma";
      headImg = "/rpsharma.jpg";
      phoneHead = "+91-9826356970";
      emailHead = "rps29sai@gmail.com";
      degree="D.H.M.S./ 10366",
      experience="33 Years & 6 months./ F.T."
      faculties = [
        {
          name: "Dr. Santosh Kumar Verma",
          position: "Professor",
          degree: "BHMS, M.D.(Hom.)/ H030584",
          experience: "8 years / F.T.",
          email: "santoshvarma5566@gmail.com",
          image: "/santosh.jpg"
        },
        {
          name: "Dr. Yogeshvari",
          position: "Assistant Professor",
          degree: "MBHMS, M.D. (Hom.)/ 23117",
          experience: "3years & 1 months/F.T",
          email: "divyanichourasiya616@gmail.com",
          image: "/yogeshvari.jpg"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;
    case "pharm":
      slogan = "Pharmaceutical Expertise for Holistic Healing.";
      author = "Dr. Sandeep Sharma";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Pharmacy at NSHMC focuses on the preparation, dispensing, and management of homeopathic remedies. This department provides students with a thorough understanding of pharmaceutical principles, including the sourcing, preparation, and potentization of remedies. Students gain practical skills in remedy formulation, quality control, and ethical dispensing practices.The curriculum integrates theoretical knowledge with hands-on experience, ensuring that students are well-versed in the pharmacological aspects of homeopathy. By learning to navigate the complexities of remedy preparation and administration, students are equipped to deliver safe and effective homeopathic treatments. The department’s emphasis on precision and patient care ensures that graduates are prepared to contribute to high standards in homeopathic practice.";
      dept = "Department of Pharmacy";
      headD = "Dr. Sandeep Sharma";
      headImg = "/sandeep.jpg";
      phoneHead = "+91 9893389440";
      emailHead = "dr.sandeep_sharma@yahoo.in";
      degree="DHMS, M.D. (Hom)/11686",
      experience="20 years & 11 months/ F.T"
      faculties = [
        {
          name: "Dr. Arvind Jain",
          position: "Professor",
          degree: "DHMS, M.D. (Hom) /11604",
          experience: "26 years/ F.T.",
          email: "arvindjaindr1971@gmail.com",
          image: "/arvind.jpg"
        },
        {
          name: "Dr. Shifa Ansari",
          position: "Assistant Professor",
          degree: "BHMS, M.D (Hom.)/ 22399",
          experience: "1 year & 7 months/ F. T.",
          email: "shifaansari6491@gmail.com",
          image: "/shifa.jpg"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;
    case "anotomy":
      slogan = "Where Structure Meets Function: Mastering Anatomy for Better Care.";
      author = "Dr. R.S. Agrawal";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Anatomy at NSHMC provides an in-depth exploration of the human body's structure, offering essential knowledge for diagnosing and treating health conditions. Through detailed lectures, hands-on dissection, and advanced imaging techniques, students gain a comprehensive understanding of anatomical systems and their functions.The department's modern facilities and expert faculty support both theoretical learning and practical application, ensuring students are well-prepared for clinical practice. Mastery of anatomy is crucial for effective homeopathic and medical care, as it underpins accurate diagnosis, treatment planning, and a holistic approach to patient health.";
      dept = "Department of Anatomy";
      headD = "Dr. R.S. Agrawal";
      headImg = "/principalns.jpg";
      phoneHead = "+91 9827447031";
      emailHead = "dragrawalrs@gmail.com";
      degree="DHMS, MD (Hom.)/ 10347",
      experience="33 years & 7 months/ F. T."
      faculties = [
        {
          name: "Dr. Tahir Mohammad Warsi",
          position: "Associate Professor",
          degree: "BHMS/14621",
          experience: "14 years & 7 months/ F.T.",
          email: "tahirmohammadwarsi@gmail.com",
          image: "/tahir.jpg"
        },
        {
          name: "Dr. Dhanraj Bawan",
          position: "Assistant Professor",
          degree: "BHMS, M.D. (Hom)/ 23212",
          experience: "3 years & 1 Months/F.T.",
          email: "dhanraj.bawan1992@gmail.com",
          image: "/dhanraj.jpg"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;
    case "surgery":
      slogan = "Excellence in Surgery: Combining Precision with Holistic Insight.";
      author = "Dr. J.P. Buch";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Surgery at NSHMC is committed to providing students with a thorough understanding of surgical techniques and practices. The department covers a wide range of surgical disciplines, emphasizing both theoretical knowledge and hands-on skills. Students learn advanced surgical methods, patient management, and post-operative care, integrating these skills with homeopathic principles for comprehensive patient treatment.With state-of-the-art facilities and experienced faculty, the department ensures that students gain practical experience through simulations and clinical rotations. This preparation is essential for developing the expertise needed to perform surgeries safely and effectively while considering holistic approaches to patient care and recovery.";
      dept = "Department of Surgery";
      headD = "Dr. J.P. Buch";
      headImg = "/jpbuch.jpg";
      phoneHead = "+91 9424354149";
      emailHead = "jaiprakashbuch.ent@gmail.com";
      degree="MBBS, MS (ENT)/4466",
      experience="5 months/ F.T."
      faculties = [
        {
          name: "Dr. Ajit Kumar Jain",
          position: "Associate Professor",
          degree: "MBBS, DOMS/ 6006",
          experience: "21 years & 10 months/ G.F.",
          email: "drajitsjain@gmail.com",
          image: "/ajit.jpg"
        },
        {
          name: "Dr. Shahjahan Begum",
          position: "Assistant Professor",
          degree: "BHMS, M.D. (Hom)/ 18405",
          experience: "2 years & 7 months/ F.T.",
          email: "sarfrazshaikhshahjahan@gmail.com",
          image: "/shahjahan.jpg"
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        //   email: "",
        //   image: "/"
        // },
        // Add more faculty members as needed
      ];

      break;

    default:
      break;
  }
  const [active, setActive] = useState(0)
 const buttons=[
  'About The Department','Course-curriculmn','Labs Facility','Faculty','Academic Programmes'
 ]

  return (
    <>
    <div>
      <SliderMain images={images} heading={dept} />
      <div className='mt-10 flex items-center gap-5'>
      {
        buttons.map((item,index)=>(
          <button onClick={()=>setActive(index)} className='border-2 p-4 rounded-lg bg-blue-500 hover:bg-blue-700' key={index}>{item}</button>
        ))
      }
      </div>
      
      <div className="w-full   ">
        {
          active===0 && (
            <div className="w-full flex px-20 py-10  gap-7">
          <div className="w-2/3 ">
            <div className="p-10">
              <h2 className=" text-4xl text-blue-800 my-5">
                About the Department
              </h2>
              <div className="w-full   mt-5">
                <div className="w-full grid grid-cols-3 gap-5 ">
                  {counter.map((count) => (
                    <DeptCounter
                      key={count.title}
                      initialValue={3}
                      targetValue={count.value}
                      speed={count.speed}
                      textColor={count.textColor}
                      text={count.title}
                      color={count.color}
                    />
                  ))}
                </div>
              </div>

              <p className=" mt-5 font-extralight text-sm  text-justify  h-[160px]">
                {aboutDept}
              </p>
            </div>
          </div>
          <div className="w-1/3  p-4">
            <div className="relative h-full">
              <Image
                src="/welcome.jpeg"
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
          )
        }
        {
          active===1 && (
            <div><Curriculumn/></div>
          )
        }
        {
          active===2 && (
            <div>
              <div className="w-full flex px-20 py-4 gap-7">
          <div className="w-3/5 h-[580px]">
            <div className="relative h-full">
              <Image
                src={deptImg}
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-2/5  flex flex-col gap-10 py-20 justify-between ">
            <div className="w-11/12 mx-auto  flex flex-col gap-4">
              <div className="flex  items-center gap-2">
                <Image src="/mission-icon.png" width={70} height={20} alt="h" />{" "}
                <h1 className="text-2xl font-bold">Mission</h1>
              </div>
              <div>
                <p className="text-sm font-extralight">
                  To impart knowledge and equip students with skills for
                  generating quality civil engineering professionals with high
                  ethical standards; carry out innovative research and
                  consultancy projects to design, build and maintain civil
                  engineering infrastructure ensuring environmental health and
                  quality life.
                </p>
              </div>
            </div>
            <div className="w-11/12 mx-auto  flex flex-col gap-4">
              <div className="flex  items-center gap-2">
                <Image src="/vision-icon.png" width={70} height={20} alt="h" />{" "}
                <h1 className="text-2xl font-bold">Vision</h1>
              </div>
              <div>
                <p className="text-sm font-extralight">
                  To become frontier in civil engineering education and
                  research, which will serve the society with most sustainable
                  infrastructure and superior environmental health.
                </p>
              </div>
            </div>
          </div>
        </div>
            </div>
          )
        }
        {
          active===3 && (
            <>
            <div className="w-full flex flex-col px-20 gap-4 py-6 ">
          <h1 className="font-bold text-4xl text-blue-700">
            Head Of Department
          </h1>
          <div className="flex justify-between gap-10">
            <div className="w-1/2  flex items-center p-4">
              <div className="w-72 h-72 rounded-full border-2 border-black relative overflow-hidden">
                <Image src={headImg} fill />
              </div>
              <div className="flex flex-col justify-center  p-10">
                <h1 className=" font-semibold text-2xl">{headD}</h1>
                <h2 className="text-lg mb-2">Head Of Department</h2>
                <h1 className="text-sm  mt-1">
                  <FaPhoneAlt className="inline mr-1" />
                  {phoneHead}
                </h1>
                
                <h1 className="text-sm  mt-1 flex items-center">
                  <MdEmail className="inline mr-1 " />
                  {emailHead}
                </h1>
                <h1 className="text-sm  mt-1">{degree}</h1>
                <h1 className="text-sm  mt-1">{experience}</h1>
              </div>
            </div>
            <div className="w-1/2  flex flex-col justify-center items-center">
              <p className="p-5 text-3xl text-center"> {slogan}</p>
              <h1 className=" italic  text-2xl">- {author}</h1>
            </div>
          </div>
        </div>
        <h1 className="text-3xl text-center font-semibold border-b">Faculty at NSHMC</h1>
        <div className=" grid ">
        <div>
          {faculties.map((faculty, index) => (
            <div
              className=" mt-1 mb-5  p-2  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] "
              key={index}
            >
              <div className=" flex gap-6 ">
                <div className="w-48 h-40   relative  overflow-hidden rounded-lg">
                  <Image
                    src={faculty.image}
                    alt="Img Not Found"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className=" py-4">
                  <h1 className="my-2 font-bold text-lg mt-1">
                    <span className="font-semibold"> Name : </span>{" "}
                    {faculty.name}
                  </h1>
                  <h1 className="text-sm mt-1">
                    <span className="font-semibold"> Designation : </span>{" "}
                    {faculty.position}
                  </h1>
                  <h2 className="text-sm">
                    <span className="font-semibold"> Qualification : </span>{" "}
                    {faculty.degree}
                  </h2>
                  <h3 className="text-sm mt-1">
                    <span className="font-semibold"> Experience : </span>{" "}
                    {faculty.experience}
                  </h3>
                  <h3 className="text-sm mt-1">
                    <span className="font-semibold"> Gmail </span>
                    {faculty.email}
                  </h3>
                </div>
              </div>
            </div>
          ))}

          {/* Add more rows as needed */}
        </div>
      </div>
            </>
          )
        }
        {
          active===4 && (
            <>
            <div className="w-full flex flex-col px-20 gap-4 py-6">
          <h1 className="text-4xl text-blue-700 font-bold p-2">
            Academic Programmes
          </h1>
          <div className="w-full flex justify-center gap-20 ">
            <ProgramCard
              course={"Undergraduate"}
              bgcolor={"bg-blue-800"}
              admission={"NEET UG"}
              dept={" It is a 5.5-year course that includes an internship and covers the medical knowledge of homeopathy"}
            />
            {/* <ProgramCard
              course={"Post-Graduate"}
              bgcolor={"bg-blue-800"}
              admission={"JEE"}
              dept={"civil engineering"}
            /> */}
          </div>
        </div>
            </>
          )
        }
        
        

        
        
        {/* <div className="w-full p-2"></div> */}
      </div>
      <div>
      
    </div>
      
      
    </div>
    </>
    
  );
}
