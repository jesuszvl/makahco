import { IconProps } from '../types/types';

export default function NextIcon({
  width = 32,
  height = 32,
  fill = '#000000',
}: IconProps) {
  return (
    <svg height={height} width={width} viewBox="0 0 24 24" fill={fill}>
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          d="M18.6,11.2l-12-9A1,1,0,0,0,5,3V21a1,1,0,0,0,.55.89,1,1,0,0,0,1-.09l12-9a1,1,0,0,0,0-1.6Z"
          fill={fill}
        ></path>
      </g>
    </svg>
  );
}
