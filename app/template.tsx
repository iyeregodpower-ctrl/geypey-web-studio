"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // Starts slightly off-screen to the right
      initial={{ opacity: 0, x: 40 }}
      
      // Glides smoothly into the center
      animate={{ opacity: 1, x: 0 }}
      
      // Premium spring physics
      transition={{ type: "spring", stiffness: 60, damping: 20 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}