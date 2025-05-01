import React, { useRef, useState } from "react";
import InputForm from "./InputForm";
import Resume from "./Resume";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    skills: "",
    experience: "",
    education: "",
    languages: "",
    hobbies: ""
  });

  const resumeRef = useRef(null);

  const downloadResume = async () => {
    const canvas = await html2canvas(resumeRef.current);
    const image = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(image, "PNG", 0, 0, width, height);
    pdf.save("resume.pdf");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-1/2 p-6 bg-white shadow">
        <h1 className="text-2xl font-bold mb-4">Enter Resume Details</h1>
        <InputForm formData={formData} setFormData={setFormData} />
        <div className="mt-4 flex gap-4">
          <button
            onClick={() =>
              document
                .getElementById("resumePreview")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Preview
          </button>
          <button
            onClick={downloadResume}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Download
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 p-6 bg-gray-100" id="resumePreview">
        <Resume formData={formData} resumeRef={resumeRef} />
      </div>
    </div>
  );
}
