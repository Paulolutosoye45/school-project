//img
import Ideas from '../assets/home-slide-bg-1.jpg'

//icons
import {  FaFlag, FaFolderOpen, FaBellSlash, FaWifi } from 'react-icons/fa';

function OurSchool() {
  return (
    <div>
        <div className='school'>
        <h3>our school with <span>ideas</span></h3>
        <p className='underLine'>Lorem ipsum dolor sit amet, consectetur itatis, quisquam consequuntur quasi?</p>
        <div className="grid">
          <img src={Ideas} alt="" />
          <div className="grid-item">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus recusandae tempore suscipit similique minima iste, vel labore nulla temporibus esse dolorum deserunt, fuga quod ex unde mollitia harum vitae exercitationem?</p>
            <div className="mini">
                <div className='hh'>
                <FaBellSlash  fontSize={'1rem'} color='#0bc560' className='i'/>
                <span>Lorem ipsum adipisicing elit. Provident molestiaet.</span>
                </div>
                <div className='hh'>
                <FaWifi  fontSize={'1rem'} color='#0bc560' className='i'/>
                <span>Lorem ipsum adipisicing elit. Provident molestiaet.  </span>
                </div>
                <div className='hh'>
                <FaFlag fontSize={'1rem'} color='#0bc560' className='i'/>
                <span>Lorem ipsum adipisicing elit. Provident molestiaet.</span>
                </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default OurSchool