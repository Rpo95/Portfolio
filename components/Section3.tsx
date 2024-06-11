"use client";

import { RiArrowRightDoubleLine, RiArrowLeftDoubleLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState } from "react";
import SkillCard from "./SkillCard";
import VerticalSlider from "./VerticalSlider";
import { experiences } from "../types";
import { ModalAbout } from ".";

interface Section3Props {
  onSectionChange: (section: number) => void;
}

export default function Section3({ onSectionChange }: Section3Props) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % experiences.length);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <main
      style={{ backgroundImage: 'url("/layout.webp")' }}
      className="h-full md:h-screen bg-cover flex justify-center items-center"
    >
      <motion.div
        className="bg-cover py-10 md:py-0 opacity-95 w-5/6 shadow-md shadow-white h-5/6 flex flex-col md:flex-row space-y-5 md:space-y-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="w-full md:w-6/12 font-semibold flex flex-col space-y-5 justify-around text-white p-3">
          <h1 className="text-5xl text-center">MY SKILLS</h1>
          <div className="bg-cover grid grid-cols-3 lg:grid-cols-4 justify-items-center place-items-center">
            <SkillCard h2="JavaScript" src="/js.webp" />
            <SkillCard h2="CSS" src="/css.webp" />
            <SkillCard h2="Html" src="/html.webp" />
            <SkillCard h2="NextJs" src="/next.webp" />
            <SkillCard h2="TailwindCss" src="/tailwind.webp" />
            <SkillCard h2="ReactJs" src="/react.webp" />
            <SkillCard h2="Git" src="/git.webp" />
            <SkillCard h2="Sketchup" src="/sketchup.webp" />
          </div>
          <div className="w-full hidden md:flex justify-around">
            <button
              onClick={() => onSectionChange(2)}
              type="button"
              className="btn-secondary flex -space-x-32"
            >
              <RiArrowLeftDoubleLine className="w-full h-full justify-center items-center animate-moveInOut" />
              <RiArrowLeftDoubleLine className="w-full h-full justify-center items-center animate-moveInOut" />
            </button>
            <button
              onClick={handleOpenModal}
              type="button"
              className="btn-secondary "
            >
              About me
            </button>
          </div>
        </div>
        <div className="w-full md:w-6/12 font-semibold flex flex-col  justify-around  text-white space-y-5 md:space-y-0">
          <h1 className="text-5xl text-center">EXPERIENCE</h1>
          <VerticalSlider current={current} experiences={experiences} />
          <div className="w-full  text-center">
            <button onClick={handleNext} className=" btn-secondary">
              Next
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col md:hidden justify-center items-center space-y-5">
          <button
            onClick={() => onSectionChange(2)}
            type="button"
            className="btn-secondary flex -space-x-32"
          >
            <RiArrowLeftDoubleLine className="w-full h-full justify-center items-center animate-moveInOut" />
            <RiArrowLeftDoubleLine className="w-full h-full justify-center items-center animate-moveInOut" />
          </button>
          <button
            onClick={handleOpenModal}
            type="button"
            className="btn-secondary "
          >
            About me
          </button>
        </div>
      </motion.div>
      <ModalAbout isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
