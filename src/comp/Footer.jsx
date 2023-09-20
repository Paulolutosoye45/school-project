//icon
import {FaFacebookF, FaGooglePlus, FaLinkedinIn, FaPinterestP, FaRocket, FaTwitter} from 'react-icons/fa'

function Footer  () {
  return (
    <div className='footer'>
    <h3>now <span>subscribe</span> us!</h3>
      <p className='underLine'>Lorem ipsum dolor sit amet, consectetur itatis, quisquam consequuntur quasi?</p>
      <form>
        <input type="email"placeholder='Your email here...'readOnly />
        <button disabled><FaRocket/>SUBMIT</button>
    </form>

    <div className="footer-box">
        <div className='footer-first-child'>
        <h1>abouts  us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati soluta enim illo magnam perspiciatis. Ipsum voluptate error expedita dolore consequatur.</p>
        </div>
        <div className='school-Links'>
            <h1>Schoo links</h1>
                <ul>
                    <li>About Us</li>
                    <li>Pricing</li>
                    <li>Faqs</li>
                    <li>Service</li>
                    <li>Sustainability</li>
                </ul>
                <ul>
                    <li>History</li>
                    <li>Awards</li>
                    <li>Community</li>
                    <li>Events</li>
                    <li>Methods</li>
                </ul>
        </div>
        <div className='footer-info'>
            <h1>conatct info</h1>
            <p>Address :   123 Main Street Str, London</p>
            <p>Phone   :    (531)502-200-0</p>
            <p>Email   :   schoolname@gmail.com</p>
            <div className="grid-icons">
                <FaTwitter className='tw'/>
                <FaFacebookF className='fa'/>
                <FaLinkedinIn className='li'/>
                <FaGooglePlus className='goo'/>
                <FaPinterestP className='pi'/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer