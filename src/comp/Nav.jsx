//react-router-dom
import { NavLink} from "react-router-dom"

//img
import Logo from '../assets/logo.png'


function Nav() {    
  return (
    <div>
     <nav>
        <section className="top-nav">
                <img src={Logo} alt="" />
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
                </label>
            <ul className="menu">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='about'>about</NavLink></li>
                <li><NavLink to='teacher'>teacher</NavLink></li>
                <li><NavLink to='courses'>courses</NavLink></li>
                <li><NavLink to='whyUs'>why us</NavLink></li>
                <li><NavLink to='View'>Views</NavLink></li>
            <div className="auth">
                <li><NavLink to='sign_up'>Sign up</NavLink></li>
                <li><NavLink to='login'>Login</NavLink></li>
            </div>
            </ul>
                <div className="nav-meun">
                    <ul className="nav-list"></ul>
                </div>
        </section>
    </nav>
    </div>
  )
}

export default Nav