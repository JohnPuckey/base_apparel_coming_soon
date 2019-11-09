let x = window.matchMedia("(min-width: 992px)")

function largeScreen(x) {
    if (x.matches) { // if media query matches
        document.getElementById("big-image").src = "images/hero-desktop.jpg";
    } else {
        document.getElementById("big-image").src = "images/hero-mobile.jpg";
    }
}

largeScreen(x) // call listener 
x.addListener(largeScreen) // attach function on state change

// email validation

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) // check email value against regex
}

function Validate() {
    var error = document.getElementById("error-msg")
    var email = document.getElementById("email")
    var errorIcon = document.getElementById("error-icon")
    error.innerHTML = "" // clear error message 

    // if email is valid test submit form

    if (emailIsValid(email.value)) {
        error.innerHTML = ""
        errorIcon.style.visibility = "hidden" // make icon visible
        document.getElementById("email").classList.remove("error") // add error clas to email input

        //return true

    } else {

        // if email is not valid do not submit and add error messages

        error.innerHTML = "Please provide a valid email" // populate error message
        errorIcon.style.visibility = "visible" // make icon visible
        document.getElementById("email").classList.add("error") // add error clas to email input
    }
    return false
}