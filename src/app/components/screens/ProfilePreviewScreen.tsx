import { useState, useEffect } from "react";
import { ScreenShell } from "../ScreenShell";
import { motion, AnimatePresence } from "motion/react";

const PROFILE_PHOTO = "https://images.unsplash.com/photo-1773091374080-37210994a0d5?auto=format&fit=crop&w=600&h=450&crop=faces&q=80";

interface Props {
  onNext: (action: string) => void;
}

export function ProfilePreviewScreen({ onNext }: Props) {
  const [photoRevealed, setPhotoRevealed] = useState(false);
  const [buttonsRevealed, setButtonsRevealed] = useState(false);

  useEffect(() => {
    const photoTimer = setTimeout(() => setPhotoRevealed(true), 2000);
    const buttonsTimer = setTimeout(() => setButtonsRevealed(true), 3000);
    return () => {
      clearTimeout(photoTimer);
      clearTimeout(buttonsTimer);
    };
  }, []);

  return (
    <ScreenShell variant="light">
      <div className="flex-1 flex flex-col px-5 pt-6 pb-4 overflow-y-auto">
        <motion.h2
          className="text-[#3a1f3d] text-center mb-4"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Your Intentional Profile
        </motion.h2>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-md border border-[#e8ddd6] overflow-hidden">
          {/* Photo reveal */}
          <AnimatePresence>
            {photoRevealed && (
              <motion.div
                initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
                animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <img
                  src={PROFILE_PHOTO}
                  alt="Rachel"
                  className="w-full"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="p-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3
                className="text-[#3a1f3d] mb-3"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem" }}
              >
                Rachel, 34
              </h3>
            </motion.div>

            {/* Values */}
            <motion.div
              className="mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-[#6b3a5e] mb-1" style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Values
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Family-oriented", "Growth-minded", "Loyal partnership"].map((v) => (
                  <span key={v} className="px-2.5 py-0.5 rounded-full bg-[#f5ede8] text-[#5a3550]" style={{ fontSize: "0.75rem" }}>
                    {v}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Relationship Intent */}
            <motion.div
              className="mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <p className="text-[#6b3a5e] mb-1" style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Relationship Intent
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Long-term commitment", "Marriage-focused"].map((v) => (
                  <span key={v} className="px-2.5 py-0.5 rounded-full bg-[#f5ede8] text-[#5a3550]" style={{ fontSize: "0.75rem" }}>
                    {v}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Faith Journey */}
            <motion.div
              className="mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <p className="text-[#6b3a5e] mb-1" style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Faith Journey
              </p>
              <span className="px-2.5 py-0.5 rounded-full bg-[#f5ede8] text-[#5a3550]" style={{ fontSize: "0.75rem" }}>
                Faith is an important part of life
              </span>
            </motion.div>
          </div>
        </div>

        <motion.p
          className="text-[#8a7a72] text-center mt-3"
          style={{ fontSize: "0.74rem", lineHeight: 1.5, fontStyle: "italic" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Here, people meet you through meaning — not just images.
        </motion.p>

        {/* Action Buttons */}
        <AnimatePresence>
          {buttonsRevealed && (
            <motion.div
              className="flex gap-2.5 mt-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <button
                onClick={() => onNext("say-yes")}
                className="flex-1 py-3 rounded-xl text-white"
                style={{ background: "linear-gradient(135deg, #6b3a5e, #4a2545)", fontSize: "0.82rem" }}
              >
                Say Yes
              </button>
              <button
                onClick={() => onNext("explore")}
                className="flex-1 py-3 rounded-xl border border-[#6b3a5e] text-[#5a3550]"
                style={{ fontSize: "0.82rem", background: "#faf7f4" }}
              >
                Explore Slowly
              </button>
              <button
                onClick={() => onNext("not-aligned")}
                className="flex-1 py-3 rounded-xl border border-[#d4c5c0] text-[#8a7a72]"
                style={{ fontSize: "0.82rem", background: "#faf7f4" }}
              >
                Not Aligned
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {buttonsRevealed && (
            <motion.p
              className="text-[#8a7a72] text-center mt-3 mb-1"
              style={{ fontSize: "0.74rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Choosing intentionally creates meaningful outcomes.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </ScreenShell>
  );
}
