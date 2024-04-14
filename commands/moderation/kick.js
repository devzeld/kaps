const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Replies with pong!'),
    async execute(interaction) {
        await interaction.reply("Pong!")
    },
};
