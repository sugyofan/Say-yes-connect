import { useState, useEffect } from "react";
import { ScreenShell } from "../ScreenShell";
import { motion, AnimatePresence } from "motion/react";

const PROFILE_PHOTO = "https://images.unsplash.com/photo-1600361789998-a31af83ce19b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3QlMjB3YXJtJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzczMDkyMDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

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
      <div className="flex-1 flex flex-col px-7 pt-10 pb-6 overflow-y-auto">
        <motion.h2
          className="text-[#3a1f3d] text-center mb-6"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem" }}
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
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 200 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <img
                  src={PROFILE_PHOTO}
                  alt="Rachel"
                  className="w-full h-[200px] object-cover object-top"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="p-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3
                className="text-[#3a1f3d] mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem" }}
              >
                Rachel, 34
              </h3>
            </motion.div>

            {/* Values */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-[#6b3a5e] mb-1.5" style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Values
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Family-oriented", "Growth-minded", "Loyal partnership"].map((v) => (
                  <span key={v} className="px-3 py-1 rounded-full bg-[#f5ede8] text-[#5a3550]" style={{ fontSize: "0.78rem" }}>
                    {v}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Relationship Intent */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <p className="text-[#6b3a5e] mb-1.5" style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Relationship Intent
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Long-term commitment", "Marriage-focused"].map((v) => (
                  <span key={v} className="px-3 py-1 rounded-full bg-[#f5ede8] text-[#5a3550]" style={{ fontSize: "0.78rem" }}>
                    {v}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Faith Journey */}
            <motion.div
              className="mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <p className="text-[#6b3a5e] mb-1.5" style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Faith Journey
              </p>
              <span className="px-3 py-1 rounded-full bg-[#f5ede8] text-[#5a3550]" style={{ fontSize: "0.78rem" }}>
                Faith is an important part of life
              </span>
            </motion.div>
          </div>
        </div>

        <motion.p
          className="text-[#8a7a72] text-center mt-5"
          style={{ fontSize: "0.76rem", lineHeight: 1.6, fontStyle: "italic" }}
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
              className="flex gap-2.5 mt-6"
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
              className="text-[#8a7a72] text-center mt-4 mb-2"
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
