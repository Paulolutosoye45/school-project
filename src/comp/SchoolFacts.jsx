//icon
import {FaBars,  FaGraduationCap, FaUniversity, FaUser, FaUserPlus, FaUsersCog} from 'react-icons/fa';

function SchoolFacts() {
  return (
    <div className='schoolfacts'>
      <h3>some <span>facts</span> of our school</h3>
        <p className='underLine'>Lorem ipsum dolor sit amet, consectetur itatis, quisquam consequuntur quasi?</p>
        <div className="mini-box">
          <div className="fbox">
            <FaUser fontSize={'1.8rem'} color='#e3e3e3'/>
            <p>1200</p>
            <span>Students</span>
          </div>
          <div className="fbox">
            <FaUsersCog fontSize={'1.8rem'} color='#e3e3e3'/>
            <p>12</p>
            <span>Teacher</span>
          </div>
          <div className="fbox">
            <FaUserPlus fontSize={'1.8rem'} color='#e3e3e3'/>
            <p>700</p>
            <span>Avarage A+</span>
          </div>
          <div className="fbox">
            <FaUniversity fontSize={'1.8rem'} color='#e3e3e3'/>
            <p>50</p>
            <span>Rooms</span>
          </div>
          <div className="fbox">
            <FaGraduationCap fontSize={'1.8rem'} color='#e3e3e3'/>
            <p>263</p>
            <span>Awards</span>
          </div>
          <div className="fbox">
            <FaBars fontSize={'1.8rem'} color='#e3e3e3'/>
            <p>56</p>
            <span>Courses</span>
          </div>
        </div>
    </div>
  )
}

export default SchoolFacts