//react-router-dom
import {Outlet} from 'react-router-dom'
//components
import Nav from '../comp/Nav'
import Footer from '../comp/Footer'

function Main() {
  return (
    <>
    <div className='container'>
        <Nav/>
        <main>
            <Outlet/>
        </main>
    </div>
    <Footer/>
    </>
  )
}

export default Main