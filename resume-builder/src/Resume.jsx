export default function Resume({ formData, resumeRef }) {
    return (
      <div
        ref={resumeRef}
        className="bg-white p-6 rounded shadow-lg w-full"
      >
        <h1 className="text-3xl font-bold text-blue-700">{formData.name}</h1>
        <p className="text-sm text-gray-600">{formData.email} | {formData.phone}</p>
        <p className="text-sm text-gray-600">{formData.address}</p>
  
        <section className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">Summary</h2>
          <p>{formData.summary}</p>
        </section>
  
        <section className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
          <p>{formData.skills}</p>
        </section>
  
        <section className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">Experience</h2>
          <p>{formData.experience}</p>
        </section>
  
        <section className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">Education</h2>
          <p>{formData.education}</p>
        </section>
  
        <section className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">Languages</h2>
          <p>{formData.languages}</p>
        </section>
  
        <section className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">Hobbies</h2>
          <p>{formData.hobbies}</p>
        </section>
      </div>
    );
  }
  