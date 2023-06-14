
import { Link } from "react-router-dom";

export default function NavLink({ path, icon, description, onClick }) {
   
    return (
        path !== undefined?
        <div className="mx-auto" style={{ borderRadius: "25em", width: "12em", height: "12em", backgroundColor: "rgba(0,0,0, .75" }} >             
            <Link className="nav-link text-white" to={`/${path}`}>
                {icon}
                <h6>{description}</h6>
            </Link>
        </div>
        :
        <button className="mx-auto" onClick={onClick} style={{ borderRadius: "25em", width: "12em", height: "12em", backgroundColor: "rgba(0,0,0, .75" }} >             
            <div className="btn text-white" >
                {icon}
                <h6>{description}</h6>
            </div>
        </button>
    )
}