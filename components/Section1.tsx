// Section1.tsx
"use client";

import React, { useState } from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Image from "next/image";
import ModalContact from "./ModalContact";

export default function Section1({ onSectionChange }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main
      style={{ backgroundImage: 'url("/layout.webp")' }}
      className="h-full lg:h-screen bg-cover flex justify-center items-center"
    >
      <motion.div
        className="bg-cover py-10 lg:py-0 opacity-95 w-5/6 shadow-lg shadow-white h-5/6 flex flex-col lg:flex-row space-y-5 lg:space-y-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className=" w-full lg:w-6/12 font-semibold flex flex-col md:items-center lg:items-start justify-center lg:justify-end space-y-10 lg:space-y-0 bg-transparent text-white p-3">
          <p className="border w-full text-end text-lg px-3">
            Hi there! I am Mateo
          </p>
          <div className="space-y-6 w-full md:w-8/12 lg:w-full  ">
            <h1 className="text-5xl text-center lg:text-start lg:text-7xl">
              WEB DEVELOPER
            </h1>
            <p className="w-full text-center lg:text-start text-lg">
              A passionate Web Developer with 2 years of experience using
              React.js, Next.js, TailwindCSS and TypeScript
            </p>
            <div className="w-full lg:flex flex-col items-center lg:flex-row lg:justify-around space-y-5 lg:space-y-0 hidden">
              <button className="btn-secondary" onClick={handleOpenModal}>
                Contact me
              </button>
              <button
                onClick={() => onSectionChange(2)}
                className="btn-secondary flex -space-x-32"
              >
                <RiArrowRightDoubleLine className="w-full h-full justify-center items-center animate-moveInOut" />
                <RiArrowRightDoubleLine className="w-full h-full justify-center items-center animate-moveInOut" />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-cover lg:w-6/12 flex justify-center items-center">
          <Image
            className="shadow-lg shadow-white w-4/6 md:w-3/6 h-[335px]"
            src="/teo.webp"
            alt="Profile Image"
            width={310}
            height={310}
          />
        </div>
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-around space-y-5 lg:space-y-0 lg:hidden">
          <button className="btn-secondary" onClick={handleOpenModal}>
            Contact me
          </button>
          <button
            onClick={() => onSectionChange(2)}
            className="btn-secondary flex -space-x-32"
          >
            <RiArrowRightDoubleLine className="w-full h-full justify-center items-center animate-moveInOut" />
            <RiArrowRightDoubleLine className="w-full h-full justify-center items-center animate-moveInOut" />
          </button>
        </div>
      </motion.div>

      <ModalContact isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
