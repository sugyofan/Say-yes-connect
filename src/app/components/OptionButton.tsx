import { useState } from "react";

interface OptionButtonProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export function OptionButton({ label, selected = false, onClick }: OptionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-3.5 px-6 rounded-xl border transition-all duration-300 text-center ${
        selected
          ? "bg-[#4a2545] text-[#f5e6d8] border-[#4a2545]"
          : "bg-white/80 text-[#3a1f3d] border-[#d4c5c0] hover:border-[#4a2545] hover:bg-[#f5ede8]"
      }`}
      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
    >
      {label}
    </button>
  );
}
