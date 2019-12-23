import React, { useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import useWidowsSize from '../../hooks/useWindowsSize';
import './DailyRotation.scss';
import { constants } from '../../config/constants';

let startSwipePoint;

const DailyRotation = (props) => {
  const [currentoRotationDay, setRotationDay] = useState(constants.DEFAULT_DISPLAY_DAY);

  const calculateRotationList = (width) => {
    if (props.dailyRotation.rotations.length === 0) {
      return;
    }

    if (width >= constants.screenSize.LARGE) {
      return props.dailyRotation.rotations.map((rotation) => {
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
        <ReactCSSTransitionGroup
          transitionName="text"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <li className="rotation__schedule--text" key={props.dailyRotation.rotations[currentoRotationDay - 1].id} >
            <h4 className="rotation__day">
              {props.dailyRotation.rotations[currentoRotationDay - 1].title}
            </h4>
            <p className="rotation__description">
              {props.dailyRotation.rotations[currentoRotationDay - 1].description}
            </p>
          </li>
        </ReactCSSTransitionGroup>
      );
    }
  }

  const calculateCarouselButtons = () => {
    if (props.dailyRotation.rotations.length === 0) {
      return;
    }
    return props.dailyRotation.rotations.map((rotation) => {
      const isActive = currentoRotationDay === rotation.id;
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

  const handleCarouselButtonClick = (event) => {
    setRotationDay(parseInt(event.target.id));
  }

  const onTouchStart = (event) => {
    startSwipePoint = event.changedTouches[0].clientX;
  }

  const onTouchEnd = (event) => {
    const lastPoint = event.changedTouches[0].clientX;
    const traveledDistance = startSwipePoint - lastPoint;
    if (traveledDistance < constants.MIN_SWIPE_RIGHT_DISTANCE) {
      if (currentoRotationDay === 1) {
        setRotationDay(props.dailyRotation.rotations.length)
      } else {
        setRotationDay(currentoRotationDay - 1);
      }
    } else if (traveledDistance > constants.MIN_SWIPE_LEFT_DISTANCE) {
      if (currentoRotationDay === props.dailyRotation.rotations.length) {
        setRotationDay(1)
      } else {
        setRotationDay(currentoRotationDay + 1);
      }
    }
  }

  const size = useWidowsSize();
  const rotation = calculateRotationList(size.width);
  const carouselButtons = calculateCarouselButtons();

  return (
    <div className="rotation__container"
      onTouchStart={size.width <= constants.screenSize.MEDIUM ? onTouchStart : null}
      onTouchEnd={size.width <= constants.screenSize.MEDIUM ? onTouchEnd : null}>
      <h1 className="rotation__title">{props.dailyRotation.title}</h1>
      <h2 className="rotation__subtitle">{props.dailyRotation.subtitle}</h2>

      <div className="rotation__schedule">
        <img src={props.dailyRotation.image_border} className="rotation__img--hexagon" alt="" />
        <img
          src={size.width >= constants.screenSize.MEDIUM ?
            props.dailyRotation.image_person2x : props.dailyRotation.image_person}
          className="rotation__img--glass-guy"
          alt="" />
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
