// import * as firebase from 'firebase';

// let saveButton = document.querySelector('#saveButton');
// saveButton.addEventListener('click', function() {
//   console.log('121');
// });

//   document.addEventListener('DOMContentLoaded', event => {
const firebaseConfig = {
  apiKey: 'AIzaSyBb-drZXFEA51aiPJy5FFmQdmk1aMyrSqk',
  authDomain: 'filmseers.firebaseapp.com',
  databaseURL: 'https://filmseers.firebaseio.com',
  projectId: 'filmseers',
  storageBucket: 'filmseers.appspot.com',
  messagingSenderId: '219455533376',
  appId: '1:219455533376:web:82b62ca829465bb821caa5'
};
//   });

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

var citiesRef = db.collection('cities');

// saveButton.addEventListener('click', function() {
document.addEventListener('DOMContentLoaded', event => {
  db.collection('cities')
    .orderBy('country')
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
      });
    })
    .catch(function(error) {
      console.log('Error getting documents: ', error);
    });
});
