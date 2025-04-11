import * as React from "react";
const SvgWrench = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#wrench_svg__a)">
      <path
        fill="#fff"
        d="m12.798 1.242.53.53.729-.728-.917-.47zm-2.84 2.84-.531-.53zM6.583 6.957l.53.53.354-.353-.19-.462zm2.518 2.481.275-.697-.457-.18-.348.347zm5.684-6.183.672-.333-.464-.936-.739.739zM12.267.712l-2.84 2.84 1.06 1.061 2.841-2.84zM10.75 1.5c.616 0 1.195.148 1.706.41L13.14.574A5.2 5.2 0 0 0 10.75 0zM7 5.25a3.75 3.75 0 0 1 3.75-3.75V0A5.25 5.25 0 0 0 5.5 5.25zm.278 1.421A3.7 3.7 0 0 1 7 5.25H5.5c0 .703.138 1.375.39 1.99zm-1.224-.246L.97 11.51l1.06 1.06 5.085-5.084-1.06-1.06zM.97 11.51a2.52 2.52 0 0 0 0 3.56l1.06-1.06a1.02 1.02 0 0 1 0-1.44zm0 3.56a2.52 2.52 0 0 0 3.56 0l-1.06-1.06a1.02 1.02 0 0 1-1.44 0zm3.56 0 5.102-5.1-1.06-1.06-5.102 5.1zM10.75 9c-.486 0-.95-.092-1.374-.26l-.55 1.396a5.2 5.2 0 0 0 1.924.364zm3.75-3.75A3.75 3.75 0 0 1 10.75 9v1.5c2.9 0 5.25-2.35 5.25-5.25zm-.387-1.662c.247.5.387 1.064.387 1.662H16c0-.834-.195-1.625-.543-2.328zm-1.626 3.025 2.828-2.827-1.06-1.061-2.828 2.828zm-2.475 0a1.75 1.75 0 0 0 2.475 0l-1.06-1.06a.25.25 0 0 1-.354 0zm-.585-.586.585.586 1.061-1.06-.586-.586zm0-2.475a1.75 1.75 0 0 0 0 2.475l1.06-1.06a.25.25 0 0 1 0-.354z"
      />
    </g>
    <defs>
      <clipPath id="wrench_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWrench;
