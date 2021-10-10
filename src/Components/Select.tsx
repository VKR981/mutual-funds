import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"select"> {
  options: string[];
}

export const Select = ({ options, ...rest }: Props) => {
  return (
    <div>
      <select
        {...rest}
        className="focus:ring-indigo-500 py-2 px-4 my-2 border-gray-300  bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
