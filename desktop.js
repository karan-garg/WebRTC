function initDesktop(qrElmt) {
    var uuid = genUuid();
    var qrcode = new QRCode(qrElmt, {
        text: uuid,
        width: 250,
        height: 250,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    function openURL(url) {
        console.log("connection established");
    }

    var desktopHost = registerPeer(uuid);
    var connection;
    desktopHost.on('connection', function (receivedConnection) {
        connection = receivedConnection;
        attachDataListener(receivedConnection, openURL);
    });

}