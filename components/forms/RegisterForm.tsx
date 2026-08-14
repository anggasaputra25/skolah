'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BorderCard } from "../ui/BorderCard";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { ButtonLink } from "../ui/ButtonLink";
import { Button } from "../ui/Button";
import Link from "next/link";
import { Alert } from "../ui/Alert";
import { useState } from "react";
import Image from "next/image";
import { LANGUAGES } from "@/constants/languages";

const RegisterForm = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [showFlags, setShowFlags] = useState(true);
    
    const loginClick = () => {
        setShowAlert(true);
    };

    return (
        <>
            {/* Flags Section */}
            {showFlags && 
                <div className="w-11/12 md:w-10/12 mx-auto min-h-dvh py-20 flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-semibold text-center">I Want to Learn...</h2>
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {LANGUAGES.map((item, index) => (
                            <button onClick={() => setShowFlags(false)} key={index} className="rounded-2xl cursor-pointer">
                                <BorderCard className="hover:bg-neutral-100 active:border-b-2 active:translate-y-1 ">
                                    <Image src={item.image} alt="flag" width={120} height={120} className="border-2 border-slate-300 rounded-lg mb-2" />
                                    <p className="font-semibold">{item.title}</p>
                                    <p>{item.description}</p>
                                </BorderCard>
                            </button>
                        ))}
                    </div>
                </div>
            }

            {/* Register Form */}
            {!showFlags && 
                <BorderCard className="w-full max-w-md bg-white p-8 shadow-sm my-10">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold">Create Account</h1>
                        <p className="text-slate-400 text-sm mt-1">
                            Start learning with Skolah today
                        </p>
                    </div>

                    <form className="space-y-4">
                        {/* Input Full Name */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                Full Name
                            </label>
                            <div className="relative flex items-center">
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className="w-4 h-4 text-slate-400 absolute left-3.5"
                                />
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors placeholder:text-slate-400"
                                />
                            </div>
                        </div>

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

                        {/* Input Password */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                Password
                            </label>
                            <div className="relative flex items-center">
                                <FontAwesomeIcon
                                    icon={faLock}
                                    className="w-4 h-4 text-slate-400 absolute left-3.5"
                                />
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        {/* Input Confirm Password */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                Confirm Password
                            </label>
                            <div className="relative flex items-center">
                                <FontAwesomeIcon
                                    icon={faLock}
                                    className="w-4 h-4 text-slate-400 absolute left-3.5"
                                />
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:outline-none transition-colors placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <ButtonLink href="/login"
                            variant="primary"
                            className="w-full"
                        >
                            Sign Up
                        </ButtonLink>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6 flex items-center justify-center">
                        <div className="border-t border-slate-300 w-full"></div>
                        <span className="bg-white px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider absolute">
                            OR
                        </span>
                    </div>

                    {/* Social Register Button */}
                    <Button
                        type="button"
                        variant="secondary"
                        className="w-full gap-2"
                        onClick={loginClick}
                    >
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width={16}
                            height={16}
                            style={{ display: 'block' }}
                            >
                            <path
                                fill="#EA4335"
                                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                            />
                            <path
                                fill="#4285F4"
                                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                            />
                            <path
                                fill="#34A853"
                                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                            />
                            <path fill="none" d="M0 0h48v48H0z" />
                        </svg>
                        <span>Continue with Google</span>
                    </Button>

                    {/* Login Link */}
                    <p className="text-center text-sm text-slate-400 mt-6">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-bold text-blue-600"
                        >
                            Log in
                        </Link>
                    </p>
                </BorderCard>
            }

            {/* Alert */}
            {showAlert && (
                <div className="fixed top-5 right-5 max-w-92">
                    <Alert
                        variant="info" 
                        title="Feature Under Development"
                        onClose={() => setShowAlert(false)}
                    >
                        This feature will be available soon.
                    </Alert>
                </div>
            )}
        </>
    )
}

export default RegisterForm;