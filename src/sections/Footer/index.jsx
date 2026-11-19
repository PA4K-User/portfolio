import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="border-t border-line pt-6 text-sm text-muted">
            Built with React.js and Tailwind
            <FontAwesomeIcon className="ml-2" icon={faGithub}/>
        </footer>
    )
}

export default Footer;
