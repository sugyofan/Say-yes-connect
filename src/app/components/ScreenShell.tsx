import { ReactNode } from "react";
import { motion } from "motion/react";

interface ScreenShellProps {
  children: ReactNode;
  variant?: "light" | "dark" | "gradient";
  className?: string;
}

export function ScreenShell({ children, variant = "light", className = "" }: ScreenShellProps) {
  const bgClass =
    variant === "dark"
      ? "bg-gradient-to-b from-[#3a1f3d] via-[#2d1530] to-[#1a0e1c]"
      : variant === "gradient"
      ? "bg-gradient-to-b from-[#4a2545] via-[#3a1f3d] to-[#2a1428]"
      : "bg-[#faf7f4]";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`w-full max-w-[390px] min-h-[100dvh] mx-auto flex flex-col relative overflow-hidden ${bgClass} ${className}`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {children}
    </motion.div>
  );
}
