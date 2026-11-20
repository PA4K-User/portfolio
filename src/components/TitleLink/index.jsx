import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const titleClass = "font-heading text-lg font-bold uppercase tracking-label text-surface-fg";

const TitleLink = ({title, link}) => {
    if (!link) {
        return <h3 className={titleClass}>{title}</h3>
    }

    return (
        <h3 className={titleClass}>
            <a href={link} target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">
                {title}
                <FontAwesomeIcon className="ml-2 text-xs -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" icon={faArrowRight} />
            </a>
        </h3>
    )
}

export default TitleLink;
