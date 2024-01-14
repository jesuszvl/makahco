import Modal from 'react-modal';

import { useState } from 'react';
import StimulusContent from './components/StimulusContent/StimulusContent';

import PageContainer from './components/PageContainer/PageContainer';
import { STIMULUS_INITIAL } from './utils/stimulus';
import PlayBar from './components/PlayBar/PlayBar';
import { Stimulus } from './types/types';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const App = () => {
  const [stimulus] = useState<Stimulus>(STIMULUS_INITIAL);

  return (
    <PageContainer>
      <StimulusContent stimulus={stimulus} />
      <PlayBar />
    </PageContainer>
  );
};

export default App;
