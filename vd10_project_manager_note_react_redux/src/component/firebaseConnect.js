import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBGPScZ5W8x59KAbd2aQd88-GTPpf0JZcU",
    authDomain: "project-ghi-chu-react-redux.firebaseapp.com",
    databaseURL: "https://project-ghi-chu-react-redux.firebaseio.com",
    projectId: "project-ghi-chu-react-redux",
    storageBucket: "project-ghi-chu-react-redux.appspot.com",
    messagingSenderId: "162559891003",
    appId: "1:162559891003:web:70903db91873f881"
};
// Initialize Firebase

/* export const noteData = firebase.initializeApp(firebaseConfig); *///test xem kết nối được chưa

firebase.initializeApp(firebaseConfig);
export const noteData = firebase.database().ref('dataForNote'); // lấy dữ liệu