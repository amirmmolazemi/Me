"use client";

import { motion } from "framer-motion";
import info from "@/constant/info";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto flex justify-center">
        <ul className="flex flex-col gap-8">
          {info.map((item, index) => (
            <li key={index} className="flex items-center gap-6">
              <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                <div className="text-[28px]">{item.icon}</div>
              </div>
              <div>
                <p className="text-white/60">{item.title}</p>
                <h3 className="text-xl">{item.description}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Contact;
