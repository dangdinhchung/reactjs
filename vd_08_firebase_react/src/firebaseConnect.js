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

export const firebaseConnect = firebase.initializeApp(firebaseConfig);

//lấy dữ liệu từ firebase
var data = firebase.database().ref('dataForNote');
data.once('value').then(function(snapshot){
    console.log(snapshot.val());
});

//sửa dữ liệu : chưa có thì thêm mới, có rồi thì sửa dữ liệu - coi như thêm luôn, nhưng thêm có thêm 1 cách nữa, nhưng k nên dùng set để thêm
//vì phải thêm cả id
/* var data = firebase.database().ref('dataForNote/note1');
data.set({
    id: 10,
    title : "ok",
    content : "content"
}); */

//thêm dữ liệu : dùng push -> bên app.js