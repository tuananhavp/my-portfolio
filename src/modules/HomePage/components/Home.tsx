import PrimaryButton from "@/components/PrimaryButton";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, Variants } from "motion/react";

const Home = () => {
  const variants: Variants = {
    offscrren: { opacity: 0, y: -50 },
    onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } },
  };
  return (
    <>
      <section id="home" className="py-10 min-h-screen ">
        <motion.div
          className="container mx-auto px-4"
          variants={variants}
          initial="offscrren"
          whileInView={"onscreen"}
          viewport={{ amount: 0.6 }}
        >
          {/* Title */}
          <div className="flex flex-col">
            <h2 className="md:text-7xl lg:text-9xl text-5xl font-bold mb-6">Ngo Tuan Anh</h2>
            <h2 className="lg:text-7xl md:text-5xl text-3xl font-bold mb-6 pt-4">Web Developer</h2>
          </div>
          {/* Text */}
          <div className="md:w-5/6 w-full flex flex-col lg:flex-row items-start mt-8 space-y-6 lg:space-y-0 lg:space-x-8 ">
            <div className="flex flex-col items-start gap-8 mt-8 border-l border-gray-300 p-4 rounded-lg">
              <p className="lg:text-lg text-base text-gray-700">
                I&apos;m a Front-End Developer specializing in building fast, accessible, and responsive web
                applications using ReactJS and Next.js. I&apos;m passionate about crafting user-centered digital
                experiences with clean, maintainable code.
              </p>
              <p className="lg:text-lg text-base text-gray-700  mt-8 md:mt-0">
                In my free time, I like to explore new technologies, contribute to open-source projects, and share my
                knowledge with the community.
              </p>
              <PrimaryButton>
                <div className="flex items-center gap-2">
                  <span>View My Work</span>
                  <FaArrowRight className="lg:text-base text-xs" />
                </div>
              </PrimaryButton>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
