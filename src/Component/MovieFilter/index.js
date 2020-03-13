import React, { useEffect } from "react";
import Tabs from "./Tabs";
import "./style.scss";
import YearSelect from "./yearSelect";
import Directors from "./director";
import Actors from "./actor";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/firebase-firestore";
import ImageUpload from "./upload";
import "firebase/storage";
import Header from "../../Container/Header";
const Checkbox = props => <input type="checkbox" {...props} />;

let moods = [
  "Feel Relax",
  "True Friends",
  "Humour",
  "A Good Cry",
  "Letting Heart win head",
  "Rethink Life",
  "Feeling Like Travelling",
  "Heart Touching",
  "Shaking System",
  "Tasting Glory",
  "Holding Breathe",
  "Thought Provoking",
  "No-Brainer Laugh",
  "Soothing Love Story",
  "Uncomfortable Viewing",
  "Dark Comedy"
];

let genres = [
  "Action",
  "Animation",
  "Comedy",
  "Documentary",
  "Drama",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi"
];
let streams = [
  "Hotstar",
  "Netflix",
  "Amazon Prime Video",
  "Voot",
  "Zee5",
  "SonyLiv",
  "Airtel TV",
  "Vodafone U",
  "Viu",
  "Eros Now",
  "Youtube",
  "Alt Balaji"
];

const MovieFilter = () => {
  useEffect(() => {
    // const config = {
    //   apiKey: "AIzaSyBb-drZXFEA51aiPJy5FFmQdmk1aMyrSqk",
    //   authDomain: "filmseers.firebaseapp.com",
    //   databaseURL: "https://filmseers.firebaseio.com",
    //   projectId: "filmseers",
    //   storageBucket: "filmseers.appspot.com",
    //   messagingSenderId: "219455533376",
    //   appId: "1:219455533376:web:82b62ca829465bb821caa5"
    // };

    // firebase.initializeApp(config);

    const storage = firebase.storage();
    const db = firebase.firestore();

    //   db.collection("cities").doc("tamasha").set({
    //     name: "Tamasha",
    //     state: "CA",
    //     country: "USA",
    //     release: new Date('march 2020')
    // })
    // .then(function() {
    //     console.log("Document successfully written!");
    // })
    // .catch(function(error) {
    //     console.error("Error writing document: ", error);
    // });

    // storage
    //   .ref('poster')
    //   .child(`1414101219_Shubham.jpg`)
    //   .getDownloadURL()
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err));

    // const db = firebase.firestore();

    // var citiesRef = db.collection('cities');

    //   const metadata = { contentType: 'image' };
    //   const task = storage.ref('poster').child('test').put('/home/vimal/Documents/sisitic/Sistic_Web/web/src/assets/images/1vertical.png', metadata)
    //   task
    // .then(snapshot => snapshot.ref.getDownloadURL())
    // .then(url => console.log(url))

    // db.collection('cities')
    //   .orderBy('release')
    //   .get()
    //   .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //       // doc.data() is never undefined for query doc snapshots
    //       console.log(doc.id, ' => ', doc.data().release.toDate());
    //     });
    //   })
    //   .catch(function(error) {
    //     console.log('Error getting documents: ', error);
    //   });
  }, []);

  const uploadFile = file => {
    const config = {
      apiKey: "AIzaSyBb-drZXFEA51aiPJy5FFmQdmk1aMyrSqk",
      authDomain: "filmseers.firebaseapp.com",
      databaseURL: "https://filmseers.firebaseio.com",
      projectId: "filmseers",
      storageBucket: "filmseers.appspot.com",
      messagingSenderId: "219455533376",
      appId: "1:219455533376:web:82b62ca829465bb821caa5"
    };

    // firebase.initializeApp(config);

    const storage = firebase.storage();

    const metadata = { contentType: "image" };
    const task = storage
      .ref("poster")
      .child("test")
      .put(file, metadata);
    task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => console.log(url));
  };

  return (
    <div>
      <Header />
      <h1>Babumoshai!!!</h1>
      <Tabs>
        <div label="Mood">
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
        <div label="Genre">
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
        <div label="Year">
          <YearSelect />
        </div>
        <div label="Director">
          <Directors />
        </div>
        <div label="Actor">
          <Actors />
        </div>
        <div label="Stream">
          {streams.map(stream => {
            return (
              <li key={stream}>
                <label>
                  <Checkbox />
                  <span>{stream}</span>
                </label>
              </li>
            );
          })}
        </div>
      </Tabs>
      <ImageUpload uploadFile={uploadFile} />
      <div
        dangerouslySetInnerHTML={{
          __html: `<span class="imdbRatingPlugin" data-user="ur113196012" data-title="tt9495690" data-style="t1">
          <a href="https://www.imdb.com/title/tt9495690/?ref_=tt_plg_rt"
          ><img alt="Pagalpanti (2019) on IMDb" src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png">
          </a></span>`
        }}
      />
    </div>
  );
};

export default MovieFilter;
