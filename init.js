var isMobile = isMobile();

window.onload = function() {
    if (isMobile) {
        document.getElementById("qrcode").style.visibility = "hidden";
        document.getElementById("scanVideo").style.visibility = "visible";
        scan();
    }
    else {
        document.getElementById("scanVideo").style.visibility = "hidden";
        document.getElementById("qrcode").style.visibility = "visible";
        qr();
    }
}