import React from 'react'

import './QuizResultsHeader.scss';
import closeIcon from '../../../assets/img/close.png';
import brandIcon from '../../../assets/img/brand-icon.png';
import backIcon from '../../../assets/img/back.png';

const QuizResults = (props) => {
  const handleBack = () => {
    alert('You clicked BACK button!')
  }

  const handleClose = () => {
    alert('You clicked CLOSE button!')
  }

  return (
    <div className="header">
      <div className="header__element--left" onClick={handleBack}>
        <img src={backIcon} alt="Navigate back" />
      </div>
      <div className="header__element--center">
        <img src={brandIcon} alt="Remrise" />
      </div>
      <div className="header__element--right" onClick={handleClose}>
        <img src={closeIcon} alt="Close" />
      </div>
    </div>
  );
}

export default QuizResults;