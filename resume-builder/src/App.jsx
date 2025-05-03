import React, { useState } from "react";
import Resume from "./Resume";
import html2pdf from "html2pdf.js";

export default function App() {
  const [formData, setFormData] = useState({
    name: "Diya Agarwal",
    image: "https://i.imgur.com/zYxDCQT.png",
    address: "New Delhi, India 110034",
    phone: "+91 11 5555 3345",
    email: "d.agarwal@sample.in",
    summary: "A customer-focused Retail Sales professional with a strong understanding of retail dynamics, skilled in identifying customer needs and providing tailored solutions to enhance their shopping experience. Proven expertise in driving sales, managing inventory, and creating a welcoming store environment that fosters long-term customer relationships.",
    skills: [
      "Cash register operation", "POS system operation", "Sales expertise", "Teamwork",
      "Inventory management", "Accurate money handling", "Recordkeeping"
    ],
    experience: [
      {
        title: "Retail Sales Associate",
        company: "ZARA",
        duration: "Feb 2017 - Present",
        location: "New Delhi, India",
        points: [
          "Increased monthly sales 10%",
          "Prevented store losses",
          "Processed payments and drawers"
        ]
      }
    ],
    education: [
      {
        year: "2016",
        degree: "Diploma in Financial Accounting",
        institution: "Oxford Software Institute & Oxford School of English, New Delhi"
      }
    ],
    languages: [
      { name: "Hindi", level: "Native speaker" },
      { name: "English", level: "C2 - Proficient" }
    ],
    hobbies: [
      "Recreational Football League",
      "Two-time league champion",
      "Red Cross Volunteer"
    ]
  });

  const [previewData, setPreviewData] = useState(formData);

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleAddField = (section) => {
    let updatedSection;
    switch (section) {
      case "experience":
        updatedSection = [...formData.experience, { title: "", company: "", duration: "", location: "", points: [""] }];
        break;
      case "education":
        updatedSection = [...formData.education, { year: "", degree: "", institution: "" }];
        break;
      case "languages":
        updatedSection = [...formData.languages, { name: "", level: "" }];
        break;
      case "hobbies":
        updatedSection = [...formData.hobbies, ""];
        break;
      default:
        return;
    }
    setFormData({ ...formData, [section]: updatedSection });
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[index] = { ...updatedExperience[index], [field]: value };
    setFormData({ ...formData, experience: updatedExperience });
  };

  const handleLanguageChange = (index, field, value) => {
    const updatedLanguages = [...formData.languages];
    updatedLanguages[index] = { ...updatedLanguages[index], [field]: value };
    setFormData({ ...formData, languages: updatedLanguages });
  };

  const handleHobbyChange = (index, value) => {
    const updatedHobbies = [...formData.hobbies];
    updatedHobbies[index] = value;
    setFormData({ ...formData, hobbies: updatedHobbies });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    setFormData({ ...formData, education: updatedEducation });
  };

  const downloadPDF = () => {
    const element = document.getElementById("resume-preview");
    html2pdf().from(element).save("resume.pdf");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 min-h-screen">
      {/* Form */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded shadow-lg overflow-y-auto max-h-screen">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-700">Resume Template</h2>
        <label className="block font-semibold mb-1 text-gray-700">Name</label>
        <input className="border p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" value={formData.name} onChange={(e) => updateField("name", e.target.value)} />

        <label className="block font-semibold mb-1 text-gray-700">Profile Image URL</label>
        <input className="border p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" value={formData.image} onChange={(e) => updateField("image", e.target.value)} />

        <label className="block font-semibold mb-1 text-gray-700">Address</label>
        <input className="border p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" value={formData.address} onChange={(e) => updateField("address", e.target.value)} />

        <label className="block font-semibold mb-1 text-gray-700">Phone</label>
        <input className="border p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} />

        <label className="block font-semibold mb-1 text-gray-700">Email</label>
        <input className="border p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" value={formData.email} onChange={(e) => updateField("email", e.target.value)} />

        <label className="block font-semibold mb-1 text-gray-700">Summary</label>
        <textarea className="border p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" value={formData.summary} onChange={(e) => updateField("summary", e.target.value)} />

        {/* Experience Section */}
        <h3 className="font-semibold mt-4 text-red-700">Experience</h3>
        {formData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <input className="border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Job Title" value={exp.title} onChange={(e) => handleExperienceChange(index, "title", e.target.value)} />
            <input className="border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Company" value={exp.company} onChange={(e) => handleExperienceChange(index, "company", e.target.value)} />
            <input className="border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Duration" value={exp.duration} onChange={(e) => handleExperienceChange(index, "duration", e.target.value)} />
            <input className="border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Location" value={exp.location} onChange={(e) => handleExperienceChange(index, "location", e.target.value)} />
            <textarea className="border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Achievements/Responsibilities" value={exp.points.join("\n")} onChange={(e) => handleExperienceChange(index, "points", e.target.value.split("\n"))} />
          </div>
        ))}
        <button onClick={() => handleAddField("experience")} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 mb-4 transition duration-300 ease-in-out">+ Add Experience</button>

        {/* Education Section */}
        <h3 className="font-semibold mt-4 text-blue-700">Education</h3>
        {formData.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <input className="border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Year" value={edu.year} onChange={(e) => handleEducationChange(index, "year", e.target.value)} />
            <input className="border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Degree" value={edu.degree} onChange={(e) => handleEducationChange(index, "degree", e.target.value)} />
            <input className="border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Institution" value={edu.institution} onChange={(e) => handleEducationChange(index, "institution", e.target.value)} />
          </div>
        ))}
        <button onClick={() => handleAddField("education")} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 mb-4 transition duration-300 ease-in-out">+ Add Education</button>

        {/* Languages Section */}
        <h3 className="font-semibold mt-4 text-green-700">Languages</h3>
        {formData.languages.map((lang, index) => (
          <div key={index} className="mb-4">
            <input className="border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Language" value={lang.name} onChange={(e) => handleLanguageChange(index, "name", e.target.value)} />
            <input className="border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Proficiency Level" value={lang.level} onChange={(e) => handleLanguageChange(index, "level", e.target.value)} />
          </div>
        ))}
        <button onClick={() => handleAddField("languages")} className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 mb-4 transition duration-300 ease-in-out">+ Add Language</button>

        {/* Hobbies Section */}
        <h3 className="font-semibold mt-4 text-purple-700">Hobbies</h3>
        {formData.hobbies.map((hobby, index) => (
          <div key={index} className="mb-4">
            <input className="border p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Hobby" value={hobby} onChange={(e) => handleHobbyChange(index, e.target.value)} />
          </div>
        ))}
        <button onClick={() => handleAddField("hobbies")} className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 mb-4 transition duration-300 ease-in-out">+ Add Hobby</button>

        {/* Submit Button */}
        <button onClick={() => setPreviewData(formData)} className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 mb-4 transition duration-300 ease-in-out">
          Preview Resume
        </button>

        {/* Download Button */}
        <button onClick={downloadPDF} className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300 ease-in-out">
          Download PDF
        </button>
      </div>

      {/* Resume Preview */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded shadow-lg overflow-y-auto max-h-screen" id="resume-preview">
        <Resume data={previewData} />
      </div>
    </div>
  );
}
