import React, { useState, useEffect } from 'react'

import useWidowsSize from '../../hooks/useWindowsSize';
import './DailyRotation.scss';
import hexagon from '../../assets/img/hexagon.png';
import glassGuy from '../../assets/img/glasses.png';

const DEFAULT_ROTATION_DAY = 1;

const DailyRotation = (props) => {
  const [rotationDay, setRotationDay] = useState(DEFAULT_ROTATION_DAY);
  const [data] = useState({
    daily_rotation: {
      "title": "Your daily rotation",
      "subtitle": "Your personalized formula works on a 4-day rotation for maximum efficacy.",
      "image_border": "https://cdn.shopify.com/s/files/1/0222/8971/1181/files/19.04.01-Zs-Elements22-28.png?374836",
      "image_person": "https://cdn.shopify.com/s/files/1/0222/8971/1181/files/ZZZ-m-05-PDP-AnchorYang-Collage3-2x.jpg?374836",
      "image_person2x": "https://cdn.shopify.com/s/files/1/0222/8971/1181/files/ZZZ-t-05-PDP-AnchorYang-Collage3-2x.jpg?374836",
      "rotations": [
        {
          "id": 1,
          "title": "Day 1",
          "description": "Calms the mind and eases the day's stress to optimize sleep."
        },
        {
          "id": 2,
          "title": "Day 2",
          "description": "Begins to restore balance to mind and body and calm the central nervous system."
        },
        {
          "id": 3,
          "title": "Day 3",
          "description": "Regulates digestion for blissful rest without a churning, upset tummy."
        },
        {
          "id": 4,
          "title": "Day 4",
          "description": "Soothes the soul so you can drift into sustained, uninterrumpted sleep."
        }
      ]
    }
  });

  const calculateRotationList = (width) => {
    if (width >= 1440) {
      return data.daily_rotation.rotations.map((rotation) => {
        return (
          <li className="rotation__schedule--text" key={rotation.id}>
            <h4 className="rotation__day">
              {rotation.title}
            </h4>
            <p className="rotation__description">
              {rotation.description}
            </p>
          </li>
        );
      });
    } else {
      return (
        <li className="rotation__schedule--text">
          <h4 className="rotation__day">
            {data.daily_rotation.rotations[rotationDay - 1].title}
          </h4>
          <p className="rotation__description">
            {data.daily_rotation.rotations[rotationDay - 1].description}
          </p>
        </li>
      );
    }
  }

  const handleCarouselButtonClick = (event) => {
    setRotationDay(event.target.id);
  }

  const calculateCarouselButtons = (rotations) => {
    return data.daily_rotation.rotations.map((rotation) => {
      const isActive = rotationDay == rotation.id;
      return (
        <div 
          id={rotation.id} 
          key={rotation.id}
          className={`rotation__button ${isActive ? 'rotation__button--selected' : ''}`}
          onClick={handleCarouselButtonClick}>
        </div>
      );
    });
  }

  const size = useWidowsSize();
  const rotation = calculateRotationList(size.width);
  const carouselButtons = calculateCarouselButtons(data.daily_rotation.rotations);

  return (
    <div className="rotation__container">
      <h1 className="rotation__title">{data.daily_rotation.title}</h1>
      <h2 className="rotation__subtitle">{data.daily_rotation.subtitle}</h2>

      <div className="rotation__schedule">
        <img src={hexagon} className="rotation__img--hexagon" />
        <img src={glassGuy} className="rotation__img--glass-guy" />
        <ul className="rotation__list">
          {rotation}
        </ul>
      </div>

      <div className="rotation__button-container">
        {carouselButtons}
      </div>

      <div className="rotation__divisor"></div>
    </div>
  );
}

export default DailyRotation;