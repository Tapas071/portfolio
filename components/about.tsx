"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a aspiring software engineer from India. I am currently pursuing
        Mechnical Engineering from Jadavpur University, Kolkata. I am a
        self-taught developer and I love to build things for the web using
        latest Technologies. I am passionate about building products that are
        accessible to everyone and make a difference in people's lives. I have
        solved more than 850 question on Leetcode and I am a 3 star coder on
        Codechef. I love solving complex problems using Data Structure and
        Algorithm and Computer Technologies. I currently looking an opportunity
        to work as a Software Developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        Football and Cricket, watching movies, reading non-fiction. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.I find joy in
        collaborating with people and learn something valuable and make good
        memories with them. I am currently studying about{" "}
        <span className="font-medium">
          Ancient History and Modern Psychology 🧠
        </span>
        .
      </p>
    </motion.section>
  );
}
