import Link from "next/link";
import React from "react";

type ButtonProps = {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  form?: string;
  href?: string;
  id?: string;
  className?: string;
};

export const Button = ({
  label,
  onClick,
  id,
  type = "button",
  href = "",
  disabled = false,
  className = "",
}: ButtonProps) => {
  return (
    <>
      {href !== "" ? (
        <Link href={href}>
          <button
            id={id}
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={
              "bg-green-400 w-32 h-12 rounded-lg hover:brightness-75" +
              " " +
              className
            }
          >
            <h2>{label}</h2>
          </button>
        </Link>
      ) : (
        <button
          id={id}
          onClick={onClick}
          type={type}
          disabled={disabled}
          className={
            "bg-green-500 w-32 h-12 rounded-lg hover:brightness-75" +
            " " +
            className
          }
        >
          <h2>{label}</h2>
        </button>
      )}
    </>
  );
};
