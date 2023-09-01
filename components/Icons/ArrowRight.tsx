import { FC } from 'react';

export const ArrowRight: FC = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      transform="rotate(180)"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 12H18M6 12L11 7M6 12L11 17"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
