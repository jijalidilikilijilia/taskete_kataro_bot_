
module.exports = {
    name: 'print',
    description: "printing the next phrase",
    execute(message, words) {
        const phrase = [];
        for (let i = 0; i < words.length; i++) {
            // message.channel.send(words[i]);    // 1 word per message (for spamming mb)
            phrase.push(words[i]);
            // console.log(phrase[i]);      // for debugging 
        }
        
        message.channel.send(phrase.join(' '));
    }
}
