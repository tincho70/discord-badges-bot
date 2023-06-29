import { Client } from "discord.js";
import { BotEvent } from "../types";
import getReactionMap from '../config/reaction-map'

const event : BotEvent = {
    name: "ready",
    once: true,
    execute: async (client : Client) => {
        client.reactionMap = await getReactionMap();
        console.log('Discord bot ready');
    }
}

export default event;