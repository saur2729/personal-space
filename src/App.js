import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom';

import Landing from './components/Landing'
import Landing2 from './components/Landing2'

function App() {
  return (
    <div >
      <BrowserRouter basename="/personal-space">
        <Switch>
          <Landing />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
