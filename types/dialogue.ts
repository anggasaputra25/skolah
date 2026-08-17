export interface DialogueMessage {
    id: number;
    speaker: "partner" | "user";
    name: string;
    text: string;
    avatarBg: string;
}