import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";    


export default function SocialMedia({className}: {className?: string}) {
    const socialMediaLinks = [
        { icon: <FaFacebook />, href: "https://www.facebook.com" },
        { icon: <FaTwitter />, href: "https://www.twitter.com" },
        { icon: <FaInstagram />, href: "https://www.instagram.com" },
        { icon: <FaLinkedin />, href: "https://www.linkedin.com" },
    ];

    return (
        <div className="flex flex-row space-x-4">
            {socialMediaLinks.map((item)=> {
                return (
                    <div key={item.href} className={className}>
                        <a href={item.href} >{item.icon}</a>
                    </div>
                )
            })}
        </div>
    )
}