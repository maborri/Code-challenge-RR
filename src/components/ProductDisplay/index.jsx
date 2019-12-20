import React from 'react';

import './ProductDisplay.scss';
import ProductCollage from './ProductCollage';
import flowerIcon from '../../assets/img/flower.png';
import moonIcon from '../../assets/img/mooon.png';
import dosageIcon from '../../assets/img/dosage.png';
//import flowerMedium from '../../assets/img/flower-medium.png';


const ProductImage = (props) => {
  return (
    <>
      <div className="product__container">
        <ProductCollage />
        <div className="product__detail-container">
          <h2 className="product__name">Calm Seas</h2>
          <p className="product__description">
            Tames stomach unrest and eases digestion so you can sleep comfortable, all night.
          </p>
          <h4 className="product__price">$60/mo.</h4>

          <div className="product__buttons-container">
            <button className="product__add-button">Add To Cart</button>
            <a className="product__learn-more-button" href="#">Learn more</a>
          </div>
        </div>
      </div>

      <ul className="product__detail-list">
        <li className="product__detail-item">
          <img src={flowerIcon} alt="" className="product__detail-icon" alt="" />
          <div>
            <h6 className="product__detail--title">Key Ingredients:</h6>
            <p className="product__detail--content">Hou Po (Magnolia Bark), Chamomile, Shan Zha</p>
          </div>
        </li>
        <li className="product__detail-item">
          <img src={moonIcon} alt="" className="product__detail-icon" alt="" />
          <div>
            <h6 className="product__detail--title">Treats:</h6>
            <p className="product__detail--content">Poor digestion that prevents quality sleep</p>
          </div>
        </li>
        <li className="product__detail-item">
          <img src={dosageIcon} alt="" className="product__detail-icon" alt="" />
          <div>
            <h6 className="product__detail--title">Dosage:  </h6>
            <p className="product__detail--content">1 capsule/day</p>
          </div>
        </li>
      </ul>

      <img className="flower-background" alt="" />
    </>
  );
}

export default ProductImage;
