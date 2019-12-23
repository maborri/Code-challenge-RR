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
  // DEV NOTE: The logic for fetching data was moved to a custom hook (useFetch)
  // this allow us to move stateful logic around easily if needed
  const res = useFetch(config.appUrl, config.appInitialState);

  if (res.isLoading) {
    // DEV NOTE: Used Material-UI spinner (https://material-ui.com/es/) 
    // Spinner size can be modified from config file.
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
