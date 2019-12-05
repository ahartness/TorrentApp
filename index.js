'use strict';
const fs = require('fs');
const bencode = require('bencode');

const torrentString = fs.readFileSync('puppy.torrent');
console.log(torrentString.toString('utf8'));            // Full Torrent File String

const torrent = bencode.decode(fs.readFileSync('puppy.torrent'));
const trackerUrl = torrent.announce.toString('utf8');
console.log(trackerUrl);                                // This is our UDP





