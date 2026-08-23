interface WordAnimationProps {
    children: string;
    className?: string;
}

export const WordAnimation = ({
    children,
    className = "",
}: WordAnimationProps) => {
    const words = children.split(" ");

    return (
        <span className={className}>
            {words.map((word, index) => (
                <span
                    className="overflow-y-hidden inline-block align-top pb-0.5"
                    key={`${word}-${index}`}
                >
                    <span
                        className={`fade-word inline-block ${
                            index < words.length - 1 ? "mr-[0.25em]" : ""
                        }`}
                    >
                        {word}
                    </span>
                </span>
            ))}
        </span>
    );
};