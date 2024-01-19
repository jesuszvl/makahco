import { IconProps } from '../types/types';

export default function NextIcon({
  width = 32,
  height = 32,
  fill = '#ffffff',
}: IconProps) {
  return (
    <svg
      height={height}
      width={width}
      id="_x34_"
      viewBox="0 0 24 24"
      fill={fill}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          id="primary"
          d="M18.6,11.2l-12-9A1,1,0,0,0,5,3V21a1,1,0,0,0,.55.89,1,1,0,0,0,1-.09l12-9a1,1,0,0,0,0-1.6Z"
          fill={fill}
        ></path>
      </g>
    </svg>
  );
}
