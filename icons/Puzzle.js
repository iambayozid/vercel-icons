import * as React from "react";
const SvgPuzzle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 14.25V10l.671.112a2 2 0 0 0 2.329-1.973v-.278a2 2 0 0 0-2.329-1.973L12.25 6V1.75H8.235l.073.754a1.821 1.821 0 1 1-3.627.01l.069-.764h-4v12.5z"
    />
  </svg>
);
export default SvgPuzzle;
