import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <App />
  </DndProvider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
