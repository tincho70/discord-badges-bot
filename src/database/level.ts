import { Message } from "discord.js";
import { UserEngagement } from "src/types";


const level = (message: Message) : UserEngagement => {
    // TODO: determine engagement and level
    let response = ``;
    let sendMessage = false;
    const user = message.member!;
    const l = 1;
    switch (l) {
        case 1:
            response = `Hola ${user.displayName}! Vimos que estás hablando por el server y alcanzaste el nivel 1!!`
            sendMessage = true;
            break;
    
        default:
            break;
    }
    // TODO: implement debug module
    console.dir(user);

    return {
        guildId: "",
        userId: user.id,
        engagement: 10,
        level: l,
        sendMessage: sendMessage,
        message: response
    }
}

export default level;