import { auth, facebookAuthProvider, googleAuthProvider, twitterAuthProvider } from "../utils/firebase";
import { actionTypes } from "./actionTypes"
import firebase from 'firebase'

const authStateChanged = (user) => {
	return async dispatch => {
		if(user){
			dispatch({ type: actionTypes.USER_LOGIN, payload: user })
		} else {
			dispatch({ type: actionTypes.USER_LOGOUT });
		}
	}
}

const login = ({ email, password, persistence }) => {
	return async dispatch => {
		try {
			dispatch({type: actionTypes.USER_LOADING})
			await auth.setPersistence(persistence ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION)
			await auth.signInWithEmailAndPassword(email, password);
		} catch (e) {
			dispatch({type: actionTypes.USER_ERROR, error: e.message});
		}
	}
}

const signup = ({ name, email, password, verify, persistence }) => {
	return async dispatch => {
		try {
			if(password.length<6) return dispatch({type: actionTypes.USER_ERROR, error: "Password should contain atleast 6 digits"})
			if(verify!==password) return dispatch({type: actionTypes.USER_ERROR, error: "Given passwords are different"})
			if(!name) return dispatch({type: actionTypes.USER_ERROR, error: "Please enter your full name"})
			// alert(name, password, email);
			dispatch({type: actionTypes.USER_LOADING})
			await auth.setPersistence(persistence ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION)
			// await auth.signInWithEmailAndPassword(email, password);
			await auth.createUserWithEmailAndPassword(email, password);
			await auth.currentUser?.updateProfile({displayName: name});
		} catch (e) {
			dispatch({type: actionTypes.USER_ERROR, error: e.message});
		}
	}
}

const socialSignIn = () => {
	return async dispatch => {
		dispatch({type: actionTypes.USER_ERROR, error: "Social Media Signin not setup, please try using email and password"})
	}
}

const logout = () => {
	return async dispatch => {
		try {
			dispatch({type: actionTypes.USER_LOADING})
			await auth.signOut();
		} catch (e) {
			dispatch({type: actionTypes.USER_ERROR, error: e.message})
		}
	}
}
const cancelError = () => {
	return async dispatch => {
		dispatch({type: actionTypes.USER_ERROR, error: null});
	}
}

export const userActions = {
	authStateChanged,
	login,
	signup,
	googleSignIn: socialSignIn,
	facebookSignIn: socialSignIn,
	twitterSignIn: socialSignIn,
	logout,
	cancelError
}