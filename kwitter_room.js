var firebaseConfig = {
      apiKey: "AIzaSyCxI1IyLz-88NG-BqFAxbKMoP1ae1aR1Sc",
      authDomain: "kwitterdatabase-85541.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-85541-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-85541",
      storageBucket: "kwitterdatabase-85541.appspot.com",
      messagingSenderId: "504732162327",
      appId: "1:504732162327:web:e56a8245cdb36654107f52",
      measurementId: "G-1F0FYLQC3W"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
 user_name=localStorage.getItem("user_name")
 document.getElementById("user_name").innerHTML="Welcome" + user_name + "!"

 function addRoom(){
      room_name=document.getElementById("room_name").value
      localStorage.setItem("room_name",room_name)
      firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
      window.location="kwitter_room.html"
      }




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("room_list").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}