module.exports = {
    name: 'printword',
    description: "printing the next word",
    execute(message, args) {
        message.channel.send(args[0]);
    }
}
