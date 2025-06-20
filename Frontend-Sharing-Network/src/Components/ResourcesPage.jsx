import React from "react";
import ResourceCard from "../Components/ResourceCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const resources = [
  {
    title: "Engineering Math Notes",
    type: "notes",
    sharedBy: "Riya",
    date: "June 19, 2025",
    link: "#",
  },
  {
    title: "OOP Concepts Book",
    type: "book",
    sharedBy: "Harshal",
    date: "June 18, 2025",
    link: "#",
  },
  {
    title: "Casio FX-991ES Plus",
    type: "calculator",
    sharedBy: "Alpha",
    date: "June 17, 2025",
    contact: "9322824718",
  },
  {
    title: "Notion Student Template",
    type: "tool",
    sharedBy: "Beta",
    date: "June 16, 2025",
    link: "#",
  },
  {
    title: "GitHub Portfolio Tutorial",
    type: "link",
    sharedBy: "Alpha",
    date: "June 15, 2025",
    link: "#",
  },
  {
    title: "Frontend Roadmap PDF",
    type: "pdf",
    sharedBy: "Vaibhavi",
    date: "June 14, 2025",
    link: "#",
  },
];

const ResourcesPage = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#fefae0] via-white to-[#fef6f2] pt-24 pb-20 px-4 relative overflow-hidden">

      
      <div className="absolute top-[-5%] left-[-10%] w-[400px] h-[400px] bg-[#0ABAB5]/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-pink-200/20 rounded-full blur-2xl z-0"></div>

    
    <div className="max-w-6xl mx-auto text-center mb-16 z-10 relative">
      <h1 className="text-5xl sm:text-6xl font-black text-gray-900 drop-shadow-lg leading-tight tracking-tight">
        🔥 Study Stuff, Shared Loud!
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-2xl mx-auto font-medium">
         Notes that slap. Books that guide. Tools that vibe.  
         This ain't a repo — it’s a **student drop zone** 🎯
      </p>
    </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10 relative px-2 sm:px-4">
        {resources.map((res, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <ResourceCard {...res} />
          </motion.div>
        ))}
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/add-resource/notes"
          className="bg-gradient-to-br from-[#0ABAB5] to-[#0e8c87] hover:from-[#089C98] hover:to-[#066f6b] text-white px-6 py-3 rounded-full shadow-lg text-base font-semibold transition-all duration-300 hover:scale-110"
        >
          ➕ Add Resource
        </Link>
      </div>
    </section>
  );
};

export default ResourcesPage;
