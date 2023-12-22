const { ClientIntents, ClientPartials } = require('discord.js-v14-helper');
const { Client, GatewayIntentBits } = require('discord.js');
require("dotenv").config();

const intents = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
];


module.exports = {
    // Client configuration:
    client: {
        constructor: {
            intents: intents,
            partials: ClientPartials,
          /*    presence: {
                activities: [
                    {
                        name: '24H/7 Hit Radio!',
                        type: 0
                    }
                ],
                status: 'online'
            }  */
        },
        token: process.env.CLIENT_TOKEN,
        id: process.env.CLIENT_ID
    },

    // Database:
    database: {
        mongodb_uri: process.env.MONGODB_URI
    },

    // Users:
    users: {
        developers: [process.env.DEVELOPPERS_ID],
        owner: process.env.OWNER_ID
    },
    
    channels: {
        logging_channel: process.env.LOGGING_CHANNEL_ID
    },

    // Spotify:
    spotify: {
        clientId: process.env.SPOTIFY_ID,
        clientSecret: process.env.SPOTIFY_SECRET,
        redirectUri: process.env.REDIRECT_URI,
        api: null,
    },
};
