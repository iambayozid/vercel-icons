import * as React from "react";
const SvgGitBranch = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#git-branch_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M4.75 1.75V1h-1.5v8.095a3.001 3.001 0 1 0 3.671 3.592 6.75 6.75 0 0 0 5.766-5.766 3.001 3.001 0 1 0-1.512-.036 5.25 5.25 0 0 1-4.29 4.29 3 3 0 0 0-2.135-2.08zM13.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="git-branch_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGitBranch;
