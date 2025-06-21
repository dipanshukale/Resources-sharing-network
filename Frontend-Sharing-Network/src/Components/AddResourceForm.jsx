import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AddResourcePage = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    sharedBy: "",
    link: "",
    contact: "",
    image: "",
    description: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Resource added under type: ${type || "General"}`);
    navigate("/resources");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fefae0] via-white to-[#fef6f2] px-4 pt-24 pb-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white shadow-xl border border-gray-200 rounded-2xl p-8"
      >
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-[#0ABAB5] text-center mb-8">
          Add a New {type ? type.charAt(0).toUpperCase() + type.slice(1) : "Resource"}
        </h2>

        {/* Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Operating System Notes"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0ABAB5]/50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Shared By <span className="text-red-500">*</span>
            </label>
            <input
              name="sharedBy"
              value={formData.sharedBy}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Link</label>
            <input
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Image URL</label>
            <input
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Contact</label>
            <input
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Only for physical items"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
            />
          </div>

          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a short description about the resource..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm resize-none"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button
            type="button"
            onClick={() => navigate("/resources")}
            className="text-gray-600 hover:text-[#0ABAB5] font-medium"
          >
            ← Cancel
          </button>
          <button
            type="submit"
            className="bg-[#0ABAB5] hover:bg-[#089C98] text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddResourcePage;
