const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Replies with pong!')
        .addUserOption(option => option.setName('target').setDescription('user').setRequired(true))
        .addIntegerOption(option => option.setName('time').setDescription('in milliseconds').setRequired(true))
    ,
    async execute(interaction) {
        const user = interaction.options.getMember('target');
        user.timeout(interaction.options.getInteger('time'));
        await interaction.reply(`Username: ${user.username}, ID: ${user.id} has been muted.`);
    },
};
