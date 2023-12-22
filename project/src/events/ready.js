const client = require('../index');



client.once('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);
    console.log('> Servers: ' + client.guilds.cache.size);
/*     setInterval(() => {
            //set client activities
        const GuildsCount = client.guilds.cache.size;
        const activities = [`i'm in ${GuildsCount} servers`, `24H/7 Hit Radio!`];
        const index = Math.floor(Math.random() * activities.length);
        const activity = {name: activities[index], type: 2};
        client.user.setActivity(activity);
    }, 10000); */
    client.user.setActivity({name:'24H/7 Hit Radio!', type: 2});
});

/*  client.once('ready', async () => {
    console.log('> Logged in as ' + client.user.username + '.');
    console.log('> Servers: ' + client.guilds.cache.size);

   // client.guilds.cache.get('1159480934983274708').leave();

     // Create an object to store guilds based on their owners
    const guildsByOwners = {};

    // Populate the guildsByOwners object
    client.guilds.cache.forEach(guild => {
        const ownerId = guild.ownerId;
        if (!guildsByOwners[ownerId]) {
            guildsByOwners[ownerId] = [];
        }
        guildsByOwners[ownerId].push({ name: guild.name, id: guild.id });
    });

    // Sort the guilds by owner ID
    const sortedOwners = Object.keys(guildsByOwners).sort((a, b) => parseInt(a) - parseInt(b));

    // Print out guilds by owners
    sortedOwners.forEach(ownerId => {
        const owner = client.users.cache.get(ownerId);
        console.log(`Owner: ${ownerId} (${ownerId})`);
        guildsByOwners[ownerId].forEach(guild => {
            console.log(`  > ${guild.name} (${guild.id})`);
        });
    }); 
}); */
