import { faFacebook, faGithub, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const links = [
    { href: "https://github.com/PA4K-User", icon: faGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/siwaphon-panisen-875925277/", icon: faLinkedin, label: "LinkedIn" },
    { href: "https://www.facebook.com/sivaphon.panisan", icon: faFacebook, label: "Facebook" },
    { href: "https://www.tiktok.com/@vigilante848", icon: faTiktok, label: "TikTok" },
];

const Contact = () => {
    return (
        <div className="flex items-center gap-5 text-xl text-muted">
            {links.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="transition-colors hover:text-accent">
                    <FontAwesomeIcon icon={icon} />
                </a>
            ))}
        </div>
    )
}

export default Contact;
