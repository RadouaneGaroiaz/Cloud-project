const { EmbedBuilder } = require("discord.js");

module.exports = {
    command_data: {
      name: 'invite',
      description: 'Invite the bot to your server',
      type: 1
    },
    role_perms: null,
    developers_only: false,
    cooldown: null,
    category: 'Music',

    run: async ( client, interaction ) => {
        const embed = new EmbedBuilder()
        .setTitle('Invite me to your server')
        .setDescription('https://discord.com/api/oauth2/authorize?client_id=1129769635307339787&permissions=274881054784&scope=bot')
        .setColor('Aqua')
        .setFooter({text : `Requested by ${interaction.user.tag}`, iconURL : `${interaction.user.avatarURL()}`})
        .setTimestamp();
    
        interaction.reply({ embeds: [embed], ephemeral: true });
    
     
	},
}