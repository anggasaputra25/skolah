import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StatCard = ({ value, label, icon, className } : {value: string; label: string; icon: IconDefinition; className: string;}) => {
    return (
        <div className={`bg-blue-100 absolute p-5 rounded-2xl min-w-36 hidden md:block ${className}`}>
            <p className="font-semibold text-xl">{value}</p>
            <p>{label}</p>
            <div className="absolute top-0 right-0 p-2 bg-slate-50 rounded-bl-2xl">
                <FontAwesomeIcon icon={icon} className="w-5 h-5" />
            </div>
        </div>
    )
}