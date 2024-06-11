"use client";
import { RiArrowRightDoubleLine, RiArrowLeftDoubleLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Slider from "./Slider";
import { useState } from "react";

export default function Section2({ onSectionChange }: any) {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(0);

  const handleProjectClick = (index: number) => {
    setCurrentImage(index);
    setCurrentTitle(index);
  };
  return (
    <main
      style={{ backgroundImage: 'url("/layout.webp")' }}
      className="h-full py-10 lg:py-0 lg:h-screen  bg-cover flex justify-center items-center"
    >
      <motion.div
        className="bg-cover h-full opacity-95 w-5/6 shadow-lg shadow-white lg:h-[80%] flex flex-col lg:flex-row items-center lg:items-stretch "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="w-full space-y-10  lg:space-y-0 lg:w-6/12 font-semibold flex flex-col justify-around text-white ">
          <h1 className="text-5xl lg:text-6xl text-center">PROJECTS</h1>
          <div className="flex flex-col md:flex-row items-center lg:space-x-4 text-center space-y-4 md:space-y-0 md:justify-around lg:flex-wrap lg:gap-6">
            <button
              onClick={() => handleProjectClick(1)}
              type="button"
              className="btn-secondary"
            >
              AEI
            </button>
            <button
              onClick={() => handleProjectClick(0)}
              type="button"
              className="btn-secondary"
            >
              Glamto
            </button>
            <button
              onClick={() => handleProjectClick(2)}
              type="button"
              className="btn-secondary "
            >
              Tybatrip
            </button>
          </div>
          <div className="w-full hidden lg:flex justify-around">
            <button
              onClick={() => onSectionChange(1)}
              type="button"
              className="btn-secondary flex -space-x-32"
            >
              <RiArrowLeftDoubleLine className="w-full  h-full justify-center items-center animate-moveInOut" />
              <RiArrowLeftDoubleLine className="w-full  h-full justify-center items-center animate-moveInOut" />
            </button>
            <button
              onClick={() => onSectionChange(3)}
              type="button"
              className="btn-secondary flex -space-x-32"
            >
              <RiArrowRightDoubleLine className="w-full  h-full justify-center items-center animate-moveInOut" />
              <RiArrowRightDoubleLine className="w-full  h-full justify-center items-center animate-moveInOut" />
            </button>
          </div>
        </div>

        <div className=" my-10 lg:my-0 lg:w-6/12  flex justify-center items-center w-5/6 md:w-4/6 h-[335px] lg:h-full">
          <Slider currentTitle={currentTitle} currentImage={currentImage} />
        </div>
        <div className="w-full lg:hidden flex flex-col md:flex-row md:justify-around items-center space-y-5 md:space-y-0 mb-5 lg:mb-0">
          <button
            onClick={() => onSectionChange(1)}
            type="button"
            className="btn-secondary flex -space-x-32"
          >
            <RiArrowLeftDoubleLine className="w-full  h-full justify-center items-center animate-moveInOut" />
            <RiArrowLeftDoubleLine className="w-full  h-full justify-center items-center animate-moveInOut" />
          </button>
          <button
            onClick={() => onSectionChange(3)}
            type="button"
            className="btn-secondary flex -space-x-32"
          >
            <RiArrowRightDoubleLine className="w-full  h-full justify-center items-center animate-moveInOut" />
            <RiArrowRightDoubleLine className="w-full  h-full justify-center items-center animate-moveInOut" />
          </button>
        </div>
      </motion.div>
    </main>
  );
}
