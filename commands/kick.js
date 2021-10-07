module.exports = {
    name: 'kick',
    description: "kicking a member",
    execute(message, args) {
        const member = message.mentions.users.first();
        console.log("m_: " + member);
        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            console.log("m_target: " + memberTarget);
            memberTarget.kick();
            message.channel.send("user has been kicked");
        } else {
            message.channel.send("Error: can't kick this member");
        }
    }
}
