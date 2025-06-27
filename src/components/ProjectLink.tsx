import React from "react";
import { motion } from "framer-motion";
import PrimaryButton from "@/components/PrimaryButton";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectLinkProps {
  href: string;
  type: "demo" | "code";
  size: "small" | "large";
}

export const ProjectLink = ({ href, type, size }: ProjectLinkProps) => {
  const isSmall = size === "small";

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <PrimaryButton className={isSmall ? "px-3 py-1.5 text-xs" : "px-6 py-2"}>
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center">
          {type === "demo" ? (
            <>
              <FaExternalLinkAlt className={isSmall ? "h-3.5 w-3.5 mr-1" : "h-5 w-5 mr-2"} />
              {isSmall ? "Demo" : "View Live Demo"}
            </>
          ) : (
            <>
              <FaGithub className={isSmall ? "h-3.5 w-3.5 mr-1" : "h-5 w-5 mr-2"} />
              {isSmall ? "Code" : "View Source Code"}
            </>
          )}
        </a>
      </PrimaryButton>
    </motion.div>
  );
};
