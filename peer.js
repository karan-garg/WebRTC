var peer;

function listen() {
    peer.on('connection', function (connection) {
        connection.on('data', function (data) {
            // Will print 'hi!'
            console.log(data);
        });
    });
}

function registerPeer() {
    var myID = document.getElementById("myID").value || "hostPeer";
    peer = new Peer(myID, {
        key: 'y22brty3oaiz4cxr',
        config: {
            'iceServers': [
                {url: 'stun:numb.viagenie.ca' },
                {url: 'turn:numb.viagenie.ca', username: 'kgarg@uwaterloo.ca', credential: 'bigbang123'}
            ]
        }
    });
    listen();
}

function connect() {
    console.log("trying to connect");
    var targetPeerID = document.getElementById("targetPeerID").value;
    var connection = peer.connect(targetPeerID);
    connection.on('open', function () {
        connection.send('hi!');
        console.log("connection opened; message sent!")
    });
}

document.getElementById("connectBtn").addEventListener("click", connect);
document.getElementById("registerBtn").addEventListener("click", registerPeer);