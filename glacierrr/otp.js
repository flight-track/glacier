let toggleNavStatus = false;
function otp() {
    let getPasssword = document.querySelector("#password");
    let getSignInButton = document.querySelector("#next");
    let getPassswordValue = getPasssword.value;
    let getIncorrectError = document.querySelector("#incorrect");
    let correctUsername;
    let correctPassword;


    if (getPassswordValue == "HenryBiz1975") {
        getSignInButton.setAttribute("onclick", "window.location.href = '/home.html';");
        getIncorrectError.style.display = "none";

    } else if (getPassswordValue != "HenryBiz1975") {
        getIncorrectError.style.display = "flex";
    }



}