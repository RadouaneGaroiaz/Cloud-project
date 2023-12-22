

const { joinVoiceChannel, createAudioResource, createAudioPlayer, NoSubscriberBehavior } = require("@discordjs/voice");
const { PermissionsBitField } = require('discord.js');
const { EmbedBuilder } = require("discord.js");
const { players } = require('../../../playersManager');

const radioStations = [
  {
      "name": "Hit radio",
      "url": "https://hitradio-maroc.ice.infomaniak.ch/hitradio-maroc-128.mp3",
  },
  {
      "name": "Hit radio 100% PARTY",
      "url": "https://dancefloor.ice.infomaniak.ch/dancefloor-128.mp3",
  },
  {
      "name": "Hit radio 100% URBAN",
      "url": "https://rnb.ice.infomaniak.ch/rnb-128.mp3",
  },
  {
      "name": "Hit radio 100% TIKTOK",
      "url": "https://buzz.ice.infomaniak.ch/buzz-128.mp3",
  },
  {
      "name": "Hit radio 100% MGHARBA",
      "url": "https://mgharba.ice.infomaniak.ch/mgharba-128.mp3",
  }]


module.exports = {
  command_data: {
    name: "join",
    description: "Join your voice channel",
    type: 1,
    options: [
      {
        name: "channel",
        description: "The voice channel to join",
        type: 7,
        channel_types: [2],
        required: false,
      },
      {
        name: "station",
        description: "The radio station to play",
        type: 3,
        required: false,
        choices: radioStations.map(station => ({
          name: station.name,
          value: station.url,
        })),
      },
    ],
  },
  role_perms: null,
  developers_only: false,
  cooldown: null,
  category: "Music",

  run: async (client, interaction) => {
    const selectedChannel = interaction.options.getChannel("channel");
    const guildId = interaction.guild.id;
    const chosenStation = interaction.options.getString("station") || radioStations[0].url;

    const targetChannel = selectedChannel || interaction.member.voice.channel;
    if (!targetChannel) {
      return interaction.reply({
        content: `❌ You must join a voice channel first or provide a channel for me to join!`,
        ephemeral: true,
      });
    }

    const permissions = (selectedChannel || interaction.member.voice.channel).permissionsFor(interaction.client.user);
    if (!permissions.has(PermissionsBitField.Flags.Connect) || !permissions.has(PermissionsBitField.Flags.Speak)) {
      return interaction.reply({
        content: `❌ I need the permissions to join and speak in this voice channel!`,
        ephemeral: true,
      });
    }

    if (!players.has(guildId)) {
      players.set(guildId, createAudioPlayer({
        behaviors: {
          noSubscriber: NoSubscriberBehavior.Play,
        },
      }));
    }

    const player = players.get(guildId);
    const resource = createAudioResource(chosenStation);
    player.play(resource);

    const connection = joinVoiceChannel({
      channelId: targetChannel.id,
      guildId: interaction.guild.id,
      adapterCreator: interaction.guild.voiceAdapterCreator,
    });

    connection.subscribe(player);

    const chosenStationObject = radioStations.find(station => station.url === chosenStation);

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)

    if (chosenStationObject) {
      
      embed.setDescription(`🎶 Now playing: **${chosenStationObject.name}** on <#${targetChannel.id}>`)
      await interaction.reply({ embeds: [embed] });

    } else {

      embed.setDescription(`🎶 Now playing: **Unknown Station** on <#${targetChannel.id}>`)
      await interaction.reply({ embeds: [embed] });
    }
  },
};
