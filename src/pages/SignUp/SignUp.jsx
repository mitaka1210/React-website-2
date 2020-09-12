import React from 'react';
import { homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;
