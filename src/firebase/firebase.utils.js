import firebase from "firebase/compat";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyA-yzdWMOH9aWADHVFYiO3DGOWiZxp60qQ",
    authDomain: "online-store-demo-50456.firebaseapp.com",
    projectId: "online-store-demo-50456",
    storageBucket: "online-store-demo-50456.appspot.com",
    messagingSenderId: "15639704378",
    appId: "1:15639704378:web:21f76be3f6ff789685d603",
    measurementId: "G-J18FQF2XG9"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>
{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                createdAt,
                displayName,
                email,
                ...additionalData
            });
        }catch (e) {
            console.log('error creating user', e.message);
        }

    }

    return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

