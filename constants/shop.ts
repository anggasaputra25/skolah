import { faBook, faComment, faHeadphones, faStar, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export const SHOP_ITEMS = [
    {
        category: "Favorite Lessons",
        items: [
            {
                id: "reading-lesson",
                title: "Reading Lesson (1 Hours)",
                desc: "Access all reading lesson for the next 1 hours",
                price: 100,
                icon: faBook,
                iconColor: "text-blue-600",
                buttonVariant: "primary" as const,
            },
            {
                id: "listening-lesson",
                title: "Listening Lesson (1 Hours)",
                desc: "Access all listening lesson for the next 1 hours",
                price: 100,
                icon: faHeadphones,
                iconColor: "text-blue-600",
                buttonVariant: "primary" as const,
            },
            {
                id: "speaking-lesson",
                title: "Speaking Lesson (1 Hours)",
                desc: "Access all speaking lesson for the next 1 hours",
                price: 100,
                icon: faVolumeHigh,
                iconColor: "text-blue-600",
                buttonVariant: "primary" as const,
            },
            {
                id: "conversation-lesson",
                title: "Conversation Lesson (1 Hours)",
                desc: "Access all conversation lesson for the next 1 hours",
                price: 100,
                icon: faComment,
                iconColor: "text-blue-600",
                buttonVariant: "primary" as const,
            },
        ],
    },
    {
        category: "Boosters & Power-ups",
        items: [
            {
                id: "xp-boost",
                title: "2x XP Boost (15 Mins)",
                desc: "Earn double XP for all completed lessons for the next 15 minutes.",
                price: 250,
                icon: faStar,
                iconColor: "text-blue-600",
                buttonVariant: "disabled" as const,
            },
            {
                id: "xp-boost-2",
                title: "3x XP Boost (15 Mins)",
                desc: "Earn triple XP for all completed lessons for the next 15 minutes.",
                price: 300,
                icon: faStar,
                iconColor: "text-blue-600",
                buttonVariant: "disabled" as const,
            },
        ],
    },
];