import React from 'react';
import { homeObjTwo } from './Data';
import { InfoSection, Pricing } from '../../components';

function Home() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Home;
