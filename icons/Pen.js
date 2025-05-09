import * as React from "react";
const SvgPen = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#pen_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m8.75.19.53.53 6 6 .53.53-.53.53-1.543 1.543a1.75 1.75 0 0 1-2.019.329l-2.17 3.905A4.75 4.75 0 0 1 5.397 16H0v-5.396A4.75 4.75 0 0 1 2.443 6.45l3.905-2.169a1.75 1.75 0 0 1 .329-2.02L8.22.72zM7.37 5.43l3.2 3.2-2.333 4.198a3.25 3.25 0 0 1-2.84 1.672H2.56l2.97-2.97-1.061-1.06-2.97 2.97v-2.836c0-1.18.64-2.268 1.672-2.841zm5.307 2.833a.25.25 0 0 1-.354 0l-.293-.293-4-4-.293-.293a.25.25 0 0 1 0-.354L8.75 2.311l4.94 4.939z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="pen_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPen;
