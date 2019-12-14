import React from 'react'

import './QuizResultsBody.scss';
import diagnosticImg from '../../../assets/img/SoothDigestion.png';

const QuizResultsBody = (props) => {
  return (
    <>
      <div className="results-body__title">Mati, your sleep profile would be</div>

      <div className="results-body__image"><img src={diagnosticImg} /></div>

      <div className="results-body__name">Tummy Turmoil</div>

      <div className="results-body__details">"I just want to ease my digestion so I don't wake up in middle of night so often."</div>
    </>
  );
}

export default QuizResultsBody;