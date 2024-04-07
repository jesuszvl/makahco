import { IconProps } from '../types/types';

export default function CloseIcon({
  width = 28,
  height = 28,
  color = '#000000',
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth="4"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M24 0L0 24"></path>
      <path d="M0 0L24 24"></path>
    </svg>
  );
}
