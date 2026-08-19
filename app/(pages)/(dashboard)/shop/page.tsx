import { RightPanel } from "@/components/layout/RightPanel";
import Sidebar from "@/components/layout/Sidebar";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { SHOP_ITEMS } from "@/constants/shop";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShopPage = () => {
    const targetPage = 3;
    return (
        <div className="flex">
            <Sidebar target={targetPage} />

            {/* Main Content Area */}
            <div className="w-full p-5 space-y-6">
                {/* Header Section Banner */}
                <div className="shadow p-5 rounded-2xl bg-slate-900 flex justify-between items-center">
                    <div>
                        <p className="text-slate-300 text-sm font-semibold">Boost Your Progress</p>
                        <h1 className="text-white font-bold text-xl">Shop</h1>
                    </div>
                    <div className="flex items-center gap-2 font-bold px-4 py-2 bg-neutral-50 rounded-2xl text-blue-600">
                        <FontAwesomeIcon icon={faCoins} className="w-4! h-4!"/>
                        <p>220</p>
                    </div>
                </div>

                {/* Shop Sections */}
                {SHOP_ITEMS.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                        <h2 className="text-xl font-bold">{section.category}</h2>

                        <div className="space-y-3">
                            {section.items.map((item) => (
                                <BorderCard key={item.id} className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <FontAwesomeIcon icon={item.icon} className={`w-10! h-10! filter-[drop-shadow(0px_2px_0px_#1e3a8a)] ${item.iconColor}`} />
                                        <div className="space-y-1">
                                            <p className="font-semibold">{item.title}</p>
                                            <p className="text-sm text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                    <Button variant={item.buttonVariant} size="md" className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faCoins} className="w-4! h-4!" />
                                        <span>{item.price}</span>
                                    </Button>
                                </BorderCard>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Panel */}
            <RightPanel target={targetPage} />
        </div>
    );
};

export default ShopPage;