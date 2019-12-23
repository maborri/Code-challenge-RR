import React from 'react'

import { constants, copy } from '../../config/constants';
import useWidowsSize from '../../hooks/useWindowsSize';
import GoToProduct from './GoToProduct';
import QuizResultsHeader from './QuizResultsHeader';
import './QuizResults.scss';

const QuizResults = (props) => {
  const size = useWidowsSize();

  return (
    <div className="results__container">
      <QuizResultsHeader />

      <div className="results__container--inner">
        <div className="results-body__title">{props.userName}{copy.quizResults.RESULTS_BODY_TITLE}</div>
        <img
          src={size.width >= constants.screenSize.MEDIUM ? 
            props.profile.image2x : props.profile.image}
          className="results-body__image"
          alt="" />
        <div className="results-body__name">{props.profile.name}</div>
        <div className="results-body__details">{props.profile.description}</div>

        <GoToProduct />
      </div>
    </div>
  );
}

export default QuizResults;