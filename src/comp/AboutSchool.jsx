//icons
import {  FaFlag, FaFolderOpen, FaShoppingCart } from 'react-icons/fa';

function AboutSchool() {
  return (
    <div className='about'>
        <h3><span>About</span> our school</h3>
        <p className='underLine'>Lorem ipsum dolor sit amet, consectetur itatis, quisquam consequuntur quasi?</p>
        <div className="box">
            <div className="boxs">
               <h4 className='clean'>clean environment</h4>
               <FaFlag fontSize={'2rem'} color='#0bc560' cursor={'pointer'}/>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat voluptatem accusantium, officia quaerat provident totam excepturi? Veniam reprehenderit quod tempore incidunt sapiente autem, non, delectus blanditiis commodi ullam, cum odit?</p>
            </div>
            <div className="boxs">
               <h4>big playground & area</h4>
              <FaFolderOpen fontSize={'2rem'} color='#0bc560' cursor={'pointer'}/>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat voluptatem accusantium, officia quaerat provident totam excepturi? Veniam reprehenderit quod tempore incidunt sapiente autem, non, delectus blanditiis commodi ullam, cum odit?</p>
            </div>
            <div className="boxs">
               <h4>arrange rooms</h4>
              <FaShoppingCart fontSize={'2rem'} color='#0bc560' cursor={'pointer'}/>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat voluptatem accusantium, officia quaerat provident totam excepturi? Veniam reprehenderit quod tempore incidunt sapiente autem, non, delectus blanditiis commodi ullam, cum odit?</p>
            </div>
        </div>
    </div>
  )
}   

export default AboutSchool