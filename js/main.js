
// Change main image

let x = window.matchMedia("(min-width: 992px)")

function largeScreen(x) {
    if (x.matches) { // if media query matches
        document.getElementById("big-image").src = "images/hero-desktop.jpg";
    } else {
        document.getElementById("big-image").src = "images/hero-mobile.jpg";
    }
}

largeScreen(x)  // call listener 
x.addListener(largeScreen) // attach function on state change

