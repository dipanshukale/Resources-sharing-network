import React from "react";
import { FiCpu, FiPhoneCall } from "react-icons/fi";

const CalculatorCard = ({ title, sharedBy, date, image, contact, description }) => {
  return (
    <div className="w-full max-w-sm bg-gradient-to-br from-white/70 via-[#fefefe]/50 to-white/30 backdrop-blur-md border border-[#eaeaea] rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-all duration-300 p-5 flex flex-col justify-between">
     

      {/* Icon + Details */}
      <div className="flex items-start gap-4">
        <div className="bg-[#0ABAB5]/10 text-[#0ABAB5] p-3 rounded-full text-xl shadow-inner group-hover:scale-110 transition-transform duration-300">
          <FiCpu />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#0ABAB5] transition">
            {title}
          </h3>
          <p className="text-sm text-gray-500 capitalize">Physical Calculator</p>
          <p className="text-xs text-gray-400 mt-1">
            Shared by <span className="font-medium text-gray-600">{sharedBy}</span> on {date}
          </p>
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-600 mt-4 leading-relaxed">{description}</p>
      )}

      {/* Contact Info */}
      {contact && (
        <div className="mt-4 flex items-center text-sm text-gray-700">
          <FiPhoneCall className="mr-2 text-[#0ABAB5]" />
          <span className="font-medium">Contact: </span>&nbsp;{contact}
        </div>
      )}
    </div>
  );
};

export default CalculatorCard;
