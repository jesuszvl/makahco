import React from "react";

export default function MenuIcon({
  width = 32,
  height = 32,
  stroke = "#ffffff",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-menu-2"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={stroke}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 6l16 0"></path>
      <path d="M4 12l16 0"></path>
      <path d="M4 18l16 0"></path>
    </svg>
  );
}
