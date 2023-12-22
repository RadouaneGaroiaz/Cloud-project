const { EmbedBuilder } = require("discord.js");
const guildSchema = require("../../models/guilds-schema");

module.exports = {
    command_data: {
      name: 'reset',
      description: 'Delete your server data from our database',
      type: 1
    },
    role_perms: null,
    developers_only: true,
    cooldown: null,
    category: 'Music',

    run: async ( client, interaction ) => {

        if(interaction.user.id !== interaction.guild.ownerId) return interaction.reply({ content: "You are not the owner of this server", ephemeral: true })
    
        const guildId = interaction.guild.id;
        const guildData = await guildSchema.findOne({ guildid: guildId });

        if (!guildData) {
            return interaction.reply({ content: "Your server data is not in our database", ephemeral: true })
        }

        //await guildSchema.findOneAndDelete({ guildid: guildId });
        
        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setDescription("Your server data has been deleted from our database")
        .setTimestamp()

        await interaction.reply({ embeds: [exampleEmbed] });
    
    
     
	},
}



