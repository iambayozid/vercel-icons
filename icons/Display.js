import * as React from "react";
const SvgDisplay = (props) => (
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
      d="M14.866 14.704A50 50 0 0 0 12 14.392v-1.504q1.252.097 2.5.255V9H16v5.86l-.852-.117zM16 7V1.64l-.852.117-.282.039q-1.428.197-2.866.312v1.504q1.253-.098 2.5-.255V7zm-6-4.773v1.501a52 52 0 0 1-4 0v-1.5q2 .078 4-.001m0 12.046V12.77a52 52 0 0 0-4 0v1.502a50 50 0 0 1 4 .001m-6 .12q-1.436.114-2.866.311l-.282.039L0 14.86V9h1.5v4.143q1.248-.158 2.5-.255zM1.5 7V3.357q1.248.158 2.5.255V2.108a50 50 0 0 1-2.866-.312l-.282-.039L0 1.639V7z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDisplay;
