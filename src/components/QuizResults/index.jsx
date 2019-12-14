import React from 'react'

import './QuizResults.scss';
import GoToProduct from '../GoToProduct';
import QuizResultsBody from './QuizResultsBody';
import brandIcon from '../../assets/img/brand-icon.png';
import closeIcon from '../../assets/img/close.png';
import backIcon from '../../assets/img/back.png';

const QuizResults = (props) => {
  return (
    <div className="results__container">
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

      <QuizResultsBody />
      <GoToProduct />
    </div>
  );
}

export default QuizResults;