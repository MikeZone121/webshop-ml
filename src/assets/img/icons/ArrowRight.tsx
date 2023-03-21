const ArrowRight = ({
  width = 24,
  height = 24,
}: {
  width: number;
  height: number;
}) => {
  return (
    <svg
      className="fill-stroke text-black dark:text-white"
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 3L7.5 6L4.5 9"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
