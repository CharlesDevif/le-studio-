

// Evenemment de scroll de la bar navigation

let barNav = document.getElementById('barNav');
window.onscroll = function () {
    scrollBar()
};

function scrollBar() {
    if (document.body.scrollTop > 0.5 || document.documentElement.scrollTop > 0.5) {
        barNav.style.position = "sticky";
        barNav.style.backgroundColor = "black"
    } else {
        barNav.style.position = "absolute";
        barNav.style.backgroundColor = "transparent"

    }
}






// **-------------------------------------------------------------------------------------------------------------------------------**