import React from 'react';

import { copy } from '../../config/constants';
import ProductCollage from './ProductCollage';
import flowerIcon from '../../assets/img/flower.png';
import moonIcon from '../../assets/img/mooon.png';
import dosageIcon from '../../assets/img/dosage.png';
import './ProductDisplay.scss';

const ProductImage = (props) => {
  const handleAddToCart = () => {
    alert(
      `Added:
      PRODUCT NAME: ${props.product.title}
      PRODUCT TYPE: ${props.product.productType}
      PRICE: ${props.product.price} 
      ..to the cart`
    );
  };

  return (
    <>
      <div className="product__container">
        <ProductCollage />
        <div className="product__detail-container">
          <h2 className="product__name">{props.product.title}</h2>
          <p className="product__description">
            {props.product.description}
          </p>
          <h4 className="product__price">{props.product.price}{copy.productDetails.MONTHLY_SUBS}</h4>

          <div className="product__buttons-container">
            <button className="product__add-button" onClick={handleAddToCart}>
              {copy.productDetails.ADD_PRODUCT}
            </button>
            <a className="product__learn-more-button" href="/">{copy.productDetails.LEARN_MORE}</a>
          </div>
        </div>
      </div>

      <ul className="product__detail-list">
        <li className="product__detail-item">
          <img src={flowerIcon} className="product__detail-icon" alt="" />
          <div>
            <h6 className="product__detail--title">{copy.productDetails.INGREDIENTS_TITLE}</h6>
            <p className="product__detail--content">{copy.productDetails.DEFAULT_INGREDIENTS}</p>
          </div>
        </li>
        <li className="product__detail-item">
          <img src={moonIcon} className="product__detail-icon" alt="" />
          <div>
            <h6 className="product__detail--title">{copy.productDetails.TREATS_TITLE}</h6>
            <p className="product__detail--content">{copy.productDetails.DEFAULT_TREATS}</p>
          </div>
        </li>
        <li className="product__detail-item">
          <img src={dosageIcon} className="product__detail-icon" alt="" />
          <div>
            <h6 className="product__detail--title">{copy.productDetails.DOSAGE_TITLE}</h6>
            <p className="product__detail--content">{copy.productDetails.DEFAULT_DOSAGE}</p>
          </div>
        </li>
      </ul>
    </>
  );
}

export default ProductImage;
