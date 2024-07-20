import { Linkedin, Mail } from 'lucide-react';
import Link from "next/link";
import { useState } from 'react';
import { siDiscord, siGithub, siInstagram, siTwitter } from 'simple-icons/icons';
import RomanNumerals from '../lib/romanNumerals';

export default function Footer() {
    const initialDiscordText = '_rin0';
    const [discordText, setDiscordText] = useState(initialDiscordText);

    function handleDiscordClick() {
        navigator.clipboard.writeText("_rin0").then(r => {
            setDiscordText('Copied to clipboard!');

            setTimeout(() => {
                setDiscordText(initialDiscordText);
            }, 1000);
        });
    }

    return <>
        <footer className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-xl">
                ©  {(new Date().getFullYear())}
                
                {" "}
                <Link href="/">
                   Ahmed B.
                </Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-x-4 md:gap-2.5">
                <a href="mailto:ahmedamro2589@gmail.com" className="text-gray-400">
                    <Mail className="w-5 h-5">
                        <title>Email</title>
                    </Mail>
                </a>
                <a href="https://github.com/rinoontop" className="text-gray-400" target="_blank" rel="noopener noreferrer">
                    <svg
                        fill="currentColor"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>{siGithub.title}</title>
                        <path d={siGithub.path} />
                    </svg>
                </a>
                <a href="https://discord.com/users/896089166738247721" className="text-gray-400" target="_blank" rel="noopener noreferrer">
                    <svg
                        fill="currentColor"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>{siDiscord.title}</title>
                        <path d={siDiscord.path} />
                    </svg>
                    </a>
                    <span className='tooltip bg-gray-800 text-white rounded shadow-lg p-1 -mt-14'>{discordText}</span>
                <a href="https://www.linkedin.com/in/ahmedbonnah/" className="text-gray-400" target="_blank" rel="noopener noreferrer">
                    <Linkedin fill="currentColor" strokeWidth="0" className="w-5 h-5">
                        <title>Linkedin</title>
                    </Linkedin>
                </a>
               
            </span>
        </footer>
    </>;
}
