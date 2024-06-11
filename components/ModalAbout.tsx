"use client";

import React from "react";
import { motion } from "framer-motion";
import SocialMedia from "./SocialMedia";

interface ModalContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalContact({ isOpen, onClose }: ModalContactProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed w-full inset-0 flex flex-col space-y-5 items-center justify-center backdrop-blur-md z-50">
      <motion.div
        className="bg-transparent w-4/6 h-[70%] md:h-2/6 lg:w-2/6 lg:h-[60%] shadow-lg shadow-white p-6 "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col justify-center  items-center w-full h-full">
          <p className="text-white text-xl font-medium w-full h-full">
            Hello, my name is Mateo Restrepo. I am passionate about soccer,
            creativity, learning, and socializing. I have a strong love for
            traveling, discovering new places, and spending quality time with my
            family, friends, girlfriend, and dogs.
          </p>
          <p className="text-white text-xl font-medium w-full h-full">
            I consider myself a calm individual who is enthusiastic about
            solving problems. I have a keen interest in web development and have
            honed my skills in technologies such as React.js, Next.js,
            TailwindCSS, and TypeScript.
          </p>
        </div>
      </motion.div>
      <button onClick={onClose} className=" btn-secondary ">
        Close
      </button>
    </div>
  );
}
