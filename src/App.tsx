import * as React from 'react';
import './App.css';
import Menu from './plugins/Menu';
import DesignPanel from './plugins/DesignPanel'

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
            <Menu.MenuItem current={item} key={item.type}>{item.name}</Menu.MenuItem>
          )
        }
      </div>
      <div className="designCenter">
        <DesignPanel />
      </div>
      <div className="paramsList">2</div>
    </div>
  )
}

export default App;
