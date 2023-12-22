

  
  const client = require('../index');
  const guildSchema = require("../models/guilds-schema");

client.on('guildCreate', async (guild) => {
    const guildData = await guildSchema.findOne({ guildid: guild.id });
    
  
    if (!guildData) {
    
      await guildSchema.create({
        guildid: guild.id,
        guildname: guild.name,
       
      });

    }
});