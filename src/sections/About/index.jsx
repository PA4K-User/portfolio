import {data} from '../../contents/about'
import SectionHeader from '../../components/SectionHeader'
import Separator from '../../components/Separator'

const About = () => {
    return (
        <section id="About-section" className="px-5 py-20 sm:px-8 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
                <SectionHeader title={data.title} />
                <p className="mt-10 text-sm leading-body text-fg/80 sm:text-base lg:mt-14">{data.description}</p>
                <Separator className="mt-14 lg:mt-20" />
            </div>
        </section>
    )
}

export default About;
