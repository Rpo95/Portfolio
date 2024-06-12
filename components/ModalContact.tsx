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
        className="bg-transparent w-3/6 h-4/6 md:h-2/6 lg:w-3/6 lg:h-2/6 shadow-lg shadow-white p-6 "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex py-10 justify-center  items-center w-full h-full">
          <SocialMedia />
        </div>
      </motion.div>
      <button onClick={onClose} className=" btn-secondary ">
        Close
      </button>
    </div>
  );
}
