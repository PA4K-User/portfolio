import {data} from '../../contents/about'

const About = () => {
    return (
        <div className=' space-y-4 scroll-m-14' id = "About-section">
            <div className=' text-primaryAccent font-medium'>{data.title}</div>
            <div className='text-gray-400'>{data.description}</div>
        </div>
    )
}

export default About;