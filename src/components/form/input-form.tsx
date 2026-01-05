import type { InputHTMLAttributes } from "react";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function InputForm({
  label,
  id,
  error,
  className,
  ...props
}: Readonly<InputFormProps>) {
  return (
    <div className="flex flex-col gap-1">
      {/* Label */}
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Input */}
      <input
        id={id}
        className={`
          border border-gray-300 rounded-lg px-4 py-2
          focus:outline-none focus:ring-2
          ${error ? "border-red-500 focus:ring-red-400" : "focus:ring-primary"}
          ${className ?? ""}
        `}
        {...props}
      />

      {/* Error */}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
