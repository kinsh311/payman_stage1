import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBbC-ebiSZU-SQqIN3rS8xpR8z72ohVlxM",
    authDomain: "payman-stage1.firebaseapp.com",
    databaseURL: "https://payman-stage1.firebaseio.com",
    projectId: "payman-stage1",
    storageBucket: "payman-stage1.appspot.com",
    messagingSenderId: "1021235599310"
  };
firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default};
// let array = [];
// const db = firebase.database();
// db.ref().set("notes");
// db.ref("notes").push({
//   name: 'kinsh',
//   ans: 'false'
// });
// db.ref("notes").push({
//   name: 'amra',
//   ans: 'true'
// });
// db.ref('notes').on('value', (snapshot) =>{
//   snapshot.forEach((snaps) => {
//   array.push({
//     key: snaps.key,
//     ...snaps.val()
//   });
//   })
// })
// console.log(array);

// firebase.database().ref().set({
//       user: {
//         name: "kinsh",
//         age: 21,
//         occ: "SD"
//       },
//       room: "trainee"
//   }).then(()=>{
//     console.log("data is saved")
//   }).catch(()=>{
//     console.log("data did not save");
//   });
//   firebase.database().ref().update({
//     room: "trainer",
//     'user/name': 'kinshuk'
//   }).then(()=>{
//     console.log("data updated");
//   });
//   firebase.database().ref("user").remove().then(() => {
//     console.log("data removed");
//   }).catch((e)=>{
//     console.log("error : "+e);
//   });
// firebase.database().ref("room").remove();
// firebase.database().ref().push("data from push");
// firebase.database().ref().push({
//   name: "la push",
//   role: "beach",
//   movie: "twilight"
// });

// let val = [];
// firebase.database().ref().on('value',(snapshot) => { 
//   snapshot.forEach( (snaps) => {
//     val.push(snaps.val());
//   })
//   console.log(val);
//  });
