import React from 'react';
import { HashRouter} from 'react-router-dom';

import Landing from './components/Landing'

export default function App() {
  return (
    <div >
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Landing />
      </HashRouter>
    </div>
  );
}
