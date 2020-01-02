import * as React from 'react';
import './App.css';

const ableUseConfig = [{
  name: '图片',
  type: 'image',
}, {
  name: '文本',
  type: 'text',
}, {
  name: 'row',
  type: 'row',
}]

function App() {

  return (
    <div className="content">
      <div className="elementList">
        {
          ableUseConfig.map(item =>
            <div className="menu" key={item.type}>{item.name}</div>
          )
        }
      </div>
      <div className="designCenter">2</div>
      <div className="paramsList">2</div>
    </div>
  )
}

export default App;
