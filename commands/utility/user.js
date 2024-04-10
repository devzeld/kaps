const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with infos of the user'),
    async execute(interaction) {
        await interaction.reply(`username: ${interaction.user.username}, joined: ${interaction.user.credentials}`);
    },
};