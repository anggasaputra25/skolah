import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StatCard = ({ value, label, icon, positionClasses } : {value: string; label: string; icon: IconDefinition; positionClasses: string;}) => {
    return (
        <div className={`bg-blue-100 absolute p-5 rounded-lg min-w-36 ${positionClasses}`}>
            <p className="font-semibold text-xl">{value}</p>
            <p>{label}</p>
            <div className="absolute top-0 right-0 p-2 bg-slate-50 rounded-bl-lg">
                <FontAwesomeIcon icon={icon} className="w-5 h-5" />
            </div>
        </div>
    )
}