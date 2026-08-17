import Sidebar from "@/components/layout/Sidebar";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { 
    faBolt, 
    faCoins, 
    faEllipsis, 
    faFire, 
    faHeart, 
    faShieldCat, 
    faShirt, 
    faStar 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const shopItems = [
    {
        category: "Hearts & Health",
        items: [
            {
                id: "refill-hearts",
                title: "Heart Refill",
                desc: "Refill all your hearts to keep practicing without fear of mistakes.",
                price: 150,
                icon: faHeart,
                iconColor: "text-red-500",
                buttonVariant: "primary" as const,
            },
            {
                id: "streak-freeze",
                title: "Streak Freeze",
                desc: "Allows your streak to remain intact for one day of inactivity.",
                price: 200,
                icon: faFire,
                iconColor: "text-orange-500",
                buttonVariant: "warning" as const,
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
                icon: faBolt,
                iconColor: "text-yellow-500",
                buttonVariant: "warning" as const,
            },
            {
                id: "boss-shield",
                title: "Boss Shield",
                desc: "Protect yourself from losing HP during your next Boss Fight.",
                price: 300,
                icon: faShieldCat,
                iconColor: "text-violet-600",
                buttonVariant: "primary" as const,
            },
        ],
    },
    {
        category: "Cosmetics & Outfits",
        items: [
            {
                id: "champ-suit",
                title: "Champ Suit",
                desc: "Dress up your avatar in a stylish golden champion outfit.",
                price: 500,
                icon: faShirt,
                iconColor: "text-blue-600",
                buttonVariant: "secondary" as const,
            },
        ],
    },
];

const ShopPage = () => {
    return (
        <div className="flex">
            {/* Sidebar dengan target 3 untuk highlight Shop */}
            <Sidebar target={3} />

            {/* Main Content Area */}
            <div className="w-full p-5 space-y-6">
                {/* Header Section Banner */}
                <div className="shadow p-6 rounded-2xl bg-emerald-600 text-white flex justify-between items-center sticky top-5 z-30">
                    <div>
                        <p className="text-emerald-200 text-sm font-semibold uppercase tracking-wider">Item Store</p>
                        <h1 className="font-bold text-2xl">Skolah Shop</h1>
                    </div>
                    {/* User Currency Balance */}
                    <div className="bg-emerald-700 px-4 py-2 rounded-xl text-base font-extrabold border-2 border-emerald-800 flex items-center gap-2">
                        <FontAwesomeIcon icon={faCoins} className="w-5 h-5 text-yellow-400" />
                        <span>1,250 Gems</span>
                    </div>
                </div>

                {/* Shop Sections */}
                {shopItems.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-700">{section.category}</h2>

                        <div className="space-y-3">
                            {section.items.map((item) => (
                                <BorderCard key={item.id} className="flex items-center justify-between gap-4 p-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3.5 rounded-2xl bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
                                            <FontAwesomeIcon icon={item.icon} className={`w-8 h-8 ${item.iconColor}`} />
                                        </div>
                                        <div className="space-y-1 max-w-md">
                                            <h3 className="font-bold text-slate-700 text-lg">{item.title}</h3>
                                            <p className="text-sm text-slate-400 font-medium">{item.desc}</p>
                                        </div>
                                    </div>

                                    {/* Buy Button */}
                                    <Button variant={item.buttonVariant} size="sm" className="flex items-center gap-2 px-5">
                                        <FontAwesomeIcon icon={faCoins} className="w-4 h-4 text-yellow-300" />
                                        <span>{item.price}</span>
                                    </Button>
                                </BorderCard>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Sidebar Panel */}
            <div className="w-3xl">
                <div className="p-5 space-y-5 sticky top-0">
                    {/* Languages Selection */}
                    <div className="flex items-center justify-between sticky">
                        <Image src={'/assets/flags/indonesia.jpeg'} alt="flag" width={64} height={64} className="block cursor-pointer border-2 aspect-2/1.5 border-slate-300 rounded-lg" />
                        <Image src={'/assets/flags/english.jpeg'} alt="flag" width={64} height={64} className="block cursor-pointer border-2 aspect-2/1.5 border-slate-300 rounded-lg" />
                        <Image src={'/assets/flags/french.jpeg'} alt="flag" width={64} height={64} className="block cursor-pointer border-2 aspect-2/1.5 border-slate-300 rounded-lg" />
                        <Image src={'/assets/flags/german.jpeg'} alt="flag" width={64} height={64} className="block cursor-pointer border-2 aspect-2/1.5 border-slate-300 rounded-lg" />
                        <Link href={'/languages'} className="border-2 aspect-2/1.5 border-slate-300 rounded-lg w-16 h-auto flex justify-center items-center">
                            <FontAwesomeIcon icon={faEllipsis} className="w-8 h-8 text-slate-500" />
                        </Link>
                    </div>

                    {/* Level Progress */}
                    <BorderCard className="border-b-2! space-y-5 text-slate-700">
                        <div className="flex justify-between items-center">
                            <p className="font-bold">Point Experience</p>
                            <Link href={'/profile'} className="text-blue-600 font-bold text-sm">View Detail</Link>
                        </div>
                        <div className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faStar} className="w-12! h-12! text-blue-600 filter-[drop-shadow(0px_2px_0px_#1e3a8a)_drop-shadow(0px_1px_0px_#1e40af)]" />
                            <div className="space-y-1 w-full font-semibold">
                                <p>Level 3</p>
                                <div className="relative w-full bg-slate-300 rounded-full">
                                    <div className="absolute bg-blue-600 h-full rounded-full w-3/5 border-2 border-b-4 border-blue-700"></div>
                                    <p className="text-white z-10 relative text-center p-2 text-sm">40 / 60</p>
                                </div>
                            </div>
                        </div>
                    </BorderCard>

                    {/* Daily Quests Widget */}
                    <BorderCard className="border-b-2! space-y-5 text-slate-700">
                        <div className="flex justify-between items-center">
                            <p className="font-bold">Daily Quests</p>
                            <Link href={'/quests'} className="text-blue-600 font-bold text-sm">View All</Link>
                        </div>
                        <div className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faBolt} className="w-12! h-12! text-yellow-500 filter-[drop-shadow(0px_2px_0px_#d97706)_drop-shadow(0px_1px_0px_#b45309)]" />
                            <div className="space-y-1 w-full font-semibold">
                                <p>Earn 10 XP</p>
                                <Button variant="warning" size="sm" className="w-full">Claim</Button>
                            </div>
                        </div>
                    </BorderCard>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;