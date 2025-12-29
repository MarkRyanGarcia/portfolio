import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
// import { RxDiscordLogo } from "react-icons/rx";

export default function Footer() {
    return (
        <div className='flex justify-between max-w-4xl mx-auto p-5 mb-0 md:mb-5 bg-base-2 text-secondary md:rounded-lg'>
            <p className="self-center">
                © {new Date().getFullYear()} Mark Garcia
            </p>
            <div className="flex flex-col sm:flex-row sm:gap-4">
                <p className="hidden sm:block">Connect:</p>
                <div className="flex w-full justify-between items-center gap-2">
                    <a 
                    href='https://linkedin.com/in/MarkRyanGarcia' target="_blank"
                        className="hover:text-tertiary transition-colors duration-300 ease-in-out cursor-pointer"
                    >
                        <CiLinkedin size={25}/>
                    </a>
                    <a 
                    href='https://github.com/MarkRyanGarcia' target="_blank"
                        className="hover:text-tertiary transition-colors duration-300 ease-in-out cursor-pointer"
                    >
                        <FiGithub size={20}/>
                    </a>
                    <a 
                    href='https://www.instagram.com/mark.r.ga/' target="_blank"
                        className="hover:text-tertiary transition-colors duration-300 ease-in-out cursor-pointer"
                    >
                        <FaInstagram size={24}/>
                    </a>
                    {/* <a
                        className="hover:text-tertiary transition-colors duration-300 ease-in-out cursor-pointer"
                    >
                        <RxDiscordLogo size={25}/>
                    </a> */}
                </div>
            </div>
        </div>
    )
}
