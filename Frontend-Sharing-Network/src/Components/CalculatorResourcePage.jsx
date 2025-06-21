import React, { useState } from "react";
import AddResourceForm from "../Components/AddResourceForm";
import CalculatorCard from "../Components/CalculatorCard";

const CalculatorResourcePage = () => {
  const [resources, setResources] = useState([]);

  const handleAdd = (newResource) => {
    setResources([newResource, ...resources]); 
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Share Physical Resources 📦
      </h1>

      {/* Add Form */}
      <AddResourceForm onAdd={handleAdd} />

      {/* Resource Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res, idx) => (
          <CalculatorCard key={idx} {...res} />
        ))}
      </div>
    </div>
  );
};

export default CalculatorResourcePage;
