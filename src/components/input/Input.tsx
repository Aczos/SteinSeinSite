import React from "react";


interface InputProps {
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputCard = ({ label, value, onChange }: InputProps) => {
  return (
    <div>
      <label className="text-1xl font-bold  flex  uppercase py-2">{label} <span className="text-red-600  ml-2">*</span></label>
      <input className="bg-black border-b-2  w-full  mx-auto lg:w-2/3"   type="text" value={value} onChange={onChange} />
    </div>
  );
};

interface TextAreaProps {
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export const TextAreaCard = ({ label, value, onChange }: TextAreaProps) => {
  return (
    <div>
      <label className="text-1xl font-bold  flex  uppercase py-2">{label}</label>
      <textarea
        className="bg-black border-b-2  w-full  mx-auto lg:w-2/3"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};



interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const CheckboxCard = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <div>
      <label className="text-1xl font-bold lg:w-2/3  uppercase py-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="mr-2"
        />
        {label}
        <span className="text-red-600  ml-2">*</span>
      </label>
    </div>
  );
};