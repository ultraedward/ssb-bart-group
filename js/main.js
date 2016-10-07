// list of existing users + passwords
var objPeople = [
	{
		username: "TERRI",
		password: "PASSWORD"
	},
	{
		username: "EDWARD",
		password: "PASSWORD1"
	},
	{
		username: "EUGENIA",
		password: "PASSWORD2"
	},
	{
		username: "PAUL",
		password: "PASSWORD3"
	},
	{
		username: "BRENT",
		password: "PASSWORD4"
	}
]


//login functionality
function getInfo() {
	//retrieve data input from the form
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	
	//loop through all the user objects and confirm if the username and passwords are correct
	for(i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			// greet new user
			alert('Welcome ' + username + "!")
			// success: print to console
			console.log('Welcome ' + username + '!')
			return
		}
	}

	//error if username and password do not match
	console.log("incorrect username or password")
}


//register new user functionality
function registerUser() {
	//retrieve data input from the form
	var registerUser = document.getElementById("newUsername").value
	var registerPassword = document.getElementById("newPassword").value
	var newUser = {
		username: registerUser,
		password: registerPassword
	}
	
	//checks to make sure the username is not already taken, stops the function if it is
	for(i = 0; i < objPeople.length; i++) {
		if(registerUser == objPeople[i].username) {
			alert("That username is already in use")
			return
		// password must be 8 characters
		} else if (registerPassword.length < 8) {
			alert("That password is too short")
			return
		}
	}

	//pushes the new user into the objPeople array as a new object at the end
	objPeople.push(newUser)
	// check objPeople to confirm it was added
	console.log(objPeople)
	// greet new user
	alert(newUser.username + ',' + ' attempt to login above.')
}