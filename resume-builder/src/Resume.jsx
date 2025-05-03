import React from "react";

export default function Resume({ data }) {
  return (
    <div className="flex flex-row md:flex-row text-gray-800 font-sans max-w-[800px] mx-auto border bg-white rounded-lg overflow-hidden shadow-md">

      {/* Sidebar (Left Side) */}
      <div className="md:w-[30%] max-w-[40%] bg-[#1A3E4C] text-white p-6 flex flex-col shrink-0 min-w-0 overflow-hidden">
        {/* Image Section */}
        <div className="mb-6 flex justify-center">
          <img
            src={data.image}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-4 w-full break-words overflow-hidden whitespace-normal">
          <div className="w-full break-words overflow-hidden">
            <p className="text-sm mb-1">{data.address}</p>
            <p className="text-sm mb-1">{data.phone}</p>
            <p className="text-sm mb-4">{data.email}</p>
          </div>

          <div className="w-full break-words overflow-hidden">
            <h3 className="text-lg font-semibold mb-1">SUMMARY</h3>
            <p className="text-sm">{data.summary}</p>
          </div>

          <div className="w-full break-words overflow-hidden">
            <h3 className="text-lg font-semibold mb-1">SKILLS</h3>
            <ul className="list-disc list-inside text-sm">
              {data.skills.map((skill, i) => (
                <li key={i} className="break-words">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>


      {/* Main Content (Right Side) */}
      <div className="md:w-2/3 p-6">
        <h1 className="text-3xl font-bold text-[#1A3E4C] mb-4">{data.name}</h1>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">EXPERIENCE</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold">{exp.title} | {exp.company}</p>
              <p className="text-sm italic">{exp.duration} - {exp.location}</p>
              <ul className="list-disc list-inside text-sm ml-4 mt-1">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">EDUCATION</h2>
          {data.education && data.education.length > 0 && (
            data.education.map((edu, index) => (
              <div key={index} className="mb-2">
                <p className="text-sm font-medium">
                  {edu.year} - {edu.degree}
                </p>
                <p className="text-sm">{edu.institution}</p>
              </div>
            ))
          )}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">LANGUAGES</h2>
          <ul className="text-sm list-disc list-inside ml-4">
            {data.languages.map((lang, i) => (
              <li key={i}><strong>{lang.name}:</strong> {lang.level}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">HOBBIES</h2>
          <ul className="list-disc list-inside text-sm ml-4">
            {data.hobbies.map((hobby, i) => (
              <li key={i}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
