import * as React from "react";
const SvgCloudDownload = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#cloud-download_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M4.875 1.5A3.375 3.375 0 0 0 1.5 4.875v1.529c0 .818.377 1.547.97 2.024l.584.47-.94 1.169-.584-.47A4.09 4.09 0 0 1 0 6.404V4.875a4.875 4.875 0 0 1 9.245-2.163c.108.218.267.288.356.288h2.649a3.75 3.75 0 0 1 2.463 6.578l-.565.492-.986-1.13.566-.493A2.25 2.25 0 0 0 12.25 4.5H9.601c-.806 0-1.41-.538-1.7-1.122A3.38 3.38 0 0 0 4.875 1.5M8.75 13.44l1.97-1.97.53-.53L12.31 12l-.53.53-3.073 3.074a1 1 0 0 1-1.414 0L4.22 12.53 3.69 12l1.06-1.06.53.53 1.97 1.97V7h1.5z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="cloud-download_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCloudDownload;
