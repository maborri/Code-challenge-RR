import React from 'react';

import QuizResults from '../QuizResults';
import ProductDisplay from '../ProductDisplay';
import DailyRotation from '../DailyRotation';
import './style.scss';

const App = () => {
  return (
  <>
    <QuizResults />
    <ProductDisplay />
    <DailyRotation />
  </>
  );
}

export default App;
