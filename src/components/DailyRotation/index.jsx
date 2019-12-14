import React from 'react'

import './DailyRotation.scss';

const DailyRotation = (props) => {
  return (
    <div className="rotation__container">
      <h1 className="rotation__title">Your daily rotation</h1>
      <h2 className="rotation__subtitle">Your personalized formula works on a 4-day rotation for maximum efficacy.</h2>
    </div>
  );
}

export default DailyRotation;