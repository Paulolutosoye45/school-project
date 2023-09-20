//img
import imgs2 from '../assets/home-slide-bg-2.jpg'

function Guardian() {
  return (
    <div className="guardian">
    <h3><span>Views</span> our guardian</h3>
     <p className='underLine'>Lorem ipsum dolor sit amet, consectetur itatis, quisquam consequuntur quasi?</p>
        <div className="guardian-box">
            <div className="guardian-title"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quam laboriosam, perferendis dolor assumenda corrupti veniam perspiciatis ratione nam, architecto, sit maxime totam esse explicabo molestias deserunt! Placeat aliquid animi et odio excepturi voluptate molestias quibusdam eum asperiores blanditiis, aliquam odit totam laborum esse adipisci atque alias possimus enim sequi.</p></div>
            <div className="guardian-title"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aperiam ab dolor unde eius vero qui praesentium minima at ducimus veritatis blanditiis ipsa repellendus cupiditate id, excepturi quae quis expedita facere corrupti ipsum possimus! Iusto, recusandae eos voluptatem distinctio accusamus libero quod fugit unde provident, cumque voluptatum! Rerum, quidem laboriosam</p></div>
            <div className="down-arrow"></div>
            <div className="down-arrow  left"></div>
            </div>
            <div className="guardian-closure">
            <div className="guardian-profile">
                <img src={imgs2} alt="" />
                <div>
                    <h5>islam   uddin</h5>
                    <span>SEC   specailist, purbohara</span>
                </div>
            </div>
            <div    className="guardian-profile">
                <img src={imgs2} alt="" />
                <div>
                    <h5>islam   uddin</h5>
                    <span>SEC   specailist, purbohara</span>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Guardian