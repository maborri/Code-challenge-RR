import React from 'react';

import './ProductCollage.scss';
import ZPackage from '../../../assets/img/Z-packaging.png';
import flowerRight from '../../../assets/img/flower-right.png';
import flowerLeft from '../../../assets/img/flower-left.png';
import hexagon from '../../../assets/img/hexagon.png';
import dots from '../../../assets/img/dots.png';

const ProductCollage = (props) => {
  return (
      <div id="productDisplay" className="collage__container">
        <img src={ZPackage} className="collage__package" />
        <img src={flowerRight} className="collage__flower--right" />
        <img src={flowerLeft} className="collage__flower--left" />
        <img src={hexagon} className="collage__hexagon" />
        <img src={dots} className="collage__dots" />
      </div>
  );
}

export default ProductCollage;
