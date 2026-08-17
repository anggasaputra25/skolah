import { DialogueMessage } from "@/types/dialogue";

export const READING = {
    title: "Reading Comprehension",
    subtitle: "Read the story and answer the question below.",
    passage: "Sarah bangun tidur lebih awal setiap pagi untuk menyiapkan roti segar untuk toko rotinya. Dia menyukai aroma kayu manis yang hangat dan kopi di tokonya.",
    question: "Apa yang disiapkan Sarah lebih awal di pagi hari?",
    options: [
        { id: "a", text: "Roti segar untuk toko rotinya", isCorrect: true },
        { id: "b", text: "Teh panas dan sup", isCorrect: false },
        { id: "c", text: "Buku-buku untuk tokonya", isCorrect: false },
        { id: "d", text: "Pakaian untuk pasar", isCorrect: false },
    ],
};

export const SPEAKING = {
    title: "Speaking Practice",
    subtitle: "Read the sentence out loud clearly into your microphone.",
    targetText: "Sarah bangun tidur lebih awal setiap pagi untuk menyiapkan roti segar untuk toko rotinya.",
    phoneticHint: "SAH-rah BAH-ngoon TEE-door LEH-bih AH-wal SEH-tee-ahp PAH-gee...",
};

export const LISTENING = {
    title: "Listening Comprehension",
    subtitle: "Listen to the audio track and answer the question below.",
    audioUrl: "/assets/audio/listening.m4a",
    transcript: "Sarah bangun tidur lebih awal setiap pagi untuk menyiapkan roti segar untuk toko rotinya. Dia menyukai aroma kayu manis yang hangat dan kopi di tokonya.",
    question: "Apa yang disiapkan Sarah lebih awal di pagi hari?",
    options: [
        { id: "a", text: "Roti segar untuk toko rotinya", isCorrect: true },
        { id: "b", text: "Teh panas dan sup", isCorrect: false },
        { id: "c", text: "Buku-buku untuk tokonya", isCorrect: false },
        { id: "d", text: "Pakaian untuk pasar", isCorrect: false },
    ],
};

export const CONVERSATION = {
    title: "Conversation Simulation",
    subtitle: "Complete the dialogue by choosing the most natural response.",
    partner: {
        name: "Marco",
        role: "Baker",
    },
    // Contextual chat log preceding the active question
    chatHistory: [
        {
            id: 1,
            speaker: "partner",
            name: "Marco",
            text: "Selamat pagi! Selamat datang di toko roti. Ada yang bisa saya bantu hari ini?",
            avatarBg: "bg-amber-500",
        },
    ] as DialogueMessage[],
    questionPrompt: "Choose how to respond to Marco:",
    options: [
        { 
            id: "a", 
            text: "Halo! Saya mau beli satu roti tawar segar, ya.", 
            isCorrect: true, 
            feedback: "Polite and natural response for ordering food in Indonesian!" 
        },
        { 
            id: "b", 
            text: "Ya, saya tahu di mana stasiun kereta berada.", 
            isCorrect: false, 
            feedback: "This does not answer the baker's question." 
        },
        { 
            id: "c", 
            text: "Saya bangun tidur jam enam pagi setiap hari.", 
            isCorrect: false, 
            feedback: "Unrelated to ordering items in a bakery." 
        },
        { 
            id: "d", 
            text: "Sampai jumpa! Semoga harimu menyenangkan.", 
            isCorrect: false, 
            feedback: "You just entered the store, so saying goodbye doesn't fit." 
        },
    ],
};