import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const links = [
    { href: "https://github.com/PA4K-User", icon: faGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/siwaphon-panisen-875925277/", icon: faLinkedin, label: "LinkedIn" },
    { href: "https://www.facebook.com/sivaphon.panisan", icon: faFacebook, label: "Facebook" },
];

const variants = {
    // grey shadowed squares in the hero (Figma 18:6–18:8)
    tile: {
        list: "flex flex-wrap items-center gap-4 sm:gap-6",
        link: "flex h-14 w-[61px] items-center justify-center bg-tile text-2xl text-fg shadow-tile transition-colors hover:bg-fg hover:text-surface-fg",
    },
    // plain white icons on the dark footer
    plain: {
        list: "flex items-center justify-center gap-7",
        link: "text-2xl text-surface-fg/80 transition-colors hover:text-surface-fg",
    },
};

const Contact = ({ variant = "tile" }) => {
    const style = variants[variant] ?? variants.tile;

    return (
        <div className={style.list}>
            {links.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className={style.link}>
                    <FontAwesomeIcon icon={icon} />
                </a>
            ))}
        </div>
    )
}

export default Contact;
