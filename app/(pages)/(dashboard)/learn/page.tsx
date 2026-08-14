import Sidebar from "@/components/layout/Sidebar";

const LearnPage = () => {
    return (
        <div className="flex">
            <Sidebar target={1} />

            <div className="h-[200vh]">
                <h1>Hello</h1>
            </div>
        </div>
    )
}

export default LearnPage;