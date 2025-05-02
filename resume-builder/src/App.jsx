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
    summary: "Customer-focused Retail Sales professional with understanding of retail dynamics...",
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
    education: {
      year: "2016",
      degree: "Diploma in Financial Accounting",
      institution: "Oxford Software Institute & Oxford School of English, New Delhi"
    },
    languages: [
      { name: "Hindi", level: "Native speaker" },
      { name: "English", level: "C2 - Proficient" },
      { name: "Bengali", level: "B2 - Upper-intermediate" }
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

  const downloadPDF = () => {
    const element = document.getElementById("resume-preview");
    html2pdf().from(element).save("resume.pdf");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 bg-gray-100 min-h-screen">
      {/* Form */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded shadow overflow-y-auto max-h-screen">
        <h2 className="text-xl font-bold mb-4 text-center">Resume Template</h2>
        <label className="block font-semibold mb-1">Name</label>
        <input className="border p-2 mb-4 w-full rounded" value={formData.name} onChange={(e) => updateField("name", e.target.value)} />

        <label className="block font-semibold mb-1">Profile Image URL</label>
        <input className="border p-2 mb-4 w-full rounded" value={formData.image} onChange={(e) => updateField("image", e.target.value)} />

        <label className="block font-semibold mb-1">Address</label>
        <input className="border p-2 mb-4 w-full rounded" value={formData.address} onChange={(e) => updateField("address", e.target.value)} />

        <label className="block font-semibold mb-1">Phone</label>
        <input className="border p-2 mb-4 w-full rounded" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} />

        <label className="block font-semibold mb-1">Email</label>
        <input className="border p-2 mb-4 w-full rounded" value={formData.email} onChange={(e) => updateField("email", e.target.value)} />

        <label className="block font-semibold mb-1">Summary</label>
        <textarea className="border p-2 mb-4 w-full rounded" value={formData.summary} onChange={(e) => updateField("summary", e.target.value)} />

        <button onClick={() => setPreviewData(formData)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-3">Preview Resume</button>
        <button onClick={downloadPDF} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Download PDF</button>
      </div>

      {/* Resume Preview */}
      <div className="w-full lg:w-1/2 bg-white rounded shadow p-4" id="resume-preview">
        <Resume data={previewData} />
      </div>
    </div>
  );
}
