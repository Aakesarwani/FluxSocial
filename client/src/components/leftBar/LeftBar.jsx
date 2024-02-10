import "./leftBar.scss";
import Friends from "../../assets/friends.png";
import Groups from "../../assets/groups.png";
import Market from "../../assets/market.png";
import Watch from "../../assets/watch.jpg";
import Memories from "../../assets/memories.png";
import Events from "../../assets/events.png";
import Gaming from "../../assets/gaming.png";
import Gallery from "../../assets/gallery.jpg";
import Videos from "../../assets/videos.png";
import Messages from "../../assets/messages.jpg";
import Tutorials from "../../assets/tutorials.jpg";
import Courses from "../../assets/courses.png";
import Fund from "../../assets/fund.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {

    const { currentUser } = useContext(AuthContext);

    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={currentUser.profilePic} alt=""/>
                        <span>{currentUser.name}</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt="" style={{width:"30px" , height:"30px"}}/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Groups} alt="" style={{width:"30px" , height:"30px"}} />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Market} alt="" style={{width:"30px" , height:"30px"}}/>
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={Watch} alt="" style={{width:"30px" , height:"30px"}}/>
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Memories} alt="" style={{width:"30px" , height:"30px"}}/>
                        <span>Memories</span>
                    </div>
                </div>
                <hr/>
                <div className="menu">
                    <span>Your Shortcuts</span>
                    <div className="item">
                        <img src={Events} alt="" style={{width:"30px" , height:"30px"}}/>
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Gaming} alt="" style={{width:"30px" , height:"30px"}}/>
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={Gallery} alt="" style={{width:"30px" , height:"30px"}}/>
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Videos} alt="" style={{width:"30px" , height:"30px"}}/>
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={Messages} alt="" style={{width:"30px" , height:"30px"}}/>
                        <span>Messages</span>
                    </div>
                </div>
                <hr/>
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <img src={Fund} alt="" style={{width:"30px" , height:"30px"}}/>
                        <span>Fund</span>
                    </div>
                    <div className="item">
                        <img src={Tutorials} alt="" style={{width:"30px" , height:"30px"}}/>
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <img src={Courses} alt="" style={{width:"30px" , height:"30px"}}/>
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LeftBar;