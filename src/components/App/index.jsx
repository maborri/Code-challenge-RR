import React, { useEffect, useState } from 'react';
import axios from 'axios';

import QuizResults from '../QuizResults';
import ProductDisplay from '../ProductDisplay';
import DailyRotation from '../DailyRotation';
import './style.scss';

const App = () => {
  const [appData, setAppData] = useState({
    resultsMock: {
      daily_rotation: {
        title: '',
        subtitle: '',
        rotations: []
      },
    },
    parsedProductData: {
      title: '',
      description: '',
      price: 0,
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:1234/quiz-results',
      );
      console.log('gota data AS:', result);
      setAppData(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <QuizResults />
      <ProductDisplay product={appData.parsedProductData} />
      <DailyRotation dailyRotation={appData.resultsMock.daily_rotation}
      />
    </>
  );
}

export default App;
