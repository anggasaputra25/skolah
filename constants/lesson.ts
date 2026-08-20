import { DialogueMessage } from "@/types/dialogue";

export const READING = {
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

export const CONVERSATION = [
    {
        title: "Conversation Simulation",
        subtitle: "Complete the dialogue by choosing the most natural response.",
        partner: {
            name: "Marco",
            role: "Baker",
        },
        partnerMessage: {
            id: 1,
            speaker: "partner",
            name: "Marco",
            text: "Selamat pagi! Selamat datang di toko roti. Ada yang bisa saya bantu hari ini?",
            avatarBg: "bg-amber-500",
        } as DialogueMessage,
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
    },
    {
        title: "Conversation Simulation",
        subtitle: "Complete the dialogue by choosing the most natural response.",
        partner: {
            name: "Marco",
            role: "Baker",
        },
        partnerMessage: {
            id: 3,
            speaker: "partner",
            name: "Marco",
            text: "Tentu, satu roti tawar segar. Ada tambahan makanan atau minuman lain untuk melengkapi pesanan Anda?",
            avatarBg: "bg-amber-500",
        } as DialogueMessage,
        options: [
            { 
                id: "a", 
                text: "Tidak, celana saya sudah bersih.", 
                isCorrect: false, 
                feedback: "Unrelated to ordering food or drinks." 
            },
            { 
                id: "b", 
                text: "Boleh, saya pesan segelas kopi hitam hangat juga ya.", 
                isCorrect: true, 
                feedback: "Polite and natural response for adding a drink to your order!" 
            },
            { 
                id: "c", 
                text: "Saya suka menonton film di bioskop saat akhir pekan.", 
                isCorrect: false, 
                feedback: "This statement does not address the baker's question." 
            },
            { 
                id: "d", 
                text: "Berapa harga tiket pesawat ke Bali?", 
                isCorrect: false, 
                feedback: "Irrelevant question in a bakery context." 
            },
        ],
    },
    {
        title: "Conversation Simulation",
        subtitle: "Complete the dialogue by choosing the most natural response.",
        partner: {
            name: "Marco",
            role: "Baker",
        },
        partnerMessage: {
            id: 5,
            speaker: "partner",
            name: "Marco",
            text: "Baik, satu roti tawar dan segelas kopi hitam hangat. Totalnya jadi Rp45.000. Mau bayar pakai apa?",
            avatarBg: "bg-amber-500",
        } as DialogueMessage,
        options: [
            { 
                id: "a", 
                text: "Saya ingin belajar cara membuat roti ini sendiri.", 
                isCorrect: false, 
                feedback: "Does not answer how you want to pay." 
            },
            { 
                id: "b", 
                text: "Cuaca hari ini cukup cerah, ya.", 
                isCorrect: false, 
                feedback: "Random small talk instead of answering the payment prompt." 
            },
            { 
                id: "c", 
                text: "Saya bayar pakai QRIS saja, ya. Boleh minta kode QR-nya?", 
                isCorrect: true, 
                feedback: "Great response! Directly states a common payment method." 
            },
            { 
                id: "d", 
                text: "Tolong matikan lampu di ruangan ini.", 
                isCorrect: false, 
                feedback: "Irrelevant command in this scenario." 
            },
        ],
    },
    {
        title: "Conversation Simulation",
        subtitle: "Complete the dialogue by choosing the most natural response.",
        partner: {
            name: "Marco",
            role: "Baker",
        },
        partnerMessage: {
            id: 7,
            speaker: "partner",
            name: "Marco",
            text: "Ini kode QR-nya. Silakan di-scan... Baik, pembayarannya sudah masuk. Mau dibungkus atau dimakan di sini?",
            avatarBg: "bg-amber-500",
        } as DialogueMessage,
        options: [
            { 
                id: "a", 
                text: "Kopi ini warnanya sangat hitam.", 
                isCorrect: false, 
                feedback: "Does not tell the baker whether you want to eat in or take away." 
            },
            { 
                id: "b", 
                text: "Saya tidak suka memakai pakaian warna merah.", 
                isCorrect: false, 
                feedback: "Completely unrelated to the order." 
            },
            { 
                id: "c", 
                text: "Kemarin saya pergi ke perpustakaan.", 
                isCorrect: false, 
                feedback: "Doesn't answer where you plan to enjoy your food." 
            },
            { 
                id: "d", 
                text: "Tolong dibungkus saja, saya mau makan di rumah.", 
                isCorrect: true, 
                feedback: "Perfect choice! Clearly specifies take-away." 
            },
        ],
    },
    {
        title: "Conversation Simulation",
        subtitle: "Complete the dialogue by choosing the most natural response.",
        partner: {
            name: "Marco",
            role: "Baker",
        },
        partnerMessage: {
            id: 9,
            speaker: "partner",
            name: "Marco",
            text: "Siap, ini pesanan dan kopinya. Terima kasih sudah berkunjung, semoga harimu menyenangkan!",
            avatarBg: "bg-amber-500",
        } as DialogueMessage,
        options: [
            { 
                id: "a", 
                text: "Terima kasih banyak! Semoga harimu menyenangkan juga.", 
                isCorrect: true, 
                feedback: "A polite and natural farewell to conclude the conversation!" 
            },
            { 
                id: "b", 
                text: "Berapa jam dari sini ke pantai?", 
                isCorrect: false, 
                feedback: "Awkward way to end a shopping interaction." 
            },
            { 
                id: "c", 
                text: "Jangan lupa untuk mematikan AC.", 
                isCorrect: false, 
                feedback: "Unsuited response for leaving a bakery." 
            },
            { 
                id: "d", 
                text: "Saya ingin membatalkan semua pesanan ini.", 
                isCorrect: false, 
                feedback: "Doesn't make sense after payment and packing are done." 
            },
        ],
    },
];