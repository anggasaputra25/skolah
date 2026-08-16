import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonLearn } from "../ui/ButtonLearn"
import { faSkull, faStar } from "@fortawesome/free-solid-svg-icons"

export const LevelLock = ({align = "right"}: {align?: "right" | "left"}) => {
    return (
        <div className="relative p-5 flex flex-col items-center justify-center gap-8 my-5">
            {/* Boss Fight */}
            <ButtonLearn
                classDiv={`absolute! ${align == 'right' ? 'me-40' : 'ms-40'}`}
                variant="secondary"
            >
                <FontAwesomeIcon icon={faSkull} className="w-12! h-12! m-1" />
            </ButtonLearn>

            {/* Lesson */}
            <ButtonLearn variant="secondary">
                <FontAwesomeIcon icon={faStar} className="w-8! h-8!" />
            </ButtonLearn>
            <ButtonLearn variant="secondary" classDiv={`${align == 'right' ? '-me-24' : '-ms-24'}`}>
                <FontAwesomeIcon icon={faStar} className="w-8! h-8!" />
            </ButtonLearn>
            <ButtonLearn variant="secondary" classDiv={`${align == 'right' ? '-me-44' : '-ms-44'}`}>
                <FontAwesomeIcon icon={faStar} className="w-8! h-8!" />
            </ButtonLearn>
            <ButtonLearn variant="secondary" classDiv={`${align == 'right' ? '-me-24' : '-ms-24'}`}>
                <FontAwesomeIcon icon={faStar} className="w-8! h-8!" />
            </ButtonLearn>
            <ButtonLearn variant="secondary">
                <FontAwesomeIcon icon={faStar} className="w-8! h-8!" />
            </ButtonLearn>
        </div>
    )
}