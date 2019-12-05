'use strict';
const fs = require('fs');
const bencode = require('bencode');

const torrentString = fs.readFileSync('puppy.torrent');
console.log(torrentString.toString('utf8'));

const torrent = bencode.decode(fs.readFileSync('puppy.torrent'));
const trackerUrl = torrent.announce.toString('utf8');



