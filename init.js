var isMobile = isMobile();

window.onload = function() {
    var qrElmt = document.getElementById("qrcode");
    var videoElmt = document.getElementById("scanVideo");
    if (isMobile) {
        qrElmt.style.visibility = "hidden";
        videoElmt.style.visibility = "visible";
        initMobile(videoElmt);
    }
    else {
        videoElmt.style.visibility = "hidden";
        qrElmt.style.visibility = "visible";
        initDesktop(qrElmt);
    }
}