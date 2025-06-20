import React from "react";
import {
  FiFileText,
  FiBookOpen,
  FiCpu,
  FiTool,
  FiLink,
  FiDownload,
  FiPhoneCall,
} from "react-icons/fi";

const iconMap = {
  notes: <FiFileText />,
  book: <FiBookOpen />,
  calculator: <FiCpu />,
  tool: <FiTool />,
  link: <FiLink />,
  pdf: <FiFileText />,
};

const typeLabels = {
  notes: "📒 Notes",
  book: "📚 Book",
  calculator: "🧮 Calculator",
  tool: "🛠️ Tool",
  link: "🔗 Link",
  pdf: "📄 PDF",
};

const ResourceCard = ({
  title,
  type,
  sharedBy,
  date,
  link,
  contact,
  description,
}) => {
  return (
    <div className="w-full max-w-sm bg-white/30 backdrop-blur-lg border border-[#eaeaea] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 p-6 flex flex-col justify-between">
      
      {/* Icon + Info */}
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-[#0ABAB5]/10 text-[#0ABAB5] p-3 rounded-full text-xl shadow-inner">
          {iconMap[type] || <FiFileText />}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 hover:text-[#0ABAB5] transition">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{typeLabels[type] || "Resource"}</p>
          <p className="text-xs text-gray-400 mt-1">
            Shared by <span className="font-medium text-gray-600">{sharedBy}</span> on {date}
          </p>
        </div>
      </div>

      {description && (
        <p className="text-sm text-gray-600 mb-3 leading-relaxed">
          {description}
        </p>
      )}

      {contact && (
        <div className="flex items-center text-sm text-gray-700 mb-3">
          <FiPhoneCall className="mr-2 text-[#0ABAB5]" />
          <span className="font-medium">Contact: </span>&nbsp;{contact}
        </div>
      )}
    </div>
  );
};

export default ResourceCard;
