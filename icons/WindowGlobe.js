import * as React from "react";
const SvgWindowGlobe = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#window-globe_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M.75 0H0v10.5A2.5 2.5 0 0 0 2.5 13h2.75v-1.5H2.5a1 1 0 0 1-1-1v-9h13V6H16V0zm3 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m4.48 7.5c-.03.815-.136 1.628-.318 2.428a3.25 3.25 0 0 0 1.8-2.428zm-1.425 2.736a3.3 3.3 0 0 1-.61 0A12.2 12.2 0 0 1 10.77 12h1.46c-.038.925-.18 1.843-.425 2.736M13.23 11a13.2 13.2 0 0 0-.319-2.428 3.25 3.25 0 0 1 1.8 2.428zm-1.001 0a12.2 12.2 0 0 0-.425-2.736 3.3 3.3 0 0 0-.61 0c-.244.893-.387 1.81-.424 2.736zm-2.46 0c.03-.815.136-1.628.318-2.428A3.25 3.25 0 0 0 8.288 11zm.318 3.428c-.182-.8-.288-1.613-.319-2.428H8.29a3.25 3.25 0 0 0 1.799 2.428zM11.5 16a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="window-globe_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWindowGlobe;
