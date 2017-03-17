import firebase from 'firebase';
import { FILE_UPLOAD, GET_USER_INFO } from './types';

export function addImage(img) {
  return (dipatch) => {
    const file = img;
    const storageRef = firebase.storage().ref();

    return storageRef.child('images/' + file.name).put(file)
    .then((file) => {
      dipatch({ type: FILE_UPLOAD, payload: file });
    });
  }
}

export function getUserInfo(uid) {
  return (dispatch) => {
    console.log(uid);
    return firebase.database().ref('/users/' + uid).once('value').then((snapshot) => {
      dispatch({ type: GET_USER_INFO, payload: snapshot.val()})
      console.log(snapshot.val())
    });
  }
}

export function updateUserInfo(username, email, imgUrl) {
  firebase.database().ref('users/' + uid).set({
    username: "Rychu",
  })
}
