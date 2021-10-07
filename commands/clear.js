module.exports = {
    name: 'clear',
    description: "clear messages ",
    async execute(message, args) {
        if (!message.member.roles.cache.has('886570814554644491')) {            // if KataroMod role 
            message.reply("You don't have permissions to use this command");
        }
        else {
            if (!args[0]) return message.reply("Error: please eneter the amount of messages to delete");
            if (isNaN(args[0])) return message.reply("Error: must be a number");
            if (args[0] >= 100) return message.reply("Error: 100 messages is max for clearing");
            if (args[0] < 1) return message.reply("Error: you can't delete less then 1 message");

            await message.channel.messages.fetch({limit : args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
            }) 
        }
    }
}
