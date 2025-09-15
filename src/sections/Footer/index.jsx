import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return(
        <div className="mb-20 m-auto">
            <div className="flex justify-end">
                <span className="text-gray-300">
                    Powered by React.js and Tailwind
                    <FontAwesomeIcon className="ml-3" icon={faGithub}/>
                </span>                
                
            </div>
        </div>
    )
}

export default Footer;