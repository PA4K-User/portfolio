import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({icon, link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent"><FontAwesomeIcon icon={icon}/></a>
    )
}

export default Material;
