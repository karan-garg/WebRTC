function initMobile(videoElmt) {
    var scanner = new Instascan.Scanner({video: videoElmt, mirror: false});
    var mobileHost;
    var destPeerID;
    var connection;

    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[cameras.length - 1]);
        } else {
            console.error('No cameras found.');
        }
    }).catch(function (e) {
        console.error(e);
    });

    function beam(hostPeer, destPeerID) {            // JS bookmarklet
        var url = window.location.href;
        mobileHost = registerPeer();
        connection = connect(hostPeer, destPeerID);  // We create a new connection on each beam;
                                                     // Cross-tab connections will die on mobile browsers when tabs are switched


    }

    function connect (hostPeer, destPeerID){
        console.log("trying to connect");
        var connection = hostPeer.connect(destPeerID);
        hostPeer.on('error', function (err) { console.log(err)});
        connection.on('open', function () {
            attachDataListener(connection, openURL);
            console.log("connection opened, listening for data")
        });
        return connection;
    }

    function displayPairedMsg(){
    }

    scanner.addListener('scan', function (uuid) {
        destPeerID = uuid;
        scanner.stop();
        mobileHost = registerPeer();
        connection = connect(mobileHost, destPeerID);
        displayPairedMsg();
    });
}