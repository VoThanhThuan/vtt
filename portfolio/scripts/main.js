window.onload = function() {
    VanillaTilt.init(document.querySelector(".window"), {
        max: 5,
        reverse: true,
        speed: 2000
    });
};
var mb = document.getElementById("mb")
var mblink = document.getElementById("mblink")
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    mb.innerText = "ViewerTouch()"
    mblink.href = "about/vtt.html"
}