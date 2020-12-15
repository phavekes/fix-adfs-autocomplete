(function() {
	var username = document.getElementById("userNameInput");
	var password = document.getElementById("passwordInput");
	if ('autocomplete' in username) {
	   username.autocomplete = "username";
	}
	else {
	   username.setAttribute ("autocomplete", "username");
	}
	if ('autocomplete' in password) {
	   password.autocomplete = "current-password";
	}
	else {
	   password.setAttribute ("autocomplete", "current-password");
	}

	
})();
