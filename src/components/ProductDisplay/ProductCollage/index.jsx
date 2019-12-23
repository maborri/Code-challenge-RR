import React from 'react';

import './ProductCollage.scss';
import ZPackage from '../../../assets/img/Z-packaging.png';
import flowerRight from '../../../assets/img/flower-right.png';
import flowerLeft from '../../../assets/img/flower-left.png';
import hexagon from '../../../assets/img/hexagon.png';
import dots from '../../../assets/img/dots.png';

const ProductCollage = (props) => {
  /* DEV NOTE: For production I would ask the designer in charge of the mocks to provide 
  a single image with all the collage (flowers + dots + product) and avoid making so many 
  calls for resources. Nevertheless this was a fun way to display some CSS skills.
  */
  return (
      <div id="productDisplay" className="collage__container">
        <img src={ZPackage} className="collage__package" alt="Product" />
        <img src={flowerRight} className="collage__flower--right" alt="" />
        <img src={flowerLeft} className="collage__flower--left" alt="" />
        <img src={hexagon} className="collage__hexagon" alt="" />
        <img src={dots} className="collage__dots" alt="" />
      </div>
  );
}

export default ProductCollage;
