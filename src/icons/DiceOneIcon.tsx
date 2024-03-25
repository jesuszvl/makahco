import { IconProps } from '../types/types';

export default function DiceOneIcon({
  width = 32,
  height = 32,
  color = '#000000',
}: IconProps) {
  return (
    <svg fill={color} width={width} height={height} viewBox="0 0 32 32">
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path d="M27.299 2.246h-22.65c-1.327 0-2.402 1.076-2.402 2.402v22.65c0 1.327 1.076 2.402 2.402 2.402h22.65c1.327 0 2.402-1.076 2.402-2.402v-22.65c0-1.327-1.076-2.402-2.402-2.402zM15.974 19.093c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12z"></path>{' '}
      </g>
    </svg>
  );
}
