import { Message } from "discord.js";
import { BotEvent, ReactionEntry } from "../types";

const event : BotEvent = {
    name: "messageCreate",
    once: true,
    execute: async (message: Message) => {
        if (message.guildId == process.env.DISCORD_GUILD_ID) {
            const channelId: string = (await message.channel.fetch()).id
            message.client.reactionMap.forEach(async (entry: ReactionEntry) => {
                if (entry.channelId == channelId) {
                    entry.reactions.map(async (emoji: string) => {
                        await message.react(emoji)
                    })
                }
            })
        }
    }
}

export default event;