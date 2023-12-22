const { getVoiceConnection } = require('@discordjs/voice');
const { players } = require('../../../playersManager');

module.exports = {
  command_data: {
    name: 'leave',
    description: 'Leave your voice channel',
    type: 1
  },
  role_perms: null,
  developers_only: false,
  cooldown: null,
  category: 'Music',

  run: async (client, interaction) => {
    if (interaction.guild.members.me.voice.channelId !== interaction.member.voice.channelId) {
      return interaction.reply({ content: '❌ You must be in the same voice channel with me!', ephemeral: true });
    } else {
      const connection = getVoiceConnection(interaction.guild.id);
      if (connection) {
        connection.destroy();

        // Remove the player associated with this guild from the Map
        const guildId = interaction.guild.id;
        if (players.has(guildId)) {
          const player = players.get(guildId);
          player.stop(); // Stop the player
          console.log("before")
          console.log(players);
          players.delete(guildId); // Remove the player from the Map
          console.log("after")
          console.log(players);
        }

        interaction.reply({ content: '✅ Disconnected from your channel', ephemeral: true });
      } else {
        interaction.reply({ content: '❌ I am not currently in a voice channel.', ephemeral: true });
      }
    }
  },
};
