const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('clear')
        .setDescription('deletes some messages')
        .addIntegerOption(option => option.setName('number').setDescription('Number of messages to delete'))
    ,
    async execute(interaction) {
        interaction.channel.messages.message.delete();
        await interaction.reply(`Chat cleared successfully`);
    }
}
