import { data } from "../../contents/skills";
import SectionHeader from "../../components/SectionHeader";
import SkillIcon from "../../components/SkillIcon";

const Skills = () => {
    return (
        <section id="Skills-section" className="px-5 pb-20 pt-4 sm:px-8 lg:pb-32">
            <div className="mx-auto max-w-5xl">
                <SectionHeader title={data.title} />
                <div className="mt-14 flex flex-col gap-14 lg:mt-20 lg:gap-20">
                    {data.groups.map(({ title, items }) => (
                        <div key={title}>
                            <h3 className="font-heading text-lg font-bold uppercase tracking-label sm:text-xl lg:text-2xl">{title}:</h3>
                            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:mt-10 lg:grid-cols-5">
                                {items.map((item) => (
                                    <SkillIcon key={item.name} {...item} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;
