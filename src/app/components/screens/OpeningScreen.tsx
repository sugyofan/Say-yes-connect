import { ScreenShell } from "../ScreenShell";
import { motion } from "motion/react";
import appIcon from "../../../assets/say-yes_logo.png";

interface Props {
  onNext: () => void;
}

export function OpeningScreen({ onNext }: Props) {
  return (
    <ScreenShell variant="gradient">
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <motion.img
          src={appIcon}
          alt="SayYes Connect"
          className="w-40 h-40 rounded-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.h1
          className="text-[#f5e6d8] mb-3"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", lineHeight: 1.1 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Say Yes.
        </motion.h1>
        <motion.p
          className="text-[#d4b8a0] mb-2"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontStyle: "italic" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          True Connection. True Love.
        </motion.p>
        <motion.p
          className="text-[#b8a090] mt-12"
          style={{ fontSize: "0.85rem", lineHeight: 1.6 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Dating designed for people<br />who are ready to mean it.
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
          className="w-full py-4 rounded-xl text-[#faf7f4] transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #6b3a5e, #4a2545)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.95rem",
            letterSpacing: "0.05em",
          }}
        >
          Begin Intentionally
        </button>
      </motion.div>
    </ScreenShell>
  );
}
