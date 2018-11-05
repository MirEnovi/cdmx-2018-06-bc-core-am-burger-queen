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
export const auth = firebase.auth();
// const db = firebase.firestore();


export default firebase;


export const initSesion = (email, password) => {
	auth.signInWithEmailAndPassword(email, password)
		.then((res) => { 
			// console.log(res);
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
	auth.signOut().then(() => {
		console.log('Desconectado')
		return
	})
	.catch((error) => console.log(`Error: ${error.code}: ${error.message}`));	
}

export const PasswordReset = (emailAddress) => {
	// const emailAddress = "user@example.com";

	auth.sendPasswordResetEmail(emailAddress).then(() => {
	// Email sent.
	alert(`revisa tu email: ${emailAddress}`);
	}).catch(function(error) {
	// An error happened.
	});
}