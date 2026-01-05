type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  type = "button",
  href,
  onClick,
  disabled = false,
}: Readonly<ButtonProps>) {
  const base =
    "flex items-center justify-center gap-3 w-full font-bold py-2 rounded-lg transition focus:outline-none";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-secondary text-primary hover:bg-secondary-hover",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  const disabledStyle = "opacity-50 cursor-not-allowed";

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${
        disabled ? disabledStyle : ""
      }`}
    >
      {children}
    </button>
  );
}
