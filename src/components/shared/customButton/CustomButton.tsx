import React from 'react';
import './CustomButton.css';

interface GeneralButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | React.ReactNode;
  backgroundColor: string;
  color: string;
  border?: string;
  borderRadius?: string;
  margin?: string;
}

interface CustomButtonProps {
  text: string | React.ReactNode;
  backgroundColor: string;
  color: string;
  border?: string;
  borderRadius?: string;
  margin?: string;
  disabled:boolean,
  rest: any;
  onClick?: () => void;
}

const CustomButton: React.FC<GeneralButtonProps> = ({
  text,
  backgroundColor,
  color,
  border,
  borderRadius,
  margin,
  onClick,
  disabled,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`custom-button ${disabled ? "disabled" : ""}`}
      style={{ backgroundColor, color, border, borderRadius, margin }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CustomButton;
