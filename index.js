const { Client, Events, GatewayIntentBits, Collection} = require('discord.js');
const { token } = require('./config.json');
const path = require("node:path");
const fs = require("node:fs");

const client = new Client({intents: [GatewayIntentBits.Guild, GatewayIntentBits.Client]});

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}.`);
});

client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder in commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}


client.login(token).then(() => {
    console.log(`token: ${token}`);
});
