import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({icon, link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="text-surface-fg/75 transition-colors hover:text-surface-fg"><FontAwesomeIcon icon={icon}/></a>
    )
}

export default Material;
