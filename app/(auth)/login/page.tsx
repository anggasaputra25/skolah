import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import LoginForm from "@/components/forms/LoginForm";

const LoginPage = () => {

    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col justify-center items-center p-4 relative overflow-hidden">
            <Image
                src="/assets/star1.svg"
                alt="star decoration"
                width={120}
                height={180}
                className="absolute left-10 top-12 hidden md:block opacity-70"
            />
            <Image
                src="/assets/star2.svg"
                alt="star decoration"
                width={100}
                height={100}
                className="absolute right-12 bottom-16 hidden md:block rotate-12 opacity-70 animate-[spin_20s_linear_infinite]"
            />

            {/* Back Button */}
            <ButtonLink
                variant="secondary"
                href="/"
                className="fixed! top-5 left-5 p-3! bg-neutral-50 z-10"
            >
                <FontAwesomeIcon icon={faChevronLeft} className="w-4! h-4!" />
            </ButtonLink>

            {/* Main Form Container */}
            <LoginForm />

        </div>
    );
}

export default LoginPage;