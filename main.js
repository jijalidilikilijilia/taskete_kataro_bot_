const { Client, Intents, MessageAttachment } = require('discord.js');
const Discord = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, 
                                        Intents.FLAGS.GUILD_MEMBERS, 
                                        Intents.FLAGS.GUILD_PRESENCES] });

const prefix = '!';

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));    // for reading .js files only
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {            // TODO: add client arg later
    console.log('Kataro is online!');
    // client.channels.cache.get('CHANNEL ID').send('Hello here!')
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('886274052740751404').send(`Мать <@${guildMember.user.id}> хорошая женщина`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.substring(prefix.length).split(" "); //args is an array of words in the message like [ 'test', 'string' ]
    // const args = message.content.slice(prefix.length).split(/ +/); 
    console.log(args);

    const command = args.shift().toLowerCase();   // command is the first element of args[]
    console.log("Command is: " + command);

    // if (command === 'ping') {
    //     client.commands.get('ping').execute(message, args);
    // } else if (command === 'hello') {
    //     message.channel.send('world!');
    // }

    switch (command) {
        case 'test': {
            client.commands.get('testRing').execute(message, args);
            break;
        }
        case 'printword': {
            client.commands.get('printword').execute(message, args);    // printWord doesn't work..
            break;
        }
        case 'print': {
            client.commands.get('print').execute(message, args);
            break; 
        }
        case 'clear': {
            client.commands.get('clear').execute(message, args);
            break; 
        }
        case 'kick': {
            client.commands.get('kick').execute(message, args);
            break; 
        }
        case 'ban': {
            client.commands.get('ban').execute(message, args);
            break; 
        }
        case 'mute': {
            client.commands.get('mute').execute(message, args);
            break; 
        }
        case 'unmute' : {
            client.commands.get('unmute').execute(message, args);
            break; 
        }
    }
});



client.login('ODg2Mjc5ODg4MTI5MDk3NzM4.YTzSdw.5gheMWWWmjV8Zkbb5oxAmK2o1ZY');
