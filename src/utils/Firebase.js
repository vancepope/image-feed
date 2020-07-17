import firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);

export async function loginWithUsernamePassword(email, password) {
    const response = await firebase.auth()
                    .signInWithEmailAndPassword(email, password)
                    .catch((error) => {
                        return error;
                    });
    return response;
}
export async function signoutUser(user) {

}
export async function getCurrentUser() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            return user;
        } else {
            return { error: 'User not found.' };
        }
    });
}
export async function updateUserProfile(info) {
    let user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: info.displayName,
    }).then(function() {
        return 'Update Successful!';
    }).catch(function(error) {
        return error;
    });
}
export async function registerUser(email, password) {
    let result = await firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
        return error;
    });
    return result;
}
export async function addUserInfo(user, info) {
    if (user != null) {
        let result = await firebase.firestore().collection('users').doc(user.uid).set(info).catch((error) => {
            return error;
        });
        return result;
    }
}
export async function getUserInfo() {
    let user = firebase.auth().currentUser;
    if (user != null) {
        let result = await firebase.firestore().collection('users').get(user.uid).catch((error) => {
            return error;
        });
        return result;
    }
}
