import React from 'react';

import useWidowsSize from '../../hooks/useWindowsSize';
import { constants } from '../../config/constants';

import './Hero.scss';

const Hero = (props) => {
  const size = useWidowsSize();

  /* DEV NOTE: A quick fix was needed here(note replace call on img path) since the mock api returns 
  an invalid path. But I've found that the same file name with .jpg extension works :)
  */
  return (
    <img 
      className="hero__background" 
      alt="" 
      src={size.width >= constants.screenSize.MEDIUM ? 
        props.background.image2x : props.background.image.replace('png', 'jpg')} />
  );
}

export default Hero;
