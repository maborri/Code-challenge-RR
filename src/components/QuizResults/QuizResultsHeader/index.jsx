import React from 'react'

import './QuizResults.scss';
import brandIcon from '../../assets/img/brand-icon.png';
import closeIcon from '../../assets/img/close.png';
import backIcon from '../../assets/img/back.png';
import downArrow from '../../assets/img/down-arrow.png';
import diagnosticImg from '../../assets/img/SoothDigestion.png';

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

      <div className="results-body__title">Mati, your sleep profile would be</div>

      <div className="results-body__image"><img src={diagnosticImg} /></div>

      <div className="results-body__name">Tummy Turmoil</div>

      <div className="results-body__details">"I just want to ease my digestion so I don't wake up in middle of night so often."</div>

      <div className="see-product__container">
        <div className="see-product__text">See our recommendations below</div>
        <a href="">
          <div className="see-product__icon">
            <img src={downArrow} />
          </div>
        </a>
      </div>

    </div>
  );
}

export default QuizResults;