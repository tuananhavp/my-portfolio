import { Skills } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "motion/react";

const Skill = () => {
  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: 100,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <section className="py-10 min-h-screen" id="skill">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.6 }}
        className="container mx-auto px-4 flex lg:flex-row-reverse flex-col items-center justify-between "
      >
        <motion.div variants={cardVariants} className="flex items-center justify-center relative p-2">
          <Image
            className="rounded-2xl transition-transform duration-500 object-cover z-10 hover:scale-105 "
            src={"/personal-pic.jpg"}
            alt="Personal Picture"
            width={500}
            height={500}
          />
        </motion.div>
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center mt-8 md:mt-0 lg:px-12 px-1">
          <h2 className="md:text-base lg:text-2xl text-md font-bold mb-6 lg:text-left text-center">
            I&apos;m currently looking to join a cross-functional team that values improving people&apos;s lives through
            accessible design{" "}
          </h2>
          <div className="light-border-runner grid grid-cols-9 xl:gap-3 gap-1 mt-8 hover:gap-4 transition-all duration-500 animate-outline p-2">
            {Skills.map((skill) => {
              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 hover:shadow-md hover:shadow-white transition-shadow duration-500 py-4 px-2 cursor-pointer hover:bg-white/5 rounded-lg"
                >
                  <span className="2xl:text-3xl text-xl text-blue-500">{skill.icon}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skill;
