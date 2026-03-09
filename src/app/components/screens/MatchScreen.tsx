import { ScreenShell } from "../ScreenShell";
import { motion } from "motion/react";
import appIcon from "figma:asset/566ca345ea51bf3e951e33fb0dae721ad0e0813c.png";

interface Props {
  onNext: () => void;
}

export function MatchScreen({ onNext }: Props) {
  return (
    <ScreenShell variant="gradient">
      <div className="flex-1 flex flex-col items-center justify-center px-10 text-center">
        <motion.img
          src={appIcon}
          alt="SayYes"
          className="w-16 h-16 rounded-xl mb-8 opacity-60"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.h2
          className="text-[#f5e6d8] mb-4"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", lineHeight: 1.3 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          You both chose intention.
        </motion.h2>
        <motion.p
          className="text-[#c4a898]"
          style={{ fontSize: "0.88rem", lineHeight: 1.7 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Start with conversation.<br />Build with purpose.
        </motion.p>
      </div>
      <motion.div
        className="px-8 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <button
          onClick={onNext}
          className="w-full py-4 rounded-xl text-[#faf7f4] transition-all"
          style={{
            background: "linear-gradient(135deg, #8a5a7e, #6b3a5e)",
            fontSize: "0.9rem",
            letterSpacing: "0.04em",
          }}
        >
          Continue &rsaquo;
        </button>
      </motion.div>
    </ScreenShell>
  );
}
