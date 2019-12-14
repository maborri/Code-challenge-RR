import React from 'react'

import './QuizResultsHeader.scss';
import closeIcon from '../../../assets/img/close.png';
import brandIcon from '../../../assets/img/brand-icon.png';
import backIcon from '../../../assets/img/back.png';

const QuizResults = (props) => {
  return (
    <div className="header">
      <div className="header__element--left">
        <img src={backIcon} />
      </div>
      <div className="header__element--center">
        <img src={brandIcon} />
      </div>
      <div className="header__element--right">
        <img src={closeIcon} />
      </div>
    </div>
  );
}

export default QuizResults;