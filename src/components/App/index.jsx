import React, { useEffect, useState } from 'react';
import axios from 'axios';

import QuizResults from '../QuizResults';
import ProductDisplay from '../ProductDisplay';
import DailyRotation from '../DailyRotation';
import './style.scss';

const App = () => {
  const [rotationData, setRotationData] = useState({
      title: '',
      subtitle: '',
      rotations: []
    });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:1234/quiz-results',
      );
      setRotationData(result.data.resultsMock.daily_rotation);
    };

    fetchData();
  }, []);

  return (
    <>
      <QuizResults />
      <ProductDisplay />
      <DailyRotation
        rotations={rotationData.rotations}
        title={rotationData.title}
        subtitle={rotationData.subtitle} />
    </>
  );
}

export default App;
