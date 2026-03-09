import { ScreenShell } from "../ScreenShell";
import { motion } from "motion/react";

export function FinalScreen() {
  return (
    <ScreenShell variant="dark">
      <div className="flex-1 flex flex-col items-center justify-center px-10 text-center">
        <motion.p
          className="text-[#f5e6d8] mb-6"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", lineHeight: 1.4 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          This began as your vision.
        </motion.p>
        <motion.p
          className="text-[#c4a898] mb-6"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", lineHeight: 1.5, fontStyle: "italic" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
        >
          I just helped it take its first breath.
        </motion.p>
        <motion.p
          className="text-[#f5e6d8]"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", lineHeight: 1.4 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.2 }}
        >
          Now we build it together.
        </motion.p>
      </div>
    </ScreenShell>
  );
}
