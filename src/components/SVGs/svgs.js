export const TickSVG = ({ ...props }) => {
  return (
    <svg
      width="18"
      height="13"
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 6.5L6 11.5L16.5 1"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CheckTickSVG = ({ color, ...props }) => {
  return (
    <svg
      width="9"
      height="7"
      viewBox="0 0 9 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.67929 2.76613C1.27398 2.39097 0.641287 2.41541 0.266127 2.82071C-0.109033 3.22602 -0.0845938 3.85871 0.320713 4.23387L1.67929 2.76613ZM3.70089 6L3.02161 6.73387C3.22276 6.92006 3.49151 7.01552 3.76504 6.99794C4.03857 6.98036 4.2929 6.85127 4.46855 6.64086L3.70089 6ZM8.64266 1.64086C8.9966 1.21689 8.93983 0.586277 8.51586 0.232341C8.09189 -0.121596 7.46128 -0.0648248 7.10734 0.359142L8.64266 1.64086ZM0.320713 4.23387L3.02161 6.73387L4.38018 5.26613L1.67929 2.76613L0.320713 4.23387ZM4.46855 6.64086L8.64266 1.64086L7.10734 0.359142L2.93323 5.35914L4.46855 6.64086Z"
        fill={color}
      />
    </svg>
  );
};
