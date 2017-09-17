var auth_key = 'y22brty3oaiz4cxr';

function registerPeer(id) {
    var peer = new Peer(id, {
        key: auth_key,
        config: {
            'iceServers': [
                {url: 'stun:numb.viagenie.ca'},
                {url: 'turn:numb.viagenie.ca', username: 'kgarg@uwaterloo.ca', credential: 'bigbang123'}
            ]
        },
        debug: 3
    });
    return peer;
}

function attachDataListener(dataConnection, dataHandler){   // dataHandler accepts one argument- the data received
    dataConnection.on('data', dataHandler);
}