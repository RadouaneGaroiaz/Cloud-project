const { Client, Collection, EmbedBuilder } = require('discord.js');
const voice = require('@discordjs/voice');
const { Colors, BetterConsoleLogger } = require('discord.js-v14-helper');
const fs = require('fs');
const config = require('./config/main');
process.env.FFMPEG_PATH = require('ffmpeg');
const players = require('../playersManager');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const client = new Client(config.client.constructor);


client.commands = new Collection();
client.interactions = new Collection();

client.on('voiceStateUpdate', (oldState, newState) => {
    // check if someone connects or disconnects
    if (oldState.channelId === null || typeof oldState.channelId == 'undefined') return;
    // check if the bot is disconnecting
    if (newState.id !== client.user.id) return;
    // clear the queue
    return players.players.delete(oldState.guild.id);
    
});

/* client.on('voiceStateUpdate', (oldState, newState) => {
    handleVoiceStateUpdate(oldState, newState);
}); */

/* async function handleVoiceStateUpdate(oldState, newState) {
=======
client.on('voiceStateUpdate', (oldState, newState) => {
    handleVoiceStateUpdate(oldState, newState);
});

async function handleVoiceStateUpdate(oldState, newState) {

    // Check if the bot joined a new channel
    if (!oldState.channelId && newState.channelId) {
        checkAndLeaveIfAlone(newState.channel);
    }

    // Check if the bot was already in a channel and there's a change in the old channel
    if (oldState.channelId && oldState.channelId !== newState.channelId) {
        checkAndLeaveIfAlone(oldState.channel);
    }

} */




/* function checkAndLeaveIfAlone(channel) {
    // If there's only one member in the channel and it's the bot
    if (channel.members.size === 1 && channel.members.has(channel.guild.members.me.id)) {
        voice.getVoiceConnection(channel.guild.id).disconnect(); // This makes the bot leave the channel
    }
} */



/* 



function checkAndLeaveIfAlone(channel) {
    // Wait for 30 seconds (30000 milliseconds)
    setTimeout(() => {
        // If there's only one member in the channel and it's the bot
        if (channel.members.size === 1 && channel.members.has(channel.guild.members.me.id)) {
            voice.getVoiceConnection(channel.guild.id).disconnect(); // This makes the bot leave the channel
        }
    }, 30000);  // 30 seconds

} */





/* function checkAndLeaveIfAlone(channel) {
    // Wait for 30 seconds (30000 milliseconds)
    setTimeout(() => {
        // Refresh the state of the channel in case it's changed during the timeout
        const refreshedChannel = channel.guild.channels.cache.get(channel.id);

        // If there's only one member in the refreshed channel and it's the bot
        if (refreshedChannel && refreshedChannel.members.size === 1 && refreshedChannel.members.has(channel.guild.members.me.id)) {
            voice.getVoiceConnection(channel.guild.id).disconnect();// This makes the bot leave the channel
        }
    }, 30000);  // 30 seconds
} */




app.all('/', (req, res) => {
    res.send("bot is running")
});


app.listen(PORT, () => {
    console.log(`Server is ready on port ${PORT}`);
});


module.exports = client;

new BetterConsoleLogger(`
███████╗██████╗░░██████╗░████████╗██╗███████╗██╗░░░██╗
██╔════╝██╔══██╗██╔═══██╗╚══██╔══╝██║██╔════╝╚██╗░██╔╝
███████╗██████╔╝██║░░░██║░░░██║░░░██║█████╗░░░╚████╔╝░
╚════██║██╔═══╝░██║░░░██║░░░██║░░░██║██╔══╝░░░░╚██╔╝░░
███████║██║░░░░░╚██████╔╝░░░██║░░░██║██║░░░░░░░░██║░░░
╚══════╝╚═╝░░░░░░╚═════╝░░░░╚═╝░░░╚═╝╚═╝░░░░░░░░╚═╝░░░
`)
.setTextColor(Colors.Blue)
.log(true);

fs.readdirSync('./src/handlers').forEach((handler) => {
    new BetterConsoleLogger('[INFO] Handler loaded: ' + handler)
        .setTextColor(Colors.Bright_yellow)
        .log(true);

    require('./handlers/' + handler)(client, config);
});

require('./error/main')();

client.login(config.client.token);