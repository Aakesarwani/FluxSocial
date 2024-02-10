import { useContext } from "react";
import "./stories.scss"
import {AuthContext} from "../../context/authContext"

const Stories = () =>{

    const {currentUser} = useContext(AuthContext);

    //TEMPORARY DUMMY DATA
    const stories =[
        {
            id:1,
            name:"Ava Jane",
            img:"https://images.pexels.com/photos/5935239/pexels-photo-5935239.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id:2,
            name:"Lily Bloom",
            img:"https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id:3,
            name:"William",
            img:"https://images.pexels.com/photos/5553094/pexels-photo-5553094.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id:4,
            name:"Elizabeth",
            img:"https://images.pexels.com/photos/4350178/pexels-photo-4350178.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];
    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePic} alt=""/>
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>        

            {stories.map(story=>(
                <div className="story" key={story.id}>
                    <img src={story.img} alt=""/>
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}
export default Stories