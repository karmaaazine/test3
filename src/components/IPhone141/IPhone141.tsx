import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon';
import { Ellipse2Icon } from './Ellipse2Icon';
import { Ellipse4Icon } from './Ellipse4Icon';
import classes from './IPhone141.module.css';
import { Metaballshape1Icon } from './Metaballshape1Icon';
import { Metaballshape2Icon } from './Metaballshape2Icon';
import { Metaballshape3Icon } from './Metaballshape3Icon';

interface Props {
  className?: string;
}
/* @figmaId 2:4 */
export const IPhone141: FC<Props> = memo(function IPhone141(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon} />
      </div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon2} />
      </div>
      <div className={classes.ellipse4}>
        <Ellipse4Icon className={classes.icon3} />
      </div>
      <div className={classes.metaballShape1}>
        <Metaballshape1Icon className={classes.icon4} />
      </div>
      <div className={classes.metaballShape2}>
        <Metaballshape2Icon className={classes.icon5} />
      </div>
      <div className={classes.metaballShape3}>
        <Metaballshape3Icon className={classes.icon6} />
      </div>
      <div className={classes._2023113RemovebgPreview1}></div>
      <div className={classes.frame2}>
        <div className={classes.aPropos}>à propos </div>
        <div className={classes.menu}>Menu</div>
        <div className={classes.gallerie}>Gallerie</div>
        <div className={classes.contract}>Contract</div>
      </div>
      <div className={classes.venezDegusterNosSushi}>venez déguster nos sushi</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.commander}>commander</div>
      <div className={classes.rectangle3}></div>
    </div>
  );
});
