import React, { useState } from 'react'

import useWidowsSize from '../../hooks/useWindowsSize';
import './DailyRotation.scss';
import hexagon from '../../assets/img/hexagon.png';
import glassGuy from '../../assets/img/glasses.png';

const DEFAULT_ROTATION_DAY = 1;

const DailyRotation = (props) => {
  const [rotationDay, setRotationDay] = useState(DEFAULT_ROTATION_DAY);
  const [rotationData] = useState(props.rotationData.daily_rotation);
  console.log('props.rotationData: ', props.rotationData);
  
  const calculateRotationList = (width) => {
    if (rotationData.rotations.length === 0) {
      return;
    }

    if (width >= 1440) {
      return rotationData.rotations.map((rotation) => {
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
            {rotationData.rotations[rotationDay - 1].title}
          </h4>
          <p className="rotation__description">
            {rotationData.rotations[rotationDay - 1].description}
          </p>
        </li>
      );
    }
  }

  const handleCarouselButtonClick = (event) => {
    setRotationDay(parseInt(event.target.id));
  }

  const calculateCarouselButtons = () => {
    if (rotationData.rotations.length === 0) {
      return;
    }
    return rotationData.rotations.map((rotation) => {
      const isActive = rotationDay === rotation.id;
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
  const carouselButtons = calculateCarouselButtons();

  return (
    <div className="rotation__container">
      <h1 className="rotation__title">{rotationData.title}</h1>
      <h2 className="rotation__subtitle">{rotationData.subtitle}</h2>

      <div className="rotation__schedule">
        <img src={hexagon} className="rotation__img--hexagon" alt="" />
        <img src={glassGuy} className="rotation__img--glass-guy" alt="" />
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