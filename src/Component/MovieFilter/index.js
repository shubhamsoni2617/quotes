import React from 'react';
import Tabs from './Tabs';
import './style.scss';

const MovieFilter = () => {
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label='Gator'>
          See ya later, <em>Alligator</em>!
        </div>
        <div label='Croc'>
          After &apos;while, <em>Crocodile</em>!
        </div>
        <div label='Sarcosuchus'>
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
  );
};

export default MovieFilter;
