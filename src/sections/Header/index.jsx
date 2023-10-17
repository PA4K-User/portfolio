import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {data} from '../../contents/header'

const Header = () => {
    return (
        <div>
            <div className=' flex flex-col gap-2'>
            <div className=' text-3xl text-primaryTitle font-semibold'>{data.name}</div>
            <div className=' text-white font-semibold'>{data.title}</div>
            <div className=' text-sm text-gray-400 w-5/6'>{data.caption}</div>
            <div className=' mt-4'>
              <a href={data.link} target=' _blank'>
                <span  className=' bg-primaryTitle text-primaryBase font-semibold px-3 py-2 rounded-md'>
                  {data.btnText}
                <span className=' rotate-90 inline-block ml-2 text-sm'><FontAwesomeIcon className=' animate-bounce' icon={faArrowDown}/></span>
                </span>
              </a>
            </div>
          </div>
        </div>
    )
}

export default Header;