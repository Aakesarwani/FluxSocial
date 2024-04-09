import { db }  from "../connect.js";

export const getFollowSuggestions=async (req, res)=>{
    
    console.log("reached");

    try {
        const { userId } = req.body;

        console.log(userId, "look me in getfollowsuggestion")

        
        const q=`SELECT id AS userId, username AS name
        FROM users;`;
        console.log(q)

        const data = await db.query(q);

        console.log("@ folow", data)

        return res.status(200).json({data});
    } catch (err) {
        console.error(err.data);
        return res.status(500).json("Internal Server Error");
    }

}
