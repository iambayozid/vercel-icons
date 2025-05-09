import * as React from "react";
const SvgLogoSlackColor = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#logo-slack-color_svg__a)">
      <mask
        id="logo-slack-color_svg__b"
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
      <g mask="url(#logo-slack-color_svg__b)">
        <path
          fill="#E01E5A"
          d="M3.427 10.079c0 .92-.743 1.663-1.663 1.663a1.663 1.663 0 1 1-.001-3.326h1.663zm.831 0c0-.92.744-1.663 1.663-1.663.92 0 1.663.743 1.663 1.663v4.157c0 .92-.743 1.663-1.663 1.663s-1.663-.743-1.663-1.663z"
        />
        <path
          fill="#36C5F0"
          d="M5.921 3.402c-.92 0-1.663-.744-1.663-1.663 0-.92.744-1.663 1.663-1.663.92 0 1.663.743 1.663 1.663v1.663zm0 .844c.92 0 1.663.743 1.663 1.663s-.743 1.663-1.663 1.663h-4.17c-.92 0-1.663-.744-1.663-1.663 0-.92.743-1.663 1.663-1.663z"
        />
        <path
          fill="#2EB67D"
          d="M12.586 5.909c0-.92.743-1.663 1.663-1.663s1.663.743 1.663 1.663-.744 1.663-1.663 1.663h-1.663zm-.832 0c0 .92-.743 1.663-1.663 1.663s-1.663-.744-1.663-1.663v-4.17c0-.92.744-1.663 1.663-1.663.92 0 1.663.743 1.663 1.663z"
        />
        <path
          fill="#ECB22E"
          d="M10.091 12.573c.92 0 1.663.743 1.663 1.663s-.743 1.663-1.663 1.663-1.663-.743-1.663-1.663v-1.663zm0-.831c-.92 0-1.663-.744-1.663-1.663 0-.92.744-1.663 1.663-1.663h4.17c.92 0 1.663.743 1.663 1.663s-.743 1.663-1.663 1.663z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="logo-slack-color_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoSlackColor;
