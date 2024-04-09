import Post from "../post/Post"
import "./posts.scss"
import Share from "../share/Share"
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from "../../axios"

const Posts = ({userId}) =>{

    const { isLoading, error, data } = useQuery({
        queryKey: ['posts'],
        queryFn: () => makeRequest.get("/posts?userId="+userId).then(res=>{
            return res.data;
        })
        
    });

    return (

        <div className="posts">
            {(userId) ? "Your Posts" :<Share></Share>}
            {error ?"Please Login to see the Posts!" :(
                isLoading?"loading" : (
                data ? (data.map((post)=>(
                <Post post={post} key={post.id}/>))) : null)
            )}
        </div>
    )
}

export default Posts