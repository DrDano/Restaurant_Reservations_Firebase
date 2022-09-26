const { initializeApp } = require('firebase/app');
const { getFirestore, collection, setDoc, doc } = require('firebase/firestore');

const { reservations, restaurants, dateAvailabilities, reviews } = require('./testData');

const firebaseConfig = {
    apiKey: "AIzaSyDwD0rK0SRnLKv4z1dPmBwHnZP8QmbHNqU",
    authDomain: "restaurant-reservations-523e4.firebaseapp.com",
    projectId: "restaurant-reservations-523e4",
    storageBucket: "restaurant-reservations-523e4.appspot.com",
    messagingSenderId: "1054944031180",
    appId: "1:1054944031180:web:e2b9b3f4745d4b76eb6d69",
    measurementId: "G-LSTLGNTHDM"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  function populateCollection(collectionName, items) {
    return Promise.all(items.map(item => {
        const { id, ...data } = item;
        const col = collection(db, collectionName);
        return setDoc(doc(col, id), {
          ...data
        });
    }));
  }

  Promise.all([
    populateCollection('reservations', reservations),
    populateCollection('reviews', reviews),
    populateCollection('restaurants', restaurants),
    populateCollection('dateAvailabilities', dateAvailabilities),
  ])
    .then(() => {
        console.log('Done!');
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
    });
