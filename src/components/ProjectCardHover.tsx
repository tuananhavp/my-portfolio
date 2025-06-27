import React from "react";
import { motion } from "framer-motion";
import { Project } from "./ProjectCard";
import { ProjectLink } from "./ProjectLink";

interface ProjectCardHoverContentProps {
  project: Project;
  setIsModalOpen: (isOpen: boolean) => void;
}

export const ProjectCardHoverContent = ({ project, setIsModalOpen }: ProjectCardHoverContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/90 to-black/85 backdrop-blur-sm z-10 p-5 flex flex-col"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.2 }}
        className="mb-3"
      >
        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
      </motion.div>

      {project.technologies && project.technologies.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className="mb-3"
        >
          <h4 className="text-sm font-medium text-gray-400 mb-1">Technologies</h4>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + idx * 0.05, duration: 0.2 }}
                className="text-xs bg-white/10 text-blue-300 rounded-full px-2 py-1"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}

      {project.features && project.features.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.2 }}
          className="mb-3"
        >
          <h4 className="text-sm font-medium text-gray-400 mb-1">Key Features</h4>
          <ul className="text-xs text-gray-300 list-disc pl-4 space-y-1">
            {project.features.slice(0, 3).map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.05, duration: 0.2 }}
              >
                {feature}
              </motion.li>
            ))}
            {project.features.length > 3 && (
              <motion.li
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.2 }}
              >
                And more...
              </motion.li>
            )}
          </ul>
        </motion.div>
      )}

      <div className="flex-grow"></div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.2 }}
        className="flex justify-between items-center mt-2"
      >
        <div className="flex space-x-2">
          {project.link && <ProjectLink href={project.link} type="demo" size="small" />}

          {project.github && <ProjectLink href={project.github} type="code" size="small" />}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-xs text-white/80 hover:text-white transition-colors duration-200 underline"
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
        >
          View Details
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
