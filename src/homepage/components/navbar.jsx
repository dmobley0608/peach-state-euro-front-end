import NavLink from "./navLink";
import { GiDeerHead, GiDeer } from 'react-icons/gi'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillStarFill } from 'react-icons/bs'


export default function Navbar({setShow}){
    return(
        <div className="row justify-content-arount p-5 " >
        <div className="col-lg-3 col-md-6 align-items-center mb-2 animate__animated animate__backInRight ">
          <NavLink className="mx-auto" description="Our Work" path="gallery" icon={<GiDeerHead style={{ fontSize: "5em",marginTop:".25em" }} />} />
        </div>
        <div className="col-lg-3 col-md-6 align-items-center mb-2 animate__animated animate__backInRight">
          <NavLink description="Services" path="prices" icon={<GiDeer style={{ fontSize: "5em", marginTop:".25em" }} />} />
        </div>
        <div className="col-lg-3 col-md-6 align-items-center mb-2 animate__animated animate__backInLeft">
          <NavLink description="Contact Us" onClick={()=>setShow(true)} icon={<AiOutlineMail style={{ fontSize: "5em", marginTop:".25em" }} />} />
        </div>
        <div className="col-lg-3 col-md-6 align-items-center mb-2 animate__animated animate__backInLeft">
          <NavLink description="Reviews" path="reviews"
            icon={<div className="" >
              <BsFillStarFill style={{ fontSize: "2em", marginTop:"1.5em" }} />
              <BsFillStarFill style={{ fontSize: "2em", marginTop:"1.5em" }} />
              <BsFillStarFill style={{ fontSize: "2em", marginTop:"1.5em" }} />
            </div>} />
        </div>
      </div>
    )
}