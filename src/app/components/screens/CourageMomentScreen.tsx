import { ScreenShell } from "../ScreenShell";
import { motion } from "motion/react";

interface Props {
  onNext: () => void;
}

export function CourageMomentScreen({ onNext }: Props) {
  return (
    <ScreenShell variant="gradient">
      <div className="flex-1 flex flex-col items-center justify-center px-10 text-center">
        <motion.div
          className="w-8 h-[1px] bg-[#d4b8a0] mb-10 opacity-40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        />
        <motion.h2
          className="text-[#f5e6d8] mb-6"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.55rem", lineHeight: 1.35, fontStyle: "italic" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Real love requires<br />real courage.
        </motion.h2>
        <motion.p
          className="text-[#c4a898]"
          style={{ fontSize: "0.85rem", lineHeight: 1.8 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          You chose intention over impulse.<br />
          Direction over distraction.<br />
          That changes everything.
        </motion.p>
      </div>
      <motion.div
        className="px-8 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <button
          onClick={onNext}
          className="w-full flex items-center justify-center gap-2 py-4 text-[#d4b8a0] transition-all"
          style={{ fontSize: "0.9rem", letterSpacing: "0.03em" }}
        >
          Continue &rsaquo;
        </button>
      </motion.div>
    </ScreenShell>
  );
}
