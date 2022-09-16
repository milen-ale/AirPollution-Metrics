import React from 'react';
import Form from './Form';
import PollutionData from './PollutionData';

function HomePage() {
  return (
    <div>
      <div>
        <Form />
        <div>
          <PollutionData />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
