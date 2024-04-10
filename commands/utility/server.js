const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with infos of the server'),
    async execute(interaction) {
        await interaction.reply("Pong!")
    },
};