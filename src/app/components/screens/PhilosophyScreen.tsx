import { ScreenShell } from "../ScreenShell";
import { motion } from "motion/react";

interface Props {
  onNext: () => void;
}

export function PhilosophyScreen({ onNext }: Props) {
  return (
    <ScreenShell variant="dark">
      <div className="flex-1 flex flex-col justify-center px-10 text-center">
        <motion.h2
          className="text-[#f5e6d8] mb-8"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", lineHeight: 1.3 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Something different<br />starts here.
        </motion.h2>
        <motion.p
          className="text-[#c4a898] mb-4"
          style={{ fontSize: "0.88rem", lineHeight: 1.7 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          This isn't about endless scrolling.
        </motion.p>
        <motion.p
          className="text-[#c4a898] mb-4"
          style={{ fontSize: "0.88rem", lineHeight: 1.7 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          It's about meeting someone whose direction aligns with yours.
        </motion.p>
        <motion.p
          className="text-[#b8a090] mt-6"
          style={{ fontSize: "0.82rem", lineHeight: 1.7, fontStyle: "italic" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          Slow enough to be intentional.<br />Clear enough to feel safe.
        </motion.p>
      </div>
      <motion.div
        className="px-8 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <button
          onClick={onNext}
          className="w-full flex items-center justify-center gap-2 py-4 text-[#d4b8a0] transition-all"
          style={{ fontSize: "0.95rem", letterSpacing: "0.03em" }}
        >
          Continue <span style={{ fontSize: "1.1rem" }}>&rsaquo;</span>
        </button>
      </motion.div>
    </ScreenShell>
  );
}
