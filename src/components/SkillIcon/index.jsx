import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// One tech-stack tile from Figma "Skills" (1:899): coloured logo above an uppercase label.
// `logo` is a simple-icons object ({ path, hex }); `icon` is a FontAwesome fallback.
const SkillIcon = ({ name = "", logo, icon }) => {
    return (
        <li className="flex flex-col items-center gap-3 text-center">
            <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center lg:h-16 lg:w-16">
                {logo ? (
                    <svg viewBox="0 0 24 24" className="h-full w-full" fill={`#${logo.hex}`}>
                        <path d={logo.path} />
                    </svg>
                ) : (
                    <FontAwesomeIcon icon={icon} className="text-5xl text-surface lg:text-6xl" />
                )}
            </span>
            <span className="-mr-[0.185em] font-heading text-xs font-semibold uppercase tracking-label sm:text-sm">{name}</span>
        </li>
    )
}

export default SkillIcon;
