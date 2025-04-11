import * as React from "react";
const SvgLoaderCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#loader-circle_svg__a)">
      <mask
        id="loader-circle_svg__b"
        width={16}
        height={16}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M0 0h16v16H0z" />
      </mask>
      <g mask="url(#loader-circle_svg__b)">
        <path fill="#000" d="M8 0v4z" />
        <path
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 0v4"
        />
        <g opacity={0.5}>
          <path fill="#000" d="M8 16v-4z" />
          <path
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 16v-4"
          />
        </g>
        <g opacity={0.9}>
          <path fill="#000" d="m3.298 1.528 2.35 3.236z" />
          <path
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m3.298 1.528 2.35 3.236"
          />
        </g>
        <g opacity={0.1}>
          <path fill="#000" d="m12.702 1.528-2.35 3.236z" />
          <path
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m12.702 1.528-2.35 3.236"
          />
        </g>
        <g opacity={0.4}>
          <path fill="#000" d="m12.702 14.472-2.35-3.236z" />
          <path
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m12.702 14.472-2.35-3.236"
          />
        </g>
        <g opacity={0.6}>
          <path fill="#000" d="m3.298 14.472 2.35-3.236z" />
          <path
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m3.298 14.472 2.35-3.236"
          />
        </g>
        <g opacity={0.2}>
          <path fill="#000" d="m15.608 5.528-3.804 1.236z" />
          <path
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m15.608 5.528-3.804 1.236"
          />
        </g>
        <g opacity={0.7}>
          <path fill="#000" d="m.392 10.472 3.804-1.236z" />
          <path
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m.392 10.472 3.804-1.236"
          />
        </g>
        <g opacity={0.3}>
          <path fill="#000" d="m15.608 10.472-3.804-1.236z" />
          <path
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m15.608 10.472-3.804-1.236"
          />
        </g>
        <g opacity={0.8}>
          <path fill="#000" d="m.392 5.528 3.804 1.236z" />
          <path
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m.392 5.528 3.804 1.236"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="loader-circle_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLoaderCircle;
