import { motion } from "motion/react";

export function FinalScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full max-w-[390px] min-h-[100dvh] mx-auto flex flex-col relative overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Warm bokeh background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(170deg, #e8d5c4 0%, #d4bfae 30%, #c9b09a 50%, #d6c2b0 70%, #e0cfbf 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 120px 120px at 75% 25%, rgba(255,245,230,0.6) 0%, transparent 70%)",
            "radial-gradient(ellipse 90px 90px at 85% 45%, rgba(255,240,220,0.5) 0%, transparent 70%)",
            "radial-gradient(ellipse 150px 150px at 60% 70%, rgba(255,248,235,0.4) 0%, transparent 70%)",
            "radial-gradient(ellipse 80px 80px at 30% 80%, rgba(255,242,225,0.45) 0%, transparent 70%)",
            "radial-gradient(ellipse 60px 60px at 20% 35%, rgba(255,245,230,0.35) 0%, transparent 70%)",
            "radial-gradient(ellipse 100px 100px at 50% 50%, rgba(255,250,240,0.2) 0%, transparent 70%)",
          ].join(", "),
        }}
      />

      <div className="flex-1 flex flex-col items-center justify-center px-10 text-center relative z-10">
        <motion.p
          className="mb-7"
          style={{ fontWeight: 600, fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", lineHeight: 1.4, color: "#3a2a2a" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          This began as your vision.
        </motion.p>
        <motion.p
          className="mb-7"
          style={{ fontWeight: 500, fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", lineHeight: 1.5, fontStyle: "italic", color: "#5a4545" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
        >
          I just helped it take its first breath.
        </motion.p>
        <motion.div
          className="w-12 h-[1px] mb-7"
          style={{ background: "#8a7065" }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.5, scaleX: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        />
        <motion.p
          style={{ fontWeight: 600, fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", lineHeight: 1.4, color: "#3a2a2a" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.2 }}
        >
          Now we build it together.
        </motion.p>
      </div>
    </motion.div>
  );
}
