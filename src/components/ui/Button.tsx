import Link from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type BaseButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
};

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-lg transition duration-300 inline-block text-center";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    outline: "bg-white hover:bg-gray-100 text-blue-600 border border-blue-600",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700"
  };

  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-8 text-base",
    lg: "py-4 px-10 text-lg"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props as AnchorHTMLAttributes<HTMLAnchorElement>}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props as ButtonHTMLAttributes<HTMLButtonElement>}>
      {children}
    </button>
  );
}
