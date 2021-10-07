const ms = require('ms');


module.exports = {
    name: 'mute',
    description: "mutes a member",
    execute(message, args) {
        const target = message.mentions.users.first();

        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            console.log('mainRole: ' + mainRole);

            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            console.log('muteRole: ' + muteRole);

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);

                message.channel.send(`<@${memberTarget.user.id}> has been muted forever`)
                return

            } 

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ` + args[1]);
            
            setTimeout(function() {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);

                message.channel.send(`<@${memberTarget.user.id}> has been muted`) 
            }, ms(args[1])); 

        } else {
            message.channel.send('the member was not found ');
        }
    }
}
