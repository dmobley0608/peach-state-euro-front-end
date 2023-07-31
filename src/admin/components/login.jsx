import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../api/AuthContext";
import googleImg from "../../images/google-logo-9822.png"
import "./styles.css"
export default function LoginPage({message}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const authContext = useAuth();
  const nav = useNavigate();
 
  useEffect(()=>{
    
  },[])
  

  return (
    <div className="container col-lg-6 position-absolute top-50 start-50 translate-middle border border-1 shadow rounded p-5">
        <h4>{message}</h4>
    
      <a class="button google" href="/login/federated/google"><img src={googleImg}/>Sign in with Google</a>
    </div>
  );
}
