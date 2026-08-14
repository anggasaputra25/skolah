'use client'
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Alert } from "@/components/ui/Alert";
import { useState } from "react";

const ForgotPasswordPage = () => {
    const [showAlert, setShowAlert] = useState(false);
    
    const buttonClick = () => {
        setShowAlert(true);
    };
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col justify-center items-center p-4 relative overflow-hidden">
            {/* Background Decorations */}
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
                className="absolute right-12 bottom-16 hidden md:block rotate-12 opacity-70"
            />

            {/* Back Button */}
            <ButtonLink
                variant="secondary"
                href="/login"
                className="fixed! top-5 left-5 p-3!"
            >
                <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
            </ButtonLink>

            {/* Main Container */}
            <BorderCard className="w-full max-w-md bg-white p-8 shadow-sm">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold">Forgot Password?</h1>
                    <p className="text-slate-400 text-sm mt-1">
                        No worries, enter your email below and we&apos;ll send you instructions to reset it.
                    </p>
                </div>

                <form className="space-y-4">
                    {/* Input Email */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Email Address
                        </label>
                        <div className="relative flex items-center">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="w-4 h-4 text-slate-400 absolute left-3.5"
                            />
                            <input
                                type="email"
                                required
                                placeholder="name@example.com"
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full mt-2"
                        onClick={buttonClick}
                    >
                        Send Reset Link
                    </Button>
                </form>

                {/* Return to Login */}
                <p className="text-center text-sm text-slate-400 mt-6">
                    Remembered your password?{" "}
                    <Link
                        href="/login"
                        className="font-bold text-blue-600"
                    >
                        Log in
                    </Link>
                </p>
            </BorderCard>

            {/* Alert */}
            {showAlert && (
                <div className="absolute top-5 right-5 max-w-lg">
                    <Alert 
                        variant="success" 
                        title="Password Reset Link Sent"
                        onClose={() => setShowAlert(false)}
                    >
                        We have sent a password reset link to your email address. Please check your inbox and follow the instructions to reset your password.
                    </Alert>
                </div>
            )}
        </div>
    );
}

export default ForgotPasswordPage;