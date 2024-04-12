const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Replies with infos of the user')
        .addSubcommand()
        ,
    async execute(interaction) {
        await interaction.reply(`Username: ${interaction.user.username}\nJoined: ${interaction.member.joinedAt}`);
    },
};
