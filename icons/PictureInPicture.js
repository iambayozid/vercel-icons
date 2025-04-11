import * as React from "react";
const SvgPictureInPicture = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#picture-in-picture_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6.75 13.5H1.5v-11h13v5H16V2a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6.5v-1.5zm3.75-3h4v3h-4zM9 9h7v6H9z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="picture-in-picture_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPictureInPicture;
