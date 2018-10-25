import firebase from 'firebase'; 

const firebaseCredentials = {
    apiKey: "AIzaSyCX3y_bxvA5uNk3uDX3dd7IuUFSjjaMNag",
    authDomain: "burger-queen-df556.firebaseapp.com",
    databaseURL: "https://burger-queen-df556.firebaseio.com",
    projectId: "burger-queen-df556",
    storageBucket: "burger-queen-df556.appspot.com",
    messagingSenderId: "338081275694"
};

firebase.initializeApp(firebaseCredentials);

export default firebase;


export const initSesion = (email, password) => {
	firebase.auth().signInWithEmailAndPassword(email, password)
		.then(() => { 
			console.log('Se ha logueado');
			return })
		// .then(()=>)
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});
    
}

export const logout = () => {
	firebase.auth().signOut().then(() => {
		// Sign-out successful.
	}).catch((error) => {
		// An error happened.
	});
}