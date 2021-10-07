module.exports = {
    name: 'testRing',
    description: "simple ping response",
    execute(message, args) {
        message.channel.send('ready!');
    }
}