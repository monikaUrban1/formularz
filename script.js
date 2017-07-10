function writeFirstName() {
	firstName = document.getElementById('firstName');
	firstName.placeholder = "Podaj swoje imie"
}
function writeLastName() {
	lastName = document.getElementById('lastName');
	lastName.placeholder = "Podaj swoje nazwisko"
} 
function validateForm() {
	var lastName = document.forms["newForm"]["lastName"].value;
	var checkLastName = document.getElementById("checkLastName");
	if (lastName == null || lastName == "") {
		
		checkLastName.innerHTML = "Proszę podaj nazwisko"
		return false;
	}
	var firstName = document.forms["newForm"]["firstName"].value;
	var checkFirstName = document.getElementById("checkFirstName");
	if (firstName == null || firstName == "") {
		
		checkFirstName.innerHTML = "Proszę podaj imię"
		return false;
	}
}