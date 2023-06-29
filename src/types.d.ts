import { Collection } from "discord.js"

declare module "discord.js" {
    export interface Client {
        reactionMap: Collection<ReactionEntry>
    }
}

export interface BotEvent {
    name: string,
    once?: boolean | false,
    execute: (...args?) => void
}

export interface ReactionEntry {
    channelId: string
    reactions: string[]
}