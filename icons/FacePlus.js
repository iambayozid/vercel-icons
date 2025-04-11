import * as React from "react";
const SvgFacePlus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#face-plus_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M12.375 5.375v-1.75h-1.75v-1.25h1.75V.625h1.25v1.75h1.75v1.25h-1.75v1.75zM7.5 2.5a6 6 0 1 0 5.826 4.56l1.457-.36A7.5 7.5 0 1 1 9.3 1.218l-.36 1.457A6 6 0 0 0 7.5 2.5M4.788 9.894l.395.485a2.98 2.98 0 0 0 2.318 1.101c.935 0 1.77-.428 2.318-1.101l.395-.485.97.79-.396.484A4.23 4.23 0 0 1 7.5 12.73c-1.326 0-2.51-.61-3.287-1.562l-.395-.484zM5.5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="face-plus_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFacePlus;
