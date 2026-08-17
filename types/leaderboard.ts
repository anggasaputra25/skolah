export interface Leaderboard {
    rank: number;
    name: string;
    avatar: string;
    score: number;
    isCurrentUser?: boolean;
}