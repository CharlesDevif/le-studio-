setInterval(myTimer, 5000);
function myTimer() {
$("#div").css("display, block")
$("#div").fadeIn(1000);

}

setInterval(myTimer2, 10500);
function myTimer2() {
$("#div").fadeOut(1000);

}
function myTimer3() {
    $("#div").remove();
    $("#butContinuer").css("display, block")
    $("#butContinuer").fadeIn(1000);
    }
function newWindow(){
    window.location.href="../landingPage.html"
}
setInterval(myTimer3, 8400);
setInterval(newWindow,8500);
 
