import FormattedDate from "../FormattedDate";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import Material from "../Material";
import Description from "../Description";
import Tech from "../Tech";

const ContentContainer = ({
    sectionTitle = "",
    data = []
}) => {
    const SECTION_ID = `${sectionTitle}-section`;

    return (
        <section id={SECTION_ID} className="scroll-mt-16">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted">{sectionTitle}</h2>
            <ul className="flex flex-col gap-4">
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
                            className="group grid grid-cols-1 gap-4 rounded-xl p-4 transition-colors hover:bg-surface sm:grid-cols-[8rem_1fr] sm:gap-6"
                        >
                            <div className="space-y-3">
                                <FormattedDate>{date}</FormattedDate>
                                <Picture picture={picture} title={title} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <TitleLink title={title} link={link} />
                                {materials.length > 0 && (
                                    <div className="flex gap-4 text-lg text-muted">
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
