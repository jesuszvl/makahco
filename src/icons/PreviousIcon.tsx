import { IconProps } from '../types/types';

export default function PreviousIcon({
  width = 32,
  height = 32,
  color = '#000000',
}: IconProps) {
  return (
    <svg height={height} width={width} viewBox="0 0 24 24" fill={color}>
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          d="M17.45,2.11a1,1,0,0,0-1.05.09l-12,9a1,1,0,0,0,0,1.6l12,9a1,1,0,0,0,1.05.09A1,1,0,0,0,18,21V3A1,1,0,0,0,17.45,2.11Z"
          fill={color}
        ></path>
      </g>
    </svg>
  );
}
