const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('info')
        .setDescription('Replies with infos of the user')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('user info')
                .addUserOption(option =>
                    option.setName('target').setDescription('member')
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('server infos')
                .addBooleanOption(option => option.setName('embed').setDescription('build embed'))
        )
    ,
    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'user') {
            const user = interaction.options.getUser('target');

            if (user) {
                await interaction.reply(`Username: ${user.username}\nID: ${user.id}`);
            } else {
                await interaction.reply(`Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
            }

        } else if (interaction.options.getSubcommand() === 'server') {
            if (interaction.options.getBoolean('embed') === true) {
                await interaction.reply({
                    embeds: [new EmbedBuilder()
                        .setTitle(`${interaction.guild.name}`)
                        .setColor(interaction.member.displayHexColor)
                        .setFields(
                            {name: "Total members:", value: `${interaction.guild.members.size} Members`},

                            {name: "Online members:", value: `Members`, inline: true},
                            {name: "DND members:", value: `Members`, inline: true},
                            {name: "Inactive members:", value: `Members`, inline: true},

                            {name: "\u200B", value: "\u200B"},

                            {name: "Total members:", value: `${interaction.guild.members.size} Members`, inline: true},
                            {name: "Online members:", value: `Members`, inline: true},
                            {name: "Online members:", value: `Members`, inline: true}
                            )
                        .setFooter({text: `Requested by: ${interaction.user.username}`, iconURL: interaction.user.avatarURL()})
                        ]
                    });
            } else if (interaction.options.getBoolean('embed') === false) {
                await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
            }
        }
    }
}
