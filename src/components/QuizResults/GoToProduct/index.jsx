import React from 'react'

import { copy } from '../../../config/constants';
import downArrow from '../../../assets/img/down-arrow.png';
import './GoToProduct.scss';

const GoToProduct = (props) => {
  return (
      <div className="see-product__container">
        <div className="see-product__text">{copy.quizResults.GO_TO_PROD_TOOLTIP}</div>
        <a href="#productDisplay">
          <div className="see-product__icon">
            <img src={downArrow} alt="Go to product" />
          </div>
        </a>
      </div>
  );
}

export default GoToProduct;