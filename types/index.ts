import { MouseEventHandler } from "react";
export interface ButtonCustomProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean;
}

export interface Experience {
    title: string;
    company: string;
    duration: string;
    description: string;
  }
  
  export const experiences: Experience[] = [
    {
      title: "Frontend Developer",
      company: "PrevalentWare",
      duration: "April 2021 - April 2023",
      description: "Worked on creating beautiful and responsive web applications using Nextjs, React and TailwindCSS."
    },
    {
      title: "Wooden Boss",
      company: "Empacol",
      duration: "Jun 2023 - Dec 2023",
      description: "Worked in the wood department, handling billing.",
    },
    
    {
      title: "CEO",
      company: "Glamto",
      duration: "April 2024 - Present",
      description: "I am working at Glamto, a cat daycare and gym facility.",
    },
    
    
    // Add more experiences here...
  ];