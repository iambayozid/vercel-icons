import * as React from "react";
const SvgToggleOnAltUnread = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#toggle-on-alt-unread_svg__a)">
      <path fill="#52A8FF" d="M13.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6 2h3.531c-.062.502-.03 1.01.095 1.5H6a4.5 4.5 0 0 0 0 9h4a4.5 4.5 0 0 0 4.22-6.065c.506-.092.98-.279 1.4-.542A6 6 0 0 1 10 14H6A6 6 0 1 1 6 2m4 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="toggle-on-alt-unread_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgToggleOnAltUnread;
