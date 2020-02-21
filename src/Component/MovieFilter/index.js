import React, { useEffect } from 'react';
import Tabs from './Tabs';
import './style.scss';
import YearSelect from './yearSelect';
import Directors from './director';
import Actors from './actor';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

import 'firebase/storage';
const Checkbox = props => <input type='checkbox' {...props} />;

let moods = [
  'Feel Relax',
  'True Friends',
  'Humour',
  'A Good Cry',
  'Letting Heart win head',
  'Is Life Easy?',
  'Feeling Like Travelling',
  'Is life tough?',
  'Heart Touching',
  'Shaking System',
  'Tasting Glory',
  'Holding Breathe',
  'Thought Provoking',
  'No-Brainer Laugh',
  'Soothing Love Story',
  'Uncomfortable Viewing',
  'Dark Comedy'
];

let genres = [
  'Action',
  'Animation',
  'Comedy',
  'Documentary',
  'Drama',
  'Horror',
  'Mystery',
  'Romance',
  'Sci-Fi'
];

let streams = [
  { label: 'Hotstar', value: 1 },
  { label: 'Netflix', value: 2 },
  { label: 'Amazon Prime Video', value: 3 },
  { label: 'Voot', value: 4 },
  { label: 'Zee5', value: 5 },
  { label: 'SonyLiv', value: 6 },
  { label: 'Airtel TV', value: 7 },
  { label: 'Vodafone U', value: 8 }
];
const MovieFilter = () => {
  useEffect(() => {
    const config = {
      apiKey: 'AIzaSyBb-drZXFEA51aiPJy5FFmQdmk1aMyrSqk',
      authDomain: 'filmseers.firebaseapp.com',
      databaseURL: 'https://filmseers.firebaseio.com',
      projectId: 'filmseers',
      storageBucket: 'filmseers.appspot.com',
      messagingSenderId: '219455533376',
      appId: '1:219455533376:web:82b62ca829465bb821caa5'
    };

    firebase.initializeApp(config);

    const storage = firebase.storage();

    storage
      .ref('poster')
      .child(`1414101219_Shubham.jpg`)
      .getDownloadURL()
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));

    const db = firebase.firestore();

    var citiesRef = db.collection('cities');

    // saveButton.addEventListener('click', function() {
    // document.addEventListener('DOMContentLoaded', event => {
    db.collection('cities')
      .orderBy('datetime')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data().datetime.toDate());
        });
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
    // });
  }, []);
  return (
    <div>
      <h1>Babumoshai!!!</h1>
      <Tabs>
        <div label='Mood'>
          <ul>
            {moods.map(mood => {
              return (
                <li key={mood}>
                  <label>
                    <Checkbox />
                    <span>{mood}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <div label='Genre'>
          <ul>
            {genres.map(genre => {
              return (
                <li key={genre}>
                  <label>
                    <Checkbox />
                    <span>{genre}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <div label='Year'>
          <YearSelect />
        </div>
        <div label='Director'>
          <Directors />
        </div>
        <div label='Actor'>
          <Actors />
        </div>
        <div label='Stream'>
          {streams.map(stream => {
            return (
              <li key={stream.label}>
                <label>
                  <Checkbox />
                  <span>{stream.label}</span>
                </label>
              </li>
            );
          })}
        </div>
      </Tabs>
    </div>
  );
};

export default MovieFilter;
