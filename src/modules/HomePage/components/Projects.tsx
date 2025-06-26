// components/Projects.tsx
import React, { useRef } from "react";
import { Projects_List } from "@/constants";
import ProjectCard from "@/components/ProjectCard";
import { motion, useScroll } from "framer-motion";

const Projects: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const {} = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section id="project" className="min-h-screen py-20" ref={ref}>
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
        viewport={{ amount: 0.6 }}
      >
        <h2 className="md:text-5xl lg:text-6xl text-3xl font-bold mb-6 text-center">My Projects</h2>
        <p className="lg:text-lg text-base text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Here are some of the projects I have worked on. Each project showcases my skills in web development and my
          passion for creating user-friendly applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects_List.map((project, index) => (
            <ProjectCard key={`project-${index}`} project={project} index={index} />
          ))}
        </div>

        {Projects_List.length > 6 && (
          <div className="text-center mt-12">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/tuananhavp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              View More Projects
            </motion.a>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
