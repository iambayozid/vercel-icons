import * as React from "react";
const SvgKey = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#key_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6.5 5.5a4 4 0 1 1 2.716 3.79l-.117-.04H7.25v3H5v2.25H1.5v-2.918l4.88-4.437.327-.297-.101-.43c-.07-.3-.106-.609-.106-.918m4-5.5a5.5 5.5 0 0 0-5.44 6.318L.245 10.695 0 10.918V16h6.5v-2.25h2.25v-3h.106A5.5 5.5 0 1 0 10.5 0m0 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="key_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKey;
