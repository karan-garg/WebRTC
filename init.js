var isMobile = isMobile();

window.onload = function() {
    var qrElmt = document.getElementById("qrcode");
    var videoElmt = document.getElementById("scanVideo");
    if (isMobile) {
        qrElmt.style.visibility = "hidden";
        videoElmt.style.visibility = "visible";
        scan(videoElmt);
    }
    else {
        videoElmt.style.visibility = "hidden";
        qrElmt.style.visibility = "visible";
        qr(qrElmt);
    }
}