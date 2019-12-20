import React, { useEffect, useState } from 'react';
import axios from 'axios';

import QuizResults from '../QuizResults';
import ProductDisplay from '../ProductDisplay';
import DailyRotation from '../DailyRotation';
import './style.scss';

const App = () => {
  const [appData, setAppData] = useState({ 
    daily_rotation: {
      title: '',
      subtitle: '',
      rotations: []
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:1234/quiz-results',
      );
      console.log('RESULTS: ', result);
      setAppData(result.data.resultsMock);
    };

    fetchData();
  }, []);

  return (
    <>
      <QuizResults />
      <ProductDisplay />
      <DailyRotation rotationData={appData} />
    </>
  );
}

export default App;
