import {data} from '../../contents/about'

const About = () => {
    return (
        <div className='space-y-4 scroll-m-14' id = "About-section">
            <div className='text-2xl text-primaryAccent font-bold'>{data.title}</div>
            <div className='text-gray-300'>{data.description}</div>
        </div>
    )
}

export default About;