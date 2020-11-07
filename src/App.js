import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import Landing from './components/Landing'

function App() {
  return (
    <div >
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* basename={process.env.PUBLIC_URL} */}
        <Landing />
      </BrowserRouter>
    </div>
  );
}

export default App;
