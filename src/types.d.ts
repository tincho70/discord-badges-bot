import { Collection } from "discord.js"

/*declare module "discord.js" {
    export interface Client {
        reactionMap: Collection<ReactionEntry>
    }
}*/

export interface BotEvent {
    name: string,
    once?: boolean | false,
    execute: (...args?) => void
}

export interface UserEngagement {
    guildId: string,
    userId: string,
    engagement: number,
    level: number,
    sendMessage: boolean | false,
    message: string | "",
}