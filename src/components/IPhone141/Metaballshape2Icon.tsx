import { memo, SVGProps } from 'react';

const Metaballshape2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M24.2339 8.1614C23.1141 5.46767 22.8076 5.02424 24.246 0.430786L0.34758 9.84532C4.53242 12.2236 4.61071 12.7569 5.62899 15.4906L24.2339 8.1614Z'
      fill='#FD7D3E'
    />
  </svg>
);

const Memo = memo(Metaballshape2Icon);
export { Memo as Metaballshape2Icon };
