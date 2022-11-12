import React from "react";
import { useSelector } from "react-redux";

const Alert = (): JSX.Element => {

  const alert = useSelector((state: any) => state)
  
  
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-4">
      <div
        id="alert-2"
        className="flex items-center p-4 h-3 w-full rounded-lg dark:bg-red-200"
        role="alert"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 h-5 text-red-700 dark:text-red-800"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>
        <p className="text-red-700 ml-3">{ alert?.alertState }</p>
      </div>
    </div>
  );
};

export default Alert;
