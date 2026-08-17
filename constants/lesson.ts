import { DialogueMessage } from "@/types/dialogue";

export const READING = {
    title: "Reading Comprehension",
    subtitle: "Read the story and answer the question below.",
    passage: "Sarah wakes up early every morning to prepare fresh bread for her bakery. She loves the smell of warm cinnamon and coffee in her shop.",
    question: "What does Sarah prepare early in the morning?",
    options: [
        { id: "a", text: "Fresh bread for her bakery", isCorrect: true },
        { id: "b", text: "Hot tea and soup", isCorrect: false },
        { id: "c", text: "Books for her store", isCorrect: false },
        { id: "d", text: "Clothes for the market", isCorrect: false },
    ],
};

export const SPEAKING = {
    title: "Speaking Practice",
    subtitle: "Read the sentence out loud clearly into your microphone.",
    targetText: "Sarah wakes up early every morning to prepare fresh bread for her bakery.",
    phoneticHint: "SAH-ruh WAYKS up ER-lee EV-ree MOR-ning...",
};

export const LISTENING = {
    title: "Listening Comprehension",
    subtitle: "Listen to the audio track and answer the question below.",
    audioUrl: "/assets/audio/listening.m4a",
    transcript: "Sarah wakes up early every morning to prepare fresh bread for her bakery. She loves the smell of warm cinnamon and coffee in her shop.",
    question: "What does Sarah prepare early in the morning?",
    options: [
        { id: "a", text: "Fresh bread for her bakery", isCorrect: true },
        { id: "b", text: "Hot tea and soup", isCorrect: false },
        { id: "c", text: "Books for her store", isCorrect: false },
        { id: "d", text: "Clothes for the market", isCorrect: false },
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
            text: "Good morning! Welcome to the bakery. What can I get for you today?",
            avatarBg: "bg-amber-500",
        },
    ] as DialogueMessage[],
    questionPrompt: "Choose how to respond to Marco:",
    options: [
        { 
            id: "a", 
            text: "Hi! I would like a fresh loaf of sourdough bread, please.", 
            isCorrect: true, 
            feedback: "Polite and natural response for ordering food!" 
        },
        { 
            id: "b", 
            text: "Yes, I know where the train station is located.", 
            isCorrect: false, 
            feedback: "This does not answer the baker's question." 
        },
        { 
            id: "c", 
            text: "I wake up early every morning at six o'clock.", 
            isCorrect: false, 
            feedback: "Unrelated to ordering items in a bakery." 
        },
        { 
            id: "d", 
            text: "Goodbye! Have a great afternoon.", 
            isCorrect: false, 
            feedback: "You just entered the store, so saying goodbye doesn't fit." 
        },
    ],
};