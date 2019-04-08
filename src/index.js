import React from 'react';
import ReactDOM from 'react-dom';
import { observable, configure, action } from "mobx";
import { observer } from "mobx-react";
import DevTools from 'mobx-react-devtools'

import './index.css';
configure({ enforeACtions: true });

const appState= observable({
  count: 0,
  incCount: action("Increment Counter", () => {
    appState.count +=1;
  }),
  decCount: action("Decrement Counter", () => {
    appState.count -= 1;
  }),
  get countByThree() {
    return this.count * 3;
  },
  get countByFour() {
    return this.count * 4;
  }
});

const Counter = observer(props => (
  <section>
    {props.appState.count}
    <div>
      <button onClick={props.appState.incCount}>Add</button>
      <button onClick={props.appState.decCount}>Dec</button>
      <DevTools />
      <div>Count by Three {props.appState.countByThree}</div>
      <div>Count by Four {props.appState.countByFour}</div>
    </div>
  </section>
));


ReactDOM.render(<Counter appState={appState} />, document.getElementById('root'));

