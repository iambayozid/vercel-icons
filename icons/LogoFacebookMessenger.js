import * as React from "react";
const SvgLogoFacebookMessenger = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#logo-facebook-messenger_svg__a)">
      <path
        fill="url(#logo-facebook-messenger_svg__b)"
        d="M8 0C3.494 0 0 3.302 0 7.76c0 2.332.956 4.348 2.512 5.74.13.116.21.28.214.456l.044 1.424a.64.64 0 0 0 .898.566l1.588-.7a.64.64 0 0 1 .428-.032c.73.2 1.506.308 2.316.308 4.506 0 8-3.302 8-7.76S12.506 0 8 0"
      />
      <path
        fill="#fff"
        d="m3.196 10.03 2.35-3.728a1.2 1.2 0 0 1 1.736-.32l1.87 1.402a.48.48 0 0 0 .578-.002l2.524-1.916c.336-.256.776.148.552.506l-2.352 3.726a1.2 1.2 0 0 1-1.736.32l-1.87-1.402a.48.48 0 0 0-.578.002l-2.524 1.916c-.336.256-.776-.146-.55-.504"
      />
    </g>
    <defs>
      <radialGradient
        id="logo-facebook-messenger_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(2.68 16)scale(17.6)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#09F" />
        <stop offset={0.6} stopColor="#A033FF" />
        <stop offset={0.9} stopColor="#FF5280" />
        <stop offset={1} stopColor="#FF7061" />
      </radialGradient>
      <clipPath id="logo-facebook-messenger_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoFacebookMessenger;
