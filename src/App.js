import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom';

import Landing from './components/Landing'

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
