import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
}

export const Input = ({ label, className, ...rest }: Props) => {
  return (
    <div className=" relative my-4">
      {label && (
        <label htmlFor={label} className="text-gray-700">
          {label}
          <span className="text-red-500 required-dot">*</span>
        </label>
      )}
      <input
        {...rest}
        type="text"
        className={
          "rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" +
          (className ? ` ${className}` : "")
        }
      />
    </div>
  );
};
