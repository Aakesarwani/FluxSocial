import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
    const [inputs,setInputs] = useState({
        username:"",
        password:"",
    });
    const [err,setErr] = useState(null);

    const navigate = useNavigate()

    const handleChange =  (e) =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    };


    const {login}= useContext(AuthContext);
    /*
    const login =async(inputs) => {
        //login
        let data= JSON.stringify(inputs);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://52.66.242.197:8080/user/auth',
            /*headers: { 
              'Content-Type': 'application/json', 
              'X-API-Key': '{{token}}'
            },
            data : data
        };
        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
        
    };

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser]);*/


    const handleLogin = async (e)=>{
        e.preventDefault()
        try{
            await login(inputs);
            navigate("/")
        }catch(err){
            setErr(err.response.data);
        }
    }
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hey You!</h1>
                    <p>Greetings and welcome to our website! We are delighted to see you as a part of our community. Feel free to discover, share and interact with us to create something wonderful.</p>
                    <span>Don't you have an account?</span>
                    <Link to="/register"><button>Register</button></Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                        <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                        {err && err}
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;