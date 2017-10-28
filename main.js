var config = {
    apiKey: "AIzaSyBwBH9n-7BfZBjVtfyQedXU39xmAzApnow",
    authDomain: "employee-data-f7d53.firebaseapp.com",
    databaseURL: "https://employee-data-f7d53.firebaseio.com",
    projectId: "employee-data-f7d53",
    storageBucket: "",
    messagingSenderId: "969489816576"
  };
  firebase.initializeApp(config);


 var database = firebase.database();

 database.ref().on("value"),function(snapshot) {
 	 if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists())





 	
 }