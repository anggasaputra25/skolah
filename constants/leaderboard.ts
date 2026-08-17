export interface Leaderboard {
    rank: number;
    name: string;
    avatar: string;
    score: number;
    isCurrentUser?: boolean;
}

export const LEADERBOARD: Leaderboard[] = [
    {
        rank: 1,
        name: "Siti",
        avatar: "/assets/flags/indonesia.jpeg",
        score: 120,
    },
    {
        rank: 2,
        name: "Rian",
        avatar: "/assets/flags/indonesia.jpeg",
        score: 110,
    },
    {
        rank: 3,
        name: "Dewi",
        avatar: "/assets/flags/indonesia.jpeg",
        score: 95,
    },
    {
        rank: 4,
        name: "Fajar",
        avatar: "/assets/flags/indonesia.jpeg",
        score: 85,
    },
    {
        rank: 5,
        name: "Maya",
        avatar: "/assets/flags/indonesia.jpeg",
        score: 75,
    },
    {
        rank: 6,
        name: "Reza",
        avatar: "/assets/flags/indonesia.jpeg",
        score: 65,
    },
    {
        rank: 7,
        name: "Nita",
        avatar: "/assets/flags/indonesia.jpeg",
        score: 55,
    },
    {
        rank: 8,
        name: "Kevin",
        avatar: "/assets/flags/indonesia.jpeg",
        score: 50,
    },
    {
        rank: 9,
        name: "Indah",
        avatar: "/assets/flags/indonesia.jpeg",
        score: 45,
    },
    {
        rank: 10,
        name: "Dimas",
        avatar: "/assets/flags/indonesia.jpeg",
        score: 40,
    },
    {
        rank: 11,
        name: "Edmund",
        avatar: "/assets/flags/indonesia.jpeg",
        score: 35,
    },
    {
        rank: 12,
        name: "Putra",
        avatar: "/assets/flags/indonesia.jpeg",
        score: 30,
    },
    {
        rank: 13,
        name: "Angga",
        avatar: "/assets/flags/indonesia.jpeg",
        score: 20,
        isCurrentUser: true,
    },
    {
        rank: 14,
        name: "Adi",
        avatar: "/assets/flags/indonesia.jpeg",
        score: 10,
    },
    {
        rank: 15,
        name: "Budi",
        avatar: "/assets/flags/indonesia.jpeg",
        score: 5,
    },
];