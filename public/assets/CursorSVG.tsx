function CursorSVG({ color }: { color: string }) {
  return (
    <svg
      className="relative"
      width="24"
      height="36"
      viewBox="0 0 24 36"
      fill="none"
      stroke="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
        fill={color}
      />
    </svg>
  );
}

export default CursorSVG;
