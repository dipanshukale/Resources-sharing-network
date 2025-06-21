import React, { useState } from "react";

const AddPersonForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "Mentor",
    interests: "",
    skills: "",
    email: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ name: "", role: "Mentor", interests: "", skills: "", email: "", image: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-10"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Mentor/Mentee</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border p-2 rounded-lg"
          required
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="border p-2 rounded-lg"
        >
          <option>Mentor</option>
          <option>Mentee</option>
        </select>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Skills (comma separated)"
          className="border p-2 rounded-lg"
          required
        />
        <input
          type="text"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          placeholder="Interests (comma separated)"
          className="border p-2 rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded-lg"
          required
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL (optional)"
          className="border p-2 rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default AddPersonForm;
