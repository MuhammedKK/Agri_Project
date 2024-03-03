// Button.tsx
import React, { ReactNode } from "react";

interface ButtonProps {
  label: string;
  fullwidth?: boolean;
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  fullwidth = false,
  bgColor = "bg-blue-500",
  textColor = "text-white",
  onClick,
}: ButtonProps) => {
  const fullWidthClass = fullwidth ? "w-full" : "max-w-md";
  const buttonClasses = `py-2 px-4 ${fullWidthClass} ${bgColor} ${textColor} rounded focus:outline-none focus:ring focus:border-blue-300 w-4/5`;

  return (
    <button style={{backgroundColor: bgColor}} className={buttonClasses} onClick={onClick}>
      {label}
      
    </button>
  );
};

export default Button;
