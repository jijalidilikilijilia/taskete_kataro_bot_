module.exports = {
    name: 'unmute',
    description: "unmutes a member",
    execute(message, args) {
        const target = message.mentions.users.first();

        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            console.log('mainRole: ' + mainRole);

            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            console.log('muteRole: ' + muteRole);

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);

            message.channel.send(`<@${memberTarget.user.id}> has been unmuted `)

        } else {
            message.channel.send('the member was not found ');
        }
    }
}
