import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "../Contact";
import { data } from "../../contents/header";

// Figma "Footer" (1:814).
const Footer = () => {
    return (
        <footer className="bg-surface-deep px-5 py-16 text-center text-surface-fg sm:px-8">
            <a href="#top" className="inline-flex flex-col items-center gap-2 font-heading text-sm font-bold uppercase tracking-label transition-opacity hover:opacity-75">
                <FontAwesomeIcon icon={faAnglesUp} />
                <span className="-mr-[0.185em]">Back to top</span>
            </a>
            <div className="mt-10">
                <Contact variant="plain" />
            </div>
            <p className="mt-10 text-sm">
                <span className="font-bold">© {new Date().getFullYear()} {data.name}</span> All Rights Reserved.
            </p>
            <p className="mt-2 text-xs text-surface-fg/50">
                Built with React.js and Tailwind
                <FontAwesomeIcon className="ml-2" icon={faGithub}/>
            </p>
        </footer>
    )
}

export default Footer;
