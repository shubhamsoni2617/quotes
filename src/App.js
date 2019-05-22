import React, {Component} from 'react';
import classes from './App.module.css';

import Modal from '../src/Components/Modal/Modal';
import Quote from './Containers/Quote';

class App extends Component{

render(){

  return <div className={classes.App}>
  <h2>Quotes For Life</h2>
  <Modal><Quote /></Modal>
  </div>
}
}
export default App;

