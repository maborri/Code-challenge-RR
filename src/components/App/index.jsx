import React from 'react';
import { CircularProgress } from '@material-ui/core';

import { config } from '../../config/config';
import useFetch from '../../hooks/useFetch';
import QuizResults from '../QuizResults';
import ProductDisplay from '../ProductDisplay';
import DailyRotation from '../DailyRotation';
import Hero from '../Hero';
import './style.scss';

const App = () => {
  const res = useFetch(config.mockUrl, config.appInitialState);

  if (res.isLoading) {
    return (
      <div className="results__container app__spinner">
        <CircularProgress size={config.spinnerSize} />
      </div>
    );
  } else {
    return (
      <>
        <QuizResults
          userName={res.appData.resultsMock.userName}
          profile={res.appData.resultsMock.profile} />
        <ProductDisplay product={res.appData.parsedProductData} />
        <Hero background={res.appData.resultsMock.hero} />
        <DailyRotation dailyRotation={res.appData.resultsMock.daily_rotation}
        />
      </>
    );
  }
}

export default App;
