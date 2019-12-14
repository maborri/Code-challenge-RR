import React from 'react'

import './GoToProduct.scss';
import downArrow from '../../assets/img/down-arrow.png';

const GoToProduct = (props) => {
  return (
      <div className="see-product__container">
        <div className="see-product__text">See our recommendations below</div>
        <a href="#productDisplay">
          <div className="see-product__icon">
            <img src={downArrow} />
          </div>
        </a>
      </div>
  );
}

export default GoToProduct;