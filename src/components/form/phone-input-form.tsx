import type { InputHTMLAttributes, SelectHTMLAttributes } from "react";

interface PhoneInputProps {
  label: string;
  id: string;
  required?: boolean;
  error?: string;
  selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export default function PhoneInput({
  label,
  id,
  required,
  error,
  selectProps,
  inputProps,
}: Readonly<PhoneInputProps>) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div className="flex gap-2">
        <select
          className={`
            w-27.5 px-3 py-3 rounded-md border
            border-gray-300 bg-white text-sm cursor-pointer
            appearance-none
            focus:outline-none focus:border-primary
            ${error ? "border-red-500" : ""}
          `}
          {...selectProps}
        >
          <option value="+62">🇮🇩 +62</option>
          <option value="+65">🇸🇬 +65</option>
          <option value="+60">🇲🇾 +60</option>
        </select>
        <input
          id={id}
          type="tel"
          className={`
            flex-1 px-4 py-3 rounded-md border
            border-gray-300 focus:outline-none
            focus:border-primary
            ${error ? "border-red-500" : ""}
          `}
          {...inputProps}
        />
      </div>

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
