export default function ChevronRightIcon({
  width = 32,
  height = 32,
  color = 'black',
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.20696 20.7071C6.81643 20.3166 6.81643 19.6834 7.20696 19.2929L14.4998 12L7.20696 4.70712C6.81643 4.3166 6.81643 3.68343 7.20696 3.29291L7.91406 2.5858C8.30459 2.19528 8.93775 2.19528 9.32827 2.5858L17.6818 10.9394C18.2676 11.5251 18.2676 12.4749 17.6818 13.0607L9.32828 21.4142C8.93775 21.8048 8.30459 21.8048 7.91406 21.4142L7.20696 20.7071Z"
          fill={color}
        ></path>
      </g>
    </svg>
  );
}
