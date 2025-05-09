import * as React from "react";
const SvgWebhook = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#webhook_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M5.835 3.25a2.5 2.5 0 0 0 .915 3.415l.645.372-.368.648L5.146 11a1.25 1.25 0 1 1-1.305-.74L5.39 7.532a4.001 4.001 0 1 1 6.2-1.266l-1.094-1.928A2.5 2.5 0 0 0 5.835 3.25M9.146 5a1.25 1.25 0 1 0-1.305.74l1.882 3.316.373.657.654-.378a2.5 2.5 0 1 1 .16 4.415H8.693a4 4 0 1 0 1.997-6.03zm4.104 6.5a1.25 1.25 0 0 1-2.25.75H7.93a4 4 0 1 1-4.255-4.737L2.581 9.441A2.5 2.5 0 1 0 6.5 11.5v-.75H11a1.25 1.25 0 0 1 2.25.75"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="webhook_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWebhook;
