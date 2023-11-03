import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export const Buttons: FC<ButtonProps> = ({ children, className, ...props }) => {
  return < button {...props} className={`${className}`}>{children}</button>
};
