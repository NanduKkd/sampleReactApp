
import dotenv from 'dotenv'

import firebase from "firebase";
dotenv.config()

// console.log(process.env, 'api key');
var firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID
}
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
// export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
// export const twitterAuthProvider = new firebase.auth.TwitterAuthProvider()