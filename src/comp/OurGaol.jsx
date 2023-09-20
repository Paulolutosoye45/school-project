//react-router-dom
import { Link } from 'react-router-dom'
//img
import imgs from '../assets/home-slide-bg-3.jpg'
import imgs4 from '../assets/home-slide-bg-1.jpg'
import imgs2 from '../assets/home-slide-bg-2.jpg'

//icons
import {  FaComments } from 'react-icons/fa'

function OurGoal() {
  return (
    <div className="goal">
    <h3><span>About</span> our school</h3>
     <p className='underLine'>Lorem ipsum dolor sit amet, consectetur itatis, quisquam consequuntur quasi?</p>
        <div className="mini-container">
              <div className='first-container'>
                <img src={imgs} alt="" />
                <div className='mini-block'>
                      <h1>skills simply amazing!</h1>
                      <div className="mini-flex">
                        <div></div>
                        <div></div>
                      </div>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum deleniti reiciendis possimus exercitationem, aperiam eveniet commodi expedita explicabo. Officia, et?</p>
                      <h5><Link>continue reading</Link></h5>
                      
                </div>
              </div>
              <div className='first-container'>
                <img src={imgs4} alt="" />
                <div className='mini-block'>
                      <h1>Converssaion with all</h1>
                      <div className="mini-flex">
                        <div></div>
                        <div></div>
                      </div>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum deleniti reiciendis possimus exercitationem, aperiam eveniet commodi expedita explicabo. Officia, et?</p>
                      <h5><Link>continue reading</Link></h5>
                </div>
              </div>
              <div className='first-container'>
                <img src={imgs2} alt="" />
                <div className='mini-block'>
                      <h1>Improve your leasons</h1>
                      <div className="mini-flex">
                        <div></div>
                        <div></div>
                      </div>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum deleniti reiciendis possimus exercitationem, aperiam eveniet commodi expedita explicabo. Officia, et?</p>
                      <h5><Link>continue reading</Link></h5>
                </div>
              </div>
        </div>
        <button><FaComments fontSize={'1.7rem'}/><Link to='whyUs'>view more</Link></button>
    </div>
  )
  
}

export default OurGoal