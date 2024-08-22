"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const NotFound = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-12 md:py-16 lg:py-20"
    >
      <div className="container mx-auto flex justify-center px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-accent mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10">
            the page you are looking for does not exist.
          </p>
          <Link href="/">
            <Button className="font-semibold px-6 py-3 text-sm md:text-base">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default NotFound;
