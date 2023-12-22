const { createAudioPlayer } = require('@discordjs/voice');

const players = new Map(); // Store players per server

module.exports = { players };
