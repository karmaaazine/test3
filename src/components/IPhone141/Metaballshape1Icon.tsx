import { memo, SVGProps } from 'react';

const Metaballshape1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.0156 20.3264C13.5631 17.1018 14.213 16.4974 18.2768 15.8619L5.56506 0.939484C4.29159 4.85054 3.59152 5.39611 0.161926 6.41119L12.0156 20.3264Z'
      fill='#FD7D3E'
    />
  </svg>
);

const Memo = memo(Metaballshape1Icon);
export { Memo as Metaballshape1Icon };
