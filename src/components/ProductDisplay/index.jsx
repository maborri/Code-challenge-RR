import React from 'react';

import './ProductDisplay.scss';
import ProductCollage from './ProductCollage';

const ProductImage = (props) => {
  return (
    <>
      <ProductCollage />
      <div className="product__container">
        <h2 className="product__name">Calm Seas</h2>
        <p className="product__description">
          Tames stomach unrest and eases digestion so you can sleep comfortable, all night.
        </p>

        <h4 className="product__price">$60/mo.</h4>

        <button className="product__add-button">Add To Cart</button>

        <a className="product__learn-more-button">Learn more</a>
      </div>

      <div>
        <ul>
          <li>
            <img src="" alt="" />
            <h6>Key Ingredients:</h6>
            <p>Hou Po (Magnolia Bark), Chamomile, Shan Zha</p>
          </li>
          <li>
            <img src="" alt="" />
            <h6>Key Ingredients:</h6>
            <p>Hou Po (Magnolia Bark), Chamomile, Shan Zha</p>
          </li>
          <li>
            <img src="" alt="" />
            <h6>Key Ingredients:</h6>
            <p>Hou Po (Magnolia Bark), Chamomile, Shan Zha</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProductImage;
