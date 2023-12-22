const { EmbedBuilder } = require("discord.js");
const players = require('../../../playersManager');

module.exports = {
    command_data: {
      name: 'status',
      description: 'Check the status of the bot',
      type: 1
    },
    role_perms: null,
    developers_only: true,
    cooldown: null,
    category: 'Developer',

    run: async ( client, interaction ) => {
      
        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle(`:desktop: Bot Status`)
        //.setDescription("Hello, my name is Fivem Eye!\nYou can call me 5 Eye (Fivem Eye).\n\nI was created by Dudu49#3517 in an effort to combat the cheating in the Morrocan FiveM community.\n\nI am the frontend for a database of players who was banned from moroccan servers for cheating, with settings to prevent those users from entering your discord server.\n\nYou can join the Official Discord for more information: <https://discord.gg/>")
        .addFields(
          {
            name: "I am in",
            value: `> ${interaction.client.guilds.cache.size} servers`,
            inline: true,
          },
          
          {
            name: "Bot Uptime Since Last Restart",
            value: `> I have been up for ${formatUptime(process.uptime())}`,
          },
          {
            name: "Memory Usage",
            value: `> I am currently using ${
              Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) /
              100
            } MB of RAM. `,
            inline: true,
          },
          {
            name: "Players Connected",
            value: `> I am currently playing music in ${players.players.size} voice channels.`,
            inline: true,
            
          }
        )
        .setTimestamp()
        .setFooter({
          text: `HIT RADIO • ζ͜͡DD Bot`,
          iconURL:
            "https://www.radio.fr/images/broadcasts/c5/fa/10553/1/c300.png",
        });
  
      await interaction.reply({ embeds: [exampleEmbed] });
    
     
	},
}



function formatUptime(uptime) {
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
  
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }