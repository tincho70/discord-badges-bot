import { Message } from "discord.js";
import { BotEvent, UserEngagement } from "../types";
import calculateEngagement from "../database/level";

const event : BotEvent = {
    name: "messageCreate",
    once: true,
    execute: async (message: Message) => {
        /*if (message.guildId == process.env.DISCORD_GUILD_ID) {
            const channelId: string = (await message.channel.fetch()).id
            message.client.reactionMap.forEach(async (entry: ReactionEntry) => {
                if (entry.channelId == channelId) {
                    entry.reactions.map(async (emoji: string) => {
                        await message.react(emoji)
                    })
                }
            })
        }*/
        const userEngagement : UserEngagement = calculateEngagement(message);

        if (userEngagement.sendMessage) {
            message.member!.send(userEngagement.message);
        }
    }
}

export default event;