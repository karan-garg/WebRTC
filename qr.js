function qr() {
    var uuid = genUuid();
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: uuid,
        width: 250,
        height: 250,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}