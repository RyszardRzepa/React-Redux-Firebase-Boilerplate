import firebase from 'firebase';
import { FILE_UPLOAD } from './types';

var database = firebase.database();
var user = firebase.auth().currentUser;


export function addImage(img) {

  return (dipatch) => {
    console.log(img)
    var file = img;
    var storageRef = firebase.storage().ref();

    var uploadTask = storageRef.child('images/' + file.name).put(file)
    .then((file) => {
      dipatch({ type: FILE_UPLOAD, payload: file });
      console.log(file)
    })
    return uploadTask;
  }
}

function writeUserData(imgUrl) {
 console.log(user);
  firebase.database().ref('users/' + userID).set({
    profile_picture: imgUrl
  });
}
