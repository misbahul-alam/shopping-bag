"use client";
import React, { useEffect, useState } from "react";
import { HiEye } from "react-icons/hi";
import { HiEyeOff } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
interface TextFieldProps {
  label: string;
  name: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  require?: boolean;
  icon?: React.ReactNode;
  type?: "text" | "email" | "password" | "search" | "tel" | "url";
}

export default function TextField({
  label,
  name,
  className,
  onClick,
  icon,
  require = false,
  disabled,
  type = "text",
}: TextFieldProps) {
  const [show, setShow] = useState(false);
  const [types, setTypes] = useState(type);

  const toggle = () => {
    setShow(!show);
    if (types === "password") {
      setTypes("text");
    } else {
      setTypes("password");
    }
  };

  useEffect(() => {
    if (type != "password") {
      setTypes(type);
    }
  }, [type]);

  return (
    <div>
      <label className="label pb-0">
        <span className="label-text">{label}</span>
      </label>
      <div
        className={twMerge(
          "input input-lg rounded-lg input-bordered flex items-center gap-2 w-full focus-within:outline-none  focus-within:border-gray-300",
          className
        )}
      >
        <span className="h-5 opacity-70 text-xl">{icon}</span>

        <input
          type={types ?? "text"}
          name={name ?? "text"}
          className="grow w-full text-base"
          placeholder={label}
          onClick={onClick}
          required={require}
          disabled={disabled}
        />
        {type === "password" &&
          (show ? (
            <HiEyeOff
              className="h-5 opacity-70 text-xl cursor-pointer"
              onClick={toggle}
            />
          ) : (
            <HiEye
              className="h-5 opacity-70 text-xl cursor-pointer"
              onClick={toggle}
            />
          ))}
      </div>
    </div>
  );
}
