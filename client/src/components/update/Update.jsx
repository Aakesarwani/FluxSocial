import { useState } from "react";
import "./update.scss";
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Update = ({setOpenUpdate,user}) => 
{
    const [cover, setCover] =useState(null);
    const [profile, setProfile] =useState(null);
    const [texts, setTexts] = useState({
        name: "",
        city: "",
        website: "",
    });

    const  upload  = async (file)=>{
        try{
            const formData = new FormData();
            formData.append("file", file)
            const res = await makeRequest.post("/upload", formData);
            return res.data
        }catch(err){
            console.log(err)
        }
    };

    const handleChange = (e) => {
        setTexts((prev) => ({...prev,[e.target.name]:[e.target.value]}));
    };

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (user) => makeRequest.put("/users", user),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(["user"]);
        },
    });


    const  handleClick = async (e) => {
        e.preventDefault();
        let coverUrl ;
        let profileUrl ;
        coverUrl = cover ? await upload(cover) : user.coverPic;
        profileUrl = profile ? await upload(profile) : user.profilePic;
        mutation.mutate({...texts, coverPic:coverUrl , profilePic:profileUrl});
        setOpenUpdate(false);
    };

    return(
        <div className="update">
            Update
            <form>
                <label htmlFor="file">Cover picture</label>
                <input type="file" onChange={e=>setCover(e.target.files[0])}/>
                <label htmlFor="file">profile picture</label>
                <input type="file" onChange={e=>setProfile(e.target.files[0])}/>
                <label htmlFor="text">Name</label>
                <input type="text" name="name" onChange={handleChange}/>
                <label htmlFor="text">City</label>
                <input type="text" name="city" onChange={handleChange}/>
                <label htmlFor="text">Website</label>
                <input type="text" name="website" onChange={handleChange}/>
                <button onClick={handleClick}>Update</button>
            </form>
            <button onClick={()=>setOpenUpdate(false)}>Close</button>
        </div>
    )
}
export default Update;