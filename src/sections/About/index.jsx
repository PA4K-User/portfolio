import {data} from '../../contents/about'

const About = () => {
    return (
        <section id="About-section" className="scroll-mt-16 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">{data.title}</h2>
            <p className="leading-relaxed text-muted">{data.description}</p>
        </section>
    )
}

export default About;
