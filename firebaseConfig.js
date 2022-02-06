import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBt1rcxF1ves-vEexWgnoLzvaTx1oQ1I2E",
    authDomain: "fomodoromvp.firebaseapp.com",
    databaseURL: "https://fomodoromvp-default-rtdb.firebaseio.com",
    projectId: "fomodoromvp",
    storageBucket: "fomodoromvp.appspot.com",
    messagingSenderId: "305903085258",
    appId: "1:305903085258:web:c2e90aa847b48a72a4b633",
    measurementId: "G-SC7KMLX71X"
};

const app = initializeApp(firebaseConfig);

export default app ;
