import { useEffect } from "react";
import { ScreenShell } from "../ScreenShell";
import { motion } from "motion/react";

interface Props {
  onNext: () => void;
}

export function IntentionalPauseScreen({ onNext }: Props) {
  useEffect(() => {
    const timer = setTimeout(onNext, 4000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <ScreenShell variant="dark">
      <div className="flex-1 flex flex-col items-center justify-center px-10 text-center">
        {/* Subtle pulsing dot */}
        <motion.div
          className="w-3 h-3 rounded-full bg-[#d4b8a0] mb-10"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.h2
          className="text-[#f5e6d8] mb-4"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", lineHeight: 1.35, fontStyle: "italic" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Intentional connections<br />take a moment...
        </motion.h2>
        <motion.p
          className="text-[#b8a090]"
          style={{ fontSize: "0.85rem", lineHeight: 1.6 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Matching based on shared direction...
        </motion.p>
      </div>
      <div className="px-8 pb-10">
        <button
          onClick={onNext}
          className="w-full py-3.5 text-[#b8a090] transition-all"
          style={{ fontSize: "0.85rem" }}
        >
          Start Conversation &rsaquo;
        </button>
      </div>
    </ScreenShell>
  );
}
