import { ReactionEntry } from '../types'

export default async (): Promise<ReactionEntry[]> => {
    return [
        // bienvenida
        {
            "channelId": "1075103050009690179",
            "reactions": [
                "\u{1f603}",  // SMILING FACE WITH OPEN MOUTH
                "\u{1f973}",  // FACE WITH PARTY HORN AND PARTY HAT
                "\u{1f44b}",  // WAVING HAND SIGN
                "\u{1f38a}",  // CONFETTI BALL
                "\u{1f389}",  // PARTY POPPER
            ],
        },
        // chat-general
        {
            //"channelId": "1075103050009690180",
            "channelId": "1091343446985412660",
            "reactions": [
                "\u{1f44d}",  // THUMBS UP SIGN
                "\u{1f91d}",  // HANDSHAKE
                "\u{1f40d}",  // SNAKE
            ],
        },
    ]
}
