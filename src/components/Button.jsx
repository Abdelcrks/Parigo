import { useState,useEffect } from "react";


export const Button = ({ children,
    className = "",
    type = "button",         
    ...props}) => {

  return (
    <button type={type} {...props} className="text-xl w-32 h-12 rounded-3xl bg-white text-blue-400 relative overflow-hidden group z-10 hover:text-white duration-300 cursor-pointer
    dark:text-blue-950">
      <span className="absolute bg-sky-400 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all
      dark:bg-sky-800" />
      <span className="absolute bg-sky-500 dark:bg-sky-950 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all" />
      {children}
    </button>
  );
}


