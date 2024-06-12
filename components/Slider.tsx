"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const images = ["/glamto.webp", "/aei.webp", "/teoo.svg"];
const titles = [
  "https://www.glampingdelgato.com/",
  "https://www.aeiconstructores.com/",
  "https://www.aeiconstructores.com/",
];

interface SliderProps {
  currentImage: number;
  currentTitle: any;
}

export default function Slider({ currentImage, currentTitle }: SliderProps) {
  return (
    <div className="hover:scale-95 w-5/6 md:w-3/6 h-[335px] rounded-lg shadow-md shadow-white overflow-hidden">
      <Link target="_blank" href={titles[currentTitle]}>
        <AnimatePresence initial={false}>
          <motion.img
            key={images[currentImage]}
            src={images[currentImage]}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
            className="w-full h-full rounded-lg object-cover p-1"
          />
        </AnimatePresence>
      </Link>
    </div>
  );
}
