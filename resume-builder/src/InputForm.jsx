export default function InputForm({ formData, setFormData }) {
    const handleChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
  
    return (
      <div className="space-y-3">
        {[
          "name",
          "email",
          "phone",
          "address",
          "summary",
          "skills",
          "experience",
          "education",
          "languages",
          "hobbies",
        ].map((field) => (
          <div key={field}>
            <label className="block capitalize font-semibold">{field}</label>
            <textarea
              name={field}
              value={formData[field]}
              onChange={handleChange}
              rows={field === "summary" || field === "experience" ? 3 : 1}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        ))}
      </div>
    );
  }
  