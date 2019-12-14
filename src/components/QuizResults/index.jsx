import React from 'react'

import './QuizResults.scss';
import GoToProduct from '../GoToProduct';
import QuizResultsBody from './QuizResultsBody';
import QuizResultsHeader from './QuizResultsHeader';


const QuizResults = (props) => {
  return (
    <div className="results__container">
      <QuizResultsHeader />
      <QuizResultsBody />
      <GoToProduct />
    </div>
  );
}

export default QuizResults;