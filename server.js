/* PeerServer Setup 

- Make sure to enable "allow_discovery" in order to allow mesh networking

*/

var PeerServer = require('peer').PeerServer;
var server = new PeerServer({port: 9000, allow_discovery: true});

server.on('connection', function(id) {
console.log(id + ' connected.');
 });

server.on('disconnect', function(id) {
console.log(id + ' disconnected.');
 })