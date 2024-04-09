import React, { useState } from "react";
import "./post.scss";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {  buttonBaseClasses } from "@mui/material";
import Comments from "../comments/Comments";
import moment from "moment";
import { useQuery , useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { rootShouldForwardProp } from "@mui/material/styles/styled";
import { Link } from 'react-router-dom';

const Post = ({post}) =>{

    const [commentOpen , setCommentOpen]=useState(false);
    const [menuOpen , setMenuOpen]=useState(false);

    const {currentUser} = useContext(AuthContext);
    
    
    const { isLoading, error, data } = useQuery({
        queryKey: ["likes",post.id],
        queryFn: () => makeRequest.get("/likes?postId=" + post.id).then((res)=>{
            return res.data;
        })
        
    });
    
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (liked) => {
          const url = `/likes?postId=${post.id}`;
          if (liked) 
          {
            return makeRequest.delete(url);
          }
          return makeRequest.post("/likes", { postId: post.id });
        },
        onSuccess: () => {
          queryClient.invalidateQueries(['likes']);
        },
    });
    const deleteMutation = useMutation({
        mutationFn: (postId) => {
          return makeRequest.delete("/posts/"+postId);
        },
        onSuccess: () => {
          queryClient.invalidateQueries(['posts']);
        },
    });
      
    const handleLike = () =>{
        mutation.mutate(data.includes(currentUser.id));
    };

    const handleDelete = ()=>{
        deleteMutation.mutate(post.id)
    }
    
    
    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt=""/>
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{textDecoration:"none" , color:"inherit"}}>
                                <span className="name">{post.name}</span> 
                            </Link>
                            <span className="date">{moment(post.createdAt).fromNow()}</span>
                            
                        </div>
                    </div>
                    <MoreHorizOutlinedIcon onClick={()=>setMenuOpen(!menuOpen)}/>
                    {menuOpen && post.userId===currentUser.id && (<button onClick={handleDelete}>Delete</button>)}
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={"./upload/"+post.img} alt=""/>
                </div>
                <div className="info">
                    <div className="item">
                        {isLoading ? "loading" : data.includes(currentUser.id) ? (
                            <FavoriteOutlinedIcon style={{color:"red"}} onClick={handleLike}/>
                        ) :( 
                            <FavoriteBorderOutlinedIcon onClick={handleLike}/>
                        )}
                        {(data)===undefined ? 0:data.length} Likes
                    </div>
                    <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon/>
                        Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon/>
                        Share
                    </div>
                </div>
                {commentOpen && <Comments postId={post.id}/>}
            </div>
        </div>
    )
};
export default Post;