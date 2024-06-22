"use client";
import Link from "next/link";
import { useState } from "react";
import ModalFaculty from "../ModalFaculty/ModalFaculty";

const staffData = {
  teachingFaculty: [
    {
      id: 1,
      name: "Dr. Sushanta Rit",
      position: "Professor",
      qualifications: "D.M.S., M.D.(Hom.)- Materia Medica",
      experience: "1985",
      dob: "January 16, 1958",
      image: "/sushanta-rit.jpg",
      awards: [
        {
          authority: "Awarding Authority A",
          year: "2000",
          registrationNo: "12345",
          boardCouncil: "Council A",
        },
        {
          authority: "Awarding Authority B",
          year: "2005",
          registrationNo: "67890",
          boardCouncil: "Council B",
        },
      ],
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      position: "Associate Professor",
      qualifications: "Ph.D. in Biology",
      experience: "2010",
      dob: "March 25, 1980",
      image: "/jane-smith.jpg",
      awards: [
        {
          authority: "Awarding Authority C",
          year: "2012",
          registrationNo: "11223",
          boardCouncil: "Council C",
        },
      ],
    },
    {
      id: 3,
      name: "Dr. John Doe",
      position: "Assistant Professor",
      qualifications: "M.D. in Chemistry",
      experience: "2015",
      dob: "April 10, 1985",
      image: "/john-doe.jpg",
      awards: [
        {
          authority: "Awarding Authority D",
          year: "2015",
          registrationNo: "33456",
          boardCouncil: "Council D",
        },
      ],
    },
    {
      id: 4,
      name: "Dr. Emily Brown",
      position: "Lecturer",
      qualifications: "M.Sc. in Physics",
      experience: "2018",
      dob: "June 5, 1990",
      image: "/emily-brown.jpg",
      awards: [
        {
          authority: "Awarding Authority E",
          year: "2017",
          registrationNo: "55678",
          boardCouncil: "Council E",
        },
      ],
    },
    {
      id: 5,
      name: "Dr. Michael Green",
      position: "Senior Lecturer",
      qualifications: "Ph.D. in Mathematics",
      experience: "2008",
      dob: "August 22, 1978",
      image: "/michael-green.jpg",
      awards: [
        {
          authority: "Awarding Authority F",
          year: "2009",
          registrationNo: "66789",
          boardCouncil: "Council F",
        },
      ],
    },
    {
      id: 6,
      name: "Dr. Sarah Lee",
      position: "Professor",
      qualifications: "M.D. in Medicine",
      experience: "2000",
      dob: "November 30, 1965",
      image: "/sarah-lee.jpg",
      awards: [
        {
          authority: "Awarding Authority G",
          year: "2002",
          registrationNo: "77890",
          boardCouncil: "Council G",
        },
        {
          authority: "Awarding Authority H",
          year: "2006",
          registrationNo: "88901",
          boardCouncil: "Council H",
        },
      ],
    },

    // Add more teaching staff here
  ],
  hospitalStaff: [
    {
      id: 1,
      name: "Johny Julie ",
      designation: "AdKmak gdshajkh",
      dateOfJoining: "2010-01-15",
      qualification: "MBA",
    },
    {
      id: 2,
      name: "Julie  Rastoginisa",
      designation: "Medical Superintendent (COLLEGE AND HOSPITAL)",
      dateOfJoining: "2012-03-23",
      qualification: "MLISLDJD",
    },
    // Add more hospital staff here
  ],
  nonTeachingStaff: [
    {
      id: 1,
      name: "Robert White",
      designation: "Administrator",
      dateOfJoining: "2010-01-15",
      qualification: "MBA",
    },
    {
      id: 2,
      name: "Emily Black",
      designation: "Librarian",
      dateOfJoining: "2012-03-23",
      qualification: "MLIS",
    },
    // Add more non-teaching staff here
  ],
};

export default function StaffPage() {
  const [activeTab, setActiveTab] = useState("teachingFaculty");
  const [selectedStaff, setSelectedStaff] = useState(null);

  const handleMoreDetailsClick = (staff) => {
    setSelectedStaff(staff);
  };

  const handleCloseModal = () => {
    setSelectedStaff(null);
  };

  return (
    <>
      <div
        className="text-center mb-8 w-full border-2 h-80 flex justify-center items-center"
        style={{ backgroundImage: "url('/ar-1.jpg')" }}
      >
        <h1 className="text-4xl font-bold ">Our Staff</h1>
      </div>

      <div className="container mx-auto p-4">
        <div className="flex justify-center gap-10 mb-8">
          <button
            className={`mx-2 px-6 py-3 rounded ${
              activeTab === "teachingFaculty"
                ? "bg-purple-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("teachingFaculty")}
          >
            Teaching Faculty
          </button>
          <button
            className={`mx-2 px-6 py-3 rounded ${
              activeTab === "hospitalStaff"
                ? "bg-purple-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("hospitalStaff")}
          >
            Hospital Staff
          </button>
          <button
            className={`mx-2 px-6 py-3 rounded ${
              activeTab === "nonTeachingStaff"
                ? "bg-purple-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("nonTeachingStaff")}
          >
            Non-Teaching Staff
          </button>
        </div>

        <div>
          {activeTab === "teachingFaculty" && (
            <>
              <h1 className=" text-3xl my-4 font-bold text-gray-800">
                Teaching Staff
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {staffData.teachingFaculty.map((staff) => (
                  <div
                    key={staff.id}
                    className="bg-white p-5 rounded shadow flex"
                  >
                    <div className="w-48 h-48 overflow-hidden rounded border-2 border-black mr-5">
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full">
                      <h2 className="text-sm text-purple-500">
                        {staff.position}
                      </h2>
                      <p className="text-xl font-bold my-1">{staff.name}</p>
                      <p className="text-lg text-gray-800 mb-1">
                        {staff.qualifications}
                      </p>
                      <hr className="my-3" />
                      <p className="text-gray-700 text-lg">
                        <span className="font-bold">Experience: </span>
                        {staff.experience}
                      </p>
                      <p className="text-gray-700 text-lg">
                        <span className="font-bold">DOB: </span> {staff.dob}
                      </p>
                      <button
                        className="text-blue-500 mt-2 inline-block"
                        onClick={() => handleMoreDetailsClick(staff)}
                      >
                        More details +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "hospitalStaff" && (
            <>
              <h1 className="text-3xl my-4 font-bold text-gray-800">
                Medical Staff
              </h1>
              <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="w-1/5 py-4">Name</th>
                    <th className="w-1/5 py-4">Designation</th>
                    <th className="w-1/5 py-4">Date of Joining</th>
                    <th className="w-1/5 py-4">Qualification</th>
                  </tr>
                </thead>
                <tbody>
                  {staffData.hospitalStaff.map((staff) => (
                    <tr key={staff.id} className="text-center border-b">
                      <td className="py-4">{staff.name}</td>
                      <td className="py-4">{staff.designation}</td>
                      <td className="py-4">{staff.dateOfJoining}</td>
                      <td className="py-4">{staff.qualification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {activeTab === "nonTeachingStaff" && (
            <>
              <h1 className="text-3xl my-4 font-bold text-gray-800">
                Non-Teaching Staff
              </h1>
              <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="w-1/5 py-4">Name</th>
                    <th className="w-1/5 py-4">Designation</th>
                    <th className="w-1/5 py-4">Date of Joining</th>
                    <th className="w-1/5 py-4">Qualification</th>
                  </tr>
                </thead>
                <tbody>
                  {staffData.nonTeachingStaff.map((staff) => (
                    <tr key={staff.id} className="text-center border-b">
                      <td className="py-4">{staff.name}</td>
                      <td className="py-4">{staff.designation}</td>
                      <td className="py-4">{staff.dateOfJoining}</td>
                      <td className="py-4">{staff.qualification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>

        <ModalFaculty
          show={!!selectedStaff}
          onClose={handleCloseModal}
          staff={selectedStaff}
        />
      </div>
    </>
  );
}