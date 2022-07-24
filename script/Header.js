window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("heade").style.height = "5vh";
        document.getElementById("heade").style.fontSize = "1em";
        document.getElementById("header").style.height = "5vh";
        document.getElementById("logo").style.height = "5vh";
    } else {
        document.getElementById("heade").style.height = "50vh";
        document.getElementById("heade").style.fontSize = "1em";
        document.getElementById("header").style.height = "50vh";
        document.getElementById("logo").style.height = "35vh";
    }
};
function discord() {
    open("https://discord.gg/u5WbD9SaCq");
}