"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Reveal({ children, className = "", delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2, margin: "0px 0px -80px" });
  const offset = direction === "left" ? { x: -34, y: 0 } : direction === "right" ? { x: 34, y: 0 } : { x: 0, y: 28 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
