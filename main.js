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

 
//Add new employees

$("button").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values

  var newEmployee = $("#employee-name").val().trim();
  var newRole = $("#employee-role").val().trim();
  var startDate = $("#start-date").val().trim();
  var monthlyRate = $("#monthly-rate").val().trim();


  console.log("employee: "+newEmployee);
  console.log("role: "+newRole);
  console.log("start: "+startDate);
  console.log("rate: "+monthlyRate);

  database.ref().push({
  	name: newEmployee,
  	role: newRole,
  	start: startDate,
  	rate: monthlyRate
  });
 	
 });