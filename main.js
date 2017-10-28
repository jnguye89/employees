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


 // database.ref().on("value", function(snapshot){
 // 	console.log(snapshot);
 // 	// console.log(snapshot.val().name);
 // 		var tableAdd = $(".table");
	//  	tableAdd.append("<tr>");
	//  	tableAdd.append("<td>" + snapshot.val().name);
	//  	tableAdd.append("<td>" + snapshot.val().role);
	//  	tableAdd.append("<td>" + snapshot.val().startDate);
	//  	tableAdd.append("<td>");
	//  	tableAdd.append("<td>$ " + snapshot.val().monthlyRate);
 // })

 database.ref().once("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var tableAdd = $(".table");
    var tableRowAdd = $("<tr>");
	 	tableAdd.append(tableRowAdd);
	 	tableRowAdd.append("<td>" + childSnapshot.val().name);
	 	tableRowAdd.append("<td>" + childSnapshot.val().role);
	 	tableRowAdd.append("<td>" + childSnapshot.val().startDate);
	 	tableRowAdd.append("<td>");
	 	tableRowAdd.append("<td>$ " + childSnapshot.val().monthlyRate);
  })
});