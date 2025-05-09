import * as React from "react";
const SvgLayout = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M14.5 2.5h-13v2.505h13zm0 3.755H6.245V13.5H13.5a1 1 0 0 0 1-1zm-9.505 0H1.5V12.5a1 1 0 0 0 1 1h2.495zM1.5 1H0v11.5A2.5 2.5 0 0 0 2.5 15h11a2.5 2.5 0 0 0 2.5-2.5V1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLayout;
