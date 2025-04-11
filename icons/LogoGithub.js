import * as React from "react";
const SvgLogoGithub = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#logo-github_svg__a)">
      <mask
        id="logo-github_svg__b"
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
      <g mask="url(#logo-github_svg__b)">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M8 0a7.997 7.997 0 0 0-2.53 15.585c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.939-.82-1.129-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.949 0-.87.31-1.589.82-2.149-.08-.2-.36-1.02.08-2.12 0 0 .67-.209 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.039 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.068-1.87 3.748-3.65 3.948.29.25.54.73.54 1.48 0 1.07-.01 1.929-.01 2.199 0 .21.15.46.55.38a8.01 8.01 0 0 0 4.841-10.65A8 8 0 0 0 8 0"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="logo-github_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoGithub;
