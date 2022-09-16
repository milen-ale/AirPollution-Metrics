import React from 'react';
import Form from './Form';
import CurrentPollutionData from '../PollutionData';

function HomePage() {
  return (
    <div>
      <div>
        <Form />
        <div>
          <CurrentPollutionData />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
