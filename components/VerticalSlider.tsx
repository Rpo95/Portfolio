"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Experience } from "../types";

interface VerticalSliderProps {
  current: number;
  experiences: Experience[];
}

export default function VerticalSlider({
  current,
  experiences,
}: VerticalSliderProps) {
  return (
    <div className="relative h-[210px] flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.7 }}
          className="absolute flex flex-col w-11/12 md:w-10/12 items-center justify-center p-6 bg-black shadow-lg rounded-lg text-center"
        >
          <h3 className="text-xl">{experiences[current].title}</h3>
          <h2 className="text-2xl font-bold">{experiences[current].company}</h2>
          <p className="text-sm text-gray-500">
            {experiences[current].duration}
          </p>
          <p className="mt-4">{experiences[current].description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
