import React, { FunctionComponent } from 'react';
import { Gallery } from 'containers/Gallery';
import './App.css';

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Gallery />
    </div>
  )
}