import { IconProps } from '../types/types';

export default function PreviousIcon({
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
          d="M17.45,2.11a1,1,0,0,0-1.05.09l-12,9a1,1,0,0,0,0,1.6l12,9a1,1,0,0,0,1.05.09A1,1,0,0,0,18,21V3A1,1,0,0,0,17.45,2.11Z"
          fill={fill}
        ></path>
      </g>
    </svg>
  );
}
