import * as React from "react";
const SvgArrowMoveUnread = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#arrow-move-unread_svg__a)">
      <mask
        id="arrow-move-unread_svg__b"
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
      <g mask="url(#arrow-move-unread_svg__b)">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M9.613 1.552 8.707.646a1 1 0 0 0-1.414 0L5.47 2.47 4.94 3 6 4.06l.53-.53.72-.72v4.44H2.81l.72-.72.53-.53L3 4.94l-.53.53L.646 7.293a1 1 0 0 0 0 1.414L2.47 10.53l.53.53L4.06 10l-.53-.53-.72-.72h4.44v4.44l-.72-.72-.53-.53L4.94 13l.53.53 1.823 1.824a1 1 0 0 0 1.414 0l1.823-1.824.53-.53L10 11.94l-.53.53-.72.72V8.75h4.44l-.72.72-.53.53L13 11.06l.53-.53 1.824-1.823a1 1 0 0 0 0-1.414l-.906-.906a4 4 0 0 1-2.213-.091l.235.234.72.72H8.75V2.81l.72.72.234.235a4 4 0 0 1-.09-2.213"
          clipRule="evenodd"
        />
        <path fill="#52A8FF" d="M13.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
      </g>
    </g>
    <defs>
      <clipPath id="arrow-move-unread_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowMoveUnread;
