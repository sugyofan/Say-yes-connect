import { useState } from "react";
import { ScreenShell } from "../ScreenShell";
import { OptionButton } from "../OptionButton";
import { motion } from "motion/react";

interface Props {
  headline: string;
  options: string[];
  footer?: string;
  onNext: () => void;
}

export function QuestionScreen({ headline, options, footer, onNext }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ScreenShell variant="light">
      <div className="flex-1 flex flex-col px-7 pt-16">
        <motion.h2
          className="text-[#3a1f3d] text-center mb-10"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.45rem", lineHeight: 1.3 }}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {headline}
        </motion.h2>
        <div className="flex flex-col gap-3">
          {options.map((option, i) => (
            <motion.div
              key={option}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            >
              <OptionButton
                label={option}
                selected={selected === option}
                onClick={() => setSelected(option)}
              />
            </motion.div>
          ))}
        </div>
        {footer && (
          <motion.p
            className="text-[#8a7a72] text-center mt-8"
            style={{ fontSize: "0.78rem", lineHeight: 1.6 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {footer}
          </motion.p>
        )}
      </div>
      <motion.div
        className="px-8 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <button
          onClick={onNext}
          className="w-full py-3.5 rounded-xl text-[#faf7f4] transition-all duration-300"
          style={{
            background: selected ? "linear-gradient(135deg, #6b3a5e, #4a2545)" : "#b8a8a0",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            letterSpacing: "0.04em",
          }}
        >
          Next &rsaquo;
        </button>
      </motion.div>
    </ScreenShell>
  );
}
