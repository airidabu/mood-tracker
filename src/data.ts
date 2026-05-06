export type Mood = {
    value: string;
    emoji: string;
}

const MOODS: Mood[] = [
    {
        value: "tired",
        emoji: "😵"
    },
    {
        value: "unhappy",
        emoji: "😞"
    },
    {
        value: "chill",
        emoji: "😎"
    },
    {
        value: "happy",
        emoji: "😊"
    }
]

export default MOODS;