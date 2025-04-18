import * as React from "react";
const SvgPreviewDocument = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#preview-document_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M13.5 4.674V9.09l1.5 1.616V4.449a1 1 0 0 0-.336-.747l-3.88-3.45A1 1 0 0 0 10.12 0H1v13.5A2.5 2.5 0 0 0 3.5 16h8.227l-.425-.459-.967-1.041H3.5a1 1 0 0 1-1-1v-12h7.43zM8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4M4.5 8a3.5 3.5 0 1 1 6.535 1.744l3.015 3.246.51.55-1.1 1.02-.51-.55-2.928-3.153A3.5 3.5 0 0 1 4.5 8"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="preview-document_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPreviewDocument;
