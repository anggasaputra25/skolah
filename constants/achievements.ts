import { faFire, faGraduationCap, faScrollTorah, faTrophy } from "@fortawesome/free-solid-svg-icons";

export const ACHIEVEMENTS = [
    { 
        title: "Wildfire", 
        desc: "Reach a 3 day streak", 
        icon: faFire, 
        color: "text-orange-500 filter-[drop-shadow(0px_2px_0px_#c2410c)]", 
        progress: "3/3", 
        completed: true 
    },
    { 
        title: "Sage", 
        desc: "Earn 200 XP", 
        icon: faGraduationCap, 
        color: "text-blue-600 filter-[drop-shadow(0px_2px_0px_#1c398e)]", 
        progress: "90/200", 
        completed: false 
    },
    { 
        title: "Overachiever", 
        desc: "Complete 5 daily quests", 
        icon: faScrollTorah, 
        color: "text-yellow-500 text-yellow-500 filter-[drop-shadow(0px_2px_0px_#d97706)]", 
        progress: "3/5", 
        completed: false 
    },
];