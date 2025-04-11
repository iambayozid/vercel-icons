import * as React from "react";
const SvgMiddleware = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#middleware_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m2.47 3.53.078.079A7 7 0 0 0 1.29 6h1.585A5.52 5.52 0 0 1 6 2.875V1.29a7 7 0 0 0-2.391 1.258l-.08-.078-1.5-1.5L1.5.44.44 1.5l.53.53zm10.982 8.861A7 7 0 0 0 14.71 10h-1.585A5.52 5.52 0 0 1 10 13.125v1.585a7 7 0 0 0 2.39-1.258l.08.078 1.5 1.5.53.53 1.06-1.06-.53-.53-1.5-1.5zm0-8.782c.571.707.998 1.52 1.258 2.391h-1.585A5.52 5.52 0 0 0 10 2.875V1.29c.871.26 1.683.687 2.39 1.258l.08-.078 1.5-1.5.53-.53 1.06 1.06-.53.53-1.5 1.5zM1.29 10h1.585A5.52 5.52 0 0 0 6 13.125v1.585a7 7 0 0 1-2.391-1.258l-.08.078-1.5 1.5-.53.53L.44 14.5l.53-.53 1.5-1.5.079-.079A7 7 0 0 1 1.29 10M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="middleware_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMiddleware;
