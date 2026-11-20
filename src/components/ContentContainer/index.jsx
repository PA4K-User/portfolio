import FormattedDate from "../FormattedDate";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import Material from "../Material";
import Description from "../Description";
import Tech from "../Tech";
import SectionHeader from "../SectionHeader";

// Figma "Portfolio" (1:91): dark band, full-bleed 3-column image grid.
// Details sit under the picture on small screens and appear as a hover/focus overlay on desktop.
const ContentContainer = ({
    sectionTitle = "",
    data = []
}) => {
    const SECTION_ID = `${sectionTitle}-section`;

    return (
        <section id={SECTION_ID} className="bg-surface text-surface-fg">
            <div className="px-5 py-16 sm:px-8 lg:py-24">
                <SectionHeader title={sectionTitle} tone="light" />
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {
                    data.map(({
                        date = "",
                        title = "",
                        link = "",
                        materials = [],
                        descriptions = [],
                        skills = [],
                        picture = "",
                    }, index) => (
                        <li
                            key={`${SECTION_ID}-${index}-${title.replace(" ", "")}`}
                            className="group relative overflow-hidden"
                        >
                            <Picture picture={picture} title={title} />
                            <div className="flex flex-col gap-2 px-5 pb-10 pt-5 sm:px-6 lg:absolute lg:inset-0 lg:items-center lg:justify-center lg:overflow-y-auto lg:bg-black/80 lg:p-8 lg:text-center lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100">
                                <FormattedDate>{date}</FormattedDate>
                                <TitleLink title={title} link={link} />
                                {materials.length > 0 && (
                                    <div className="flex gap-4 text-lg">
                                        {materials.map((e, i) => (
                                            <Material key={`${title}-material-${i}`} icon={e.type} link={e.link} />
                                        ))}
                                    </div>
                                )}
                                {descriptions.map((e, i) => (
                                    <Description key={`${title}-description-${i}`} description={e} />
                                ))}
                                {skills.map((e, i) => (
                                    <Tech key={`${title}-skill-${i}`} data={e} />
                                ))}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default ContentContainer;
