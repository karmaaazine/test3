import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={11.5} cy={11.5} r={11.5} fill='#FD7D3E' />
  </svg>
);

const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
