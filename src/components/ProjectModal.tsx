import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Project } from "./ProjectCard";
import { ProjectLink } from "./ProjectLink";
import { IoClose } from "react-icons/io5";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/80  z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
            className="bg-[#171717] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110"
                layout="fill"
                priority
              />
              <div className="absolute top-4 right-4">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-black/60 rounded-full p-2 transition-colors"
                  onClick={onClose}
                >
                  <IoClose className="h-6 w-6 text-white" />
                </motion.button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto flex-grow">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
                <p className="text-gray-300 mb-6">{project.description}</p>
              </motion.div>

              {project.technologies && project.technologies.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="mb-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + idx * 0.05, duration: 0.2 }}
                        className="text-sm bg-white/10 text-blue-300 rounded-full px-3 py-1"
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
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="mb-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <ul className="text-gray-300 list-disc pl-5 space-y-2">
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.05, duration: 0.2 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="flex flex-wrap gap-3 mt-4"
              >
                {project.link && <ProjectLink href={project.link} type="demo" size="large" />}

                {project.github && <ProjectLink href={project.github} type="code" size="large" />}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
