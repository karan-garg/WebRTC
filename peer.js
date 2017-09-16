var peer;
var connection;

function listenForData(dataConnection){
    dataConnection.on('data', function (data) {
        // Will print 'hi!'
        document.getElementById("content").innerHTML += data + "<br>";
    });
}
function listenForConnection() {
    peer.on('connection', function (receivedConnection) {
        connection = receivedConnection;
        listenForData(connection);
    });
}

function registerPeer() {
    var myID = document.getElementById("myID").value || "hostPeer";
    peer = new Peer(myID, {
        key: 'y22brty3oaiz4cxr',
        config: {
            'iceServers': [
                {url: 'stun:numb.viagenie.ca'},
                {url: 'turn:numb.viagenie.ca', username: 'kgarg@uwaterloo.ca', credential: 'bigbang123'}
            ]
        }
    });
    listenForConnection();
}

function connect() {
    console.log("trying to connect");
    var targetPeerID = document.getElementById("targetPeerID").value;
    connection = peer.connect(targetPeerID);
    peer.on('error', function (err) { console.log(err)});
    connection.on('open', function () {
        listenForData(connection);
        connection.send('Connection Established!');
        console.log("connection opened; message sent!")
    });
}

function sendMsg() {
    var msg = document.getElementById("msg").value || "blank msg";
    if (connection.open) {
        connection.send(msg);
    }
    else {
        console.log("Connection is closed, cannot send msg.");
    }
}

document.getElementById("connectBtn").addEventListener("click", connect);
document.getElementById("registerBtn").addEventListener("click", registerPeer);
document.getElementById("sendBtn").addEventListener("click", sendMsg);