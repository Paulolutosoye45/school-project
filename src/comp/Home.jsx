//react-router-dom
import { Link } from 'react-router-dom'
//img
import homeimg from '../assets/home-image.png'

//icons
// FaBook

//compenets
import About from './AboutSchool'
import OurSchool from './OurSchool'
import SchoolFacts from './SchoolFacts'
// import Popular from './OurGaol'
import OurGoal from './OurGaol'
import Guardian from './guardian'
import { FaBook } from 'react-icons/fa'

function Home() {
  return (
    <div>
    <div className='home'>
      <div className="item1">
        <h1>welcome to our awesome <span>business university</span></h1>
        <p>A better way to present your school, College or University using fully featuerd html template. just click to Buy Now button in the themeforest</p>
        <button>
          <FaBook fontSize={'1rem'}/>
          <Link to='login'>
          APPLY NOW!
          </Link>
          </button>
      </div>
        <img src={homeimg} alt="" />

    </div>
    <About/>
    <OurSchool/>
    <SchoolFacts/>
    <OurGoal/>
    <Guardian/>
    </div>
  )
}

export default Home