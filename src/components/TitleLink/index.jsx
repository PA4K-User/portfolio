import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleLink = ({isHighlight, title, link}) => {
    if(!link){
        return (
            <div className={`text-primaryAccent ${isHighlight? " text-primaryTitle": ""}`}>{title}</div>          
            
        )
    }
    
    return (      
        <div className={`font-bold ${isHighlight? " text-primaryTitle": "text-white"}`}>
           <a href={link} target="_blank"> 
            {title}
            <FontAwesomeIcon className={ `text-xs -rotate-45 duration-300 ease-out ${isHighlight? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
           </a>
        </div>
    )
}

export default TitleLink;