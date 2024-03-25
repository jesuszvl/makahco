export default function ChevronLeftIcon({
  width = 32,
  height = 32,
  color = 'black',
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.4142 20.7071C17.8047 20.3166 17.8047 19.6834 17.4142 19.2929L10.1213 12L17.4142 4.70712C17.8047 4.3166 17.8047 3.68343 17.4142 3.29291L16.7071 2.5858C16.3166 2.19528 15.6834 2.19528 15.2929 2.5858L6.93934 10.9394C6.35355 11.5251 6.35355 12.4749 6.93934 13.0607L15.2929 21.4142C15.6834 21.8048 16.3166 21.8048 16.7071 21.4142L17.4142 20.7071Z"
          fill={color}
        ></path>
      </g>
    </svg>
  );
}
