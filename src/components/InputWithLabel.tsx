import React, { useRef } from "react";

interface InputWithLabelProps {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, type, value, onChange, name }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="border border-[#838383] focus-within:border-black rounded-sm cursor-text bg-white"
      onClick={handleFocus}
    >
      <label className="block ml-2 text-sm text-gray-700 cursor-text">{label}</label>
      <input
      name={name}
        type={type}
        value={value}
        onChange={onChange}
        ref={inputRef}
        className="px-2 w-full outline-none"
      />
    </div>
  );
};

export default InputWithLabel;
