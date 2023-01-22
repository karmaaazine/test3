import { memo, SVGProps } from 'react';

const Metaballshape3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.0179 5.01166C11.275 4.84293 10.4947 4.76821 6.97714 0.703186L0.428391 26.8982C5.44508 24.9667 6.16877 25.268 9.5507 26.8805L15.0179 5.01166Z'
      fill='#FD7D3E'
    />
  </svg>
);

const Memo = memo(Metaballshape3Icon);
export { Memo as Metaballshape3Icon };
