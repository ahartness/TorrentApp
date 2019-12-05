'use strict';
var fs = require('fs');
var bencode = require('bencode');  

var dgram = require('dgram');
var Buffer = require('buffer').Buffer;
var urlParse = require('url').parse;

// Here is the UDP for the torrent file.  This is also the location
// of the trackers torrent.

//UDP is used more ofter since it is better performance than
// http, and http is built on top of tcp.
var torrent = bencode.decode(fs.readFileSync('puppy.torrent'));
var trackerUrl = torrent.announce.toString('utf8');
console.log(trackerUrl);                                

var url = urlParse(trackerUrl);

var socket = dgram.createSocket('udp4');
var message = Buffer.from('Hello World?', 'utf8');

socket.send(message, 0, message.length, url.port, url.host, () => {});

socket.on('message', msg => {
    console.log('message is', msg)
});






