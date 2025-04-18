import * as React from "react";
const SvgLogoNode = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#logo-node_svg__a)">
      <mask
        id="logo-node_svg__b"
        width={14}
        height={18}
        x={1}
        y={-1}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m7.623.101-6.246 3.62A.76.76 0 0 0 1 4.377v7.244c0 .27.143.52.377.655L7.624 15.9a.75.75 0 0 0 .754 0l6.245-3.623a.76.76 0 0 0 .377-.655V4.377a.76.76 0 0 0-.378-.656L8.378.1a.76.76 0 0 0-.756 0"
        />
      </mask>
      <g mask="url(#logo-node_svg__b)">
        <path
          fill="url(#logo-node_svg__c)"
          d="M21.311 3.106 3.712-5.555l-9.024 18.483 17.6 8.661L21.31 3.106z"
        />
      </g>
      <mask
        id="logo-node_svg__d"
        width={14}
        height={16}
        x={1}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="M1.155 12.08c.06.078.134.146.222.196l5.358 3.108.892.515a.76.76 0 0 0 .583.071l6.588-12.11a.8.8 0 0 0-.176-.14l-4.09-2.37L8.372.1a.8.8 0 0 0-.196-.079l-7.02 12.06z"
        />
      </mask>
      <g mask="url(#logo-node_svg__d)">
        <path
          fill="url(#logo-node_svg__e)"
          d="M-6.455 5.668 5.972 22.555l16.435-12.191L9.98-6.523-6.455 5.667z"
        />
      </g>
      <mask
        id="logo-node_svg__f"
        width={14}
        height={16}
        x={1}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="M7.925.004a.8.8 0 0 0-.302.097l-6.228 3.61 6.716 12.28a.8.8 0 0 0 .268-.092l6.246-3.623a.76.76 0 0 0 .365-.517L8.144.017a.8.8 0 0 0-.215-.013"
        />
      </mask>
      <g mask="url(#logo-node_svg__f)">
        <path fill="url(#logo-node_svg__g)" d="M1.395.001v15.99h13.592V.002z" />
      </g>
    </g>
    <defs>
      <linearGradient
        id="logo-node_svg__c"
        x1={12.5}
        x2={3.4}
        y1={-1.2}
        y2={17.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.3} stopColor="#3E863D" />
        <stop offset={0.5} stopColor="#55934F" />
        <stop offset={0.8} stopColor="#5AAD45" />
      </linearGradient>
      <linearGradient
        id="logo-node_svg__e"
        x1={-0.2}
        x2={16.3}
        y1={14.2}
        y2={2.1}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.6} stopColor="#3E863D" />
        <stop offset={0.7} stopColor="#619857" />
        <stop offset={1} stopColor="#76AC64" />
      </linearGradient>
      <linearGradient
        id="logo-node_svg__g"
        x1={1.4}
        x2={15}
        y1={8}
        y2={8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.2} stopColor="#6BBF47" />
        <stop offset={0.4} stopColor="#79B461" />
        <stop offset={0.5} stopColor="#75AC64" />
        <stop offset={0.7} stopColor="#659E5A" />
        <stop offset={0.9} stopColor="#3E863D" />
      </linearGradient>
      <clipPath id="logo-node_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoNode;
