"use client";

import { Section1, Section2, Section3 } from "../../components";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState(1);

  const handleSectionChange = (section: number) => {
    setActiveSection(section);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  return (
    <main className="">
      {activeSection === 1 && (
        <Section1 onSectionChange={handleSectionChange} />
      )}
      {activeSection === 2 && (
        <Section2 onSectionChange={handleSectionChange} />
      )}
      {activeSection === 3 && (
        <Section3 onSectionChange={handleSectionChange} />
      )}
    </main>
  );
}
