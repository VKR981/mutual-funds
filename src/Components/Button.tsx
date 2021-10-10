import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}
export const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button
      {...rest}
      type="button"
      className={
        "py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg my-4" +
        (className ? ` ${className}` : "")
      }
    >
      {children}
    </button>
  );
};
