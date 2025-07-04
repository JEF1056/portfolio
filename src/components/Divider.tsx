import React from "react";

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className = "" }) => {
  return (
    <div className={`w-full border-t border-[#f2f2f2] my-8 ${className}`} />
  );
};

export default Divider;
