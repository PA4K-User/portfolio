import { faFacebook, faGithub, faLinkedin, faMedium, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Contact = () => {
    return (
        <div className="flex items-end">
            <div className=' flex gap-4 text-2xl'>
                <a href="https://github.com/PA4K-User" target="_blank"><FontAwesomeIcon className=' hover:scale-125 hover:text-primaryTitle transition-all' icon={faGithub} />     </a>
                <a href="https://www.linkedin.com/in/siwaphon-panisen-875925277/" target="_blank"><FontAwesomeIcon className=' hover:scale-125 hover:text-primaryTitle transition-all' icon={faLinkedin} /></a>
                <a href="https://www.facebook.com/sivaphon.panisan" target="_blank"><FontAwesomeIcon className=' hover:scale-125 hover:text-primaryTitle transition-all' icon={faFacebook} /></a>
                <a href="https://www.tiktok.com/@vigilante848" target="_blank"><FontAwesomeIcon className=' hover:scale-125 hover:text-primaryTitle transition-all' icon={faTiktok} /></a>
            </div>
        </div>
    )
}

export default Contact;