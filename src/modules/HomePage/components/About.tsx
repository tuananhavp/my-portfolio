import { About_Info } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "motion/react";
import PersonalityCard from "@/components/PersonalityCard";

const About = () => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };
  return (
    <section id="about" className="min-h-screen mt-10">
      <motion.div className="container mx-auto px-4" style={{}}>
        <div className="flex flex-col text-center items-center xl:w-3/4 w-full mx-auto">
          <h2 className="md:text-5xl lg:text-6xl text-3xl font-bold mb-6">About Me</h2>
          <p className="lg:text-lg text-base text-gray-700 mb-8">
            I&apos;m Ngo Tuan Anh, a passionate Front-End Developer with a focus on creating fast, accessible, and
            responsive web applications.
            <span className="md:inline hidden mt-4">
              I specialize in using ReactJS and Next.js to build user-centered digital experiences. With a keen eye for
              detail and a commitment to clean, maintainable code, I strive to deliver high-quality solutions that
              enhance user experience. responsive web applications. <br />
            </span>
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={variants}
          viewport={{ amount: 0.3 }}
          className="lg:flex-row flex flex-col items-center justify-between lg:px-12 px-1"
        >
          <motion.div className="flex items-center relative overflow-hidden">
            <Image className="object-cover z-10" src={"/avatar.png"} alt="Personal Avatar" width={400} height={500} />
          </motion.div>
          <motion.article className="lg:w-1/2 flex flex-col w-full mx-auto mt-8 md:mt-0 ">
            <div className="flex flex-col items-start gap-8 mt-8 ">
              <h2 className="md:text-2xl lg:text-3xl text-base font-bold mb-6">Precision in Code, Passion in Craft</h2>
              <p className="lg:text-lg text-base text-gray-700">
                I have a strong foundation in web development, with experience in building responsive and user-friendly
                interfaces. I am always eager to learn new technologies and improve my skills.
              </p>
              <p className="lg:text-lg text-base text-gray-700">
                In my free time, I enjoy exploring new technologies, contributing to open-source projects, and sharing
                my knowledge with the community.
              </p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-3 gap-1 mt-8">
              {About_Info.map((item) => {
                return (
                  <PersonalityCard
                    key={`person-${item.title}`}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                  />
                );
              })}
            </div>
          </motion.article>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
