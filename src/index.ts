import { Client, GatewayIntentBits } from 'discord.js';
import { readdirSync } from 'fs';
import { join } from 'path';

require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
    ]
});

const handlersDir = join(__dirname, "./handlers");
readdirSync(handlersDir).forEach(handler => {
    require(`${handlersDir}/${handler}`)(client);
})

client.login(process.env.DISCORD_BOT_TOKEN);
