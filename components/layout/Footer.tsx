import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faX } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-neutral-50 border-t border-slate-200 pt-12 pb-8 text-sm text-slate-600">
            <div className="w-11/12 md:w-10/12 m-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10">
                    
                    {/* Brand & Intro */}
                    <div className="md:col-span-2 flex flex-col gap-3">
                        <Link href={'/'} className="font-semibold text-2xl flex items-center gap-2 text-blue-600 w-fit">
                            <FontAwesomeIcon icon={faEarthAsia} className="w-6 h-6" />
                            <span>Skolah</span>
                        </Link>
                        <p className="text-neutral-500 max-w-sm leading-relaxed">
                            Skolah is designed to enhance reading comprehension, conversation skills, and cross-cultural communication through an engaging and enjoyable learning experience.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex gap-3 mt-2">
                            <Link href={'#'}><FontAwesomeIcon icon={faInstagram} /></Link>
                            <Link href={'#'}><FontAwesomeIcon icon={faX} /></Link>
                            <Link href={'#'}><FontAwesomeIcon icon={faFacebook} /></Link>
                            <Link href={'#'}><FontAwesomeIcon icon={faLinkedin} /></Link>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold text-neutral-900">Platform</p>
                        <ul className="flex flex-col gap-2 text-neutral-500">
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Courses</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Method</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Gamification</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="font-semibold text-neutral-900">Company</p>
                        <ul className="flex flex-col gap-2 text-neutral-500">
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="font-semibold text-neutral-900">Legal</p>
                        <ul className="flex flex-col gap-2 text-neutral-500">
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</Link></li>
                            <li><Link href="/licenses" className="hover:text-blue-600 transition-colors">License</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
                    <p>© {new Date().getFullYear()} Skolah. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with passion for global learners.
                    </p>
                </div>
            </div>
        </footer>
    );
}