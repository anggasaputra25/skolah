import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/Button";

const LearnPage = () => {
    return (
        <div className="flex">
            <Sidebar target={1} />

            <div className="border-r-2 border-red-200 w-full p-5">
                <div className="p-5 rounded-2xl bg-blue-600 flex justify-between items-center">
                    <div>
                        <p className="text-slate-300 text-sm">Level 1, Section 1</p>
                        <h1 className="text-white font-semibold">Order foods and drinks</h1>
                    </div>
                    <Button variant="secondary" >Guidebook</Button>
                </div>
                <div className="p-5 border border-green-600 flex flex-col items-center"></div>
            </div>
            <div className="w-full p-5">
                <h1>Tes</h1>
            </div>
        </div>
    )
}

export default LearnPage;