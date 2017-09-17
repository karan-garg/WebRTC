function scan(videoElmt) {
    var scanner = new Instascan.Scanner({video: videoElmt});

    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[cameras.length - 1]);
        } else {
            console.error('No cameras found.');
        }
    }).catch(function (e) {
        console.error(e);
    });

    scanner.addListener('scan', function (content) {
        console.log(content);
    });
}