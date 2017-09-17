var uuid = uuid();

var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: uuid,
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});