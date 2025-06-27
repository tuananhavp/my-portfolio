"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectModal } from "./ProjectModal";
import { ProjectCardHoverContent } from "./ProjectCardHover";

export interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  technologies?: string[];
  features?: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        whileHover={{
          y: -5,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
        }}
        className="bg-[#171717] rounded-lg shadow-md transition-all duration-300 
        p-2 relative overflow-hidden h-[300px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full rounded-lg overflow-hidden"
        >
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg"
            width={400}
            height={400}
            priority={index < 2} // Load first two images with priority
          />
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: isHovered ? 0 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </motion.div>

        <AnimatePresence>
          {isHovered && <ProjectCardHoverContent project={project} setIsModalOpen={setIsModalOpen} />}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={project} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ProjectCard;
