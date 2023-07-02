import { Message, MessageType } from "discord.js";

const engagement = (message: Message) : number => {
    const guildId : string = message.guildId!;
    
    // Channel allowed?
    const channelsAllowed = getChannelsAllowed(guildId);
    if (!channelsAllowed.includes(message.channelId)) return 0;


    // Calculate new engagement
    const current = getCurrentEngagement(guildId, message.author.id);
    let addEngagement = 10; // Default engagement by text messages
    switch (message.type) {
        case MessageType.ThreadCreated:
            let addEngagement = 20; // Create thread
            break;
    }
    
    return current + addEngagement;
}

const getCurrentEngagement = (guildId: string, userId: string) : number => {
    // TODO: Interact with db
    return 0;
}

const getChannelsAllowed = (guildId: string) : Array<string> => {
    return [
        "1091343446985412660",
        "1091343446985412661"
    ]
}
export default engagement;