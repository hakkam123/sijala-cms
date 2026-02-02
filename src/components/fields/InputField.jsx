// Custom components
import React from "react";

function InputField(props) {
  const { label, id, extra, type, placeholder, variant, state, disabled } =
    props;

  // New auth styling for login page redesign
  const isNewAuth = variant === "auth-new";

  return (
    <div className={`${extra}`}>
      <label
        htmlFor={id}
        className={`text-sm text-navy-700 dark:text-white ${isNewAuth
            ? "mb-1.5 block font-semibold text-gray-800"
            : variant === "auth"
              ? "ml-1.5 font-medium"
              : "ml-3 font-bold"
          }`}
      >
        {label}
      </label>
      <input
        disabled={disabled}
        type={type}
        id={id}
        placeholder={placeholder}
        className={`mt-2 flex w-full items-center justify-center text-sm outline-none transition-all duration-200 ${isNewAuth
            ? "h-12 rounded-lg border border-gray-300 bg-white px-4 placeholder:text-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
            : disabled === true
              ? "h-12 rounded-xl border !border-none !bg-gray-100 p-3 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
              : state === "error"
                ? "h-12 rounded-xl border border-red-500 bg-white/0 p-3 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                : state === "success"
                  ? "h-12 rounded-xl border border-green-500 bg-white/0 p-3 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                  : "h-12 rounded-xl border border-gray-200 bg-white/0 p-3 dark:!border-white/10 dark:text-white"
          }`}
      />
    </div>
  );
}

export default InputField;
