import React from "react";
import Notes from "../assets/notes.jpg";
import Book from "../assets/book.jpg";
import Calculator from "../assets/calculator.jpg";
import Template from "../assets/template.jpg";
import Github from "../assets/github.jpg";
import Frontend from "../assets/frontend.jpg";

const ResourceCard = ({ title, type, sharedBy, date, link, contact }) => {
  const imageMap = {
    notes: Notes,
    book: Book,
    calculator: Calculator,
    tool: Template,
    link: Github,
    pdf: Frontend,
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <img
        src={imageMap[type] || "/images/default.png"}
        alt={type}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold font-serif text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-1">Type: <span className="capitalize">{type}</span></p>
        <p className="text-sm text-gray-600 mb-1">Shared by: {sharedBy}</p>
        <p className="text-sm text-gray-500">{date}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-[#0ABAB5] font-medium hover:underline"
          >
            View Resource
          </a>
        )}
        {contact && (
          <p className="mt-3 text-sm text-gray-700">Contact: {contact}</p>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;