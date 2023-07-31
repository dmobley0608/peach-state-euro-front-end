import { BsTelephone } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../api/AuthContext'


export default function MiniNavbar() {
    const auth = useAuth();
    const nav= useNavigate();

    const signOut=()=>{
        auth.logout()
       
    }
    return (
        <div className="d-flex row bg-dark text-light mb-0" >

            <div className="d-flex col-12 p-2 top_header p-2">

                <div className="ms-2 d-flex">

                    <h6 className="">

                        <i className="fa-solid fa-phone"></i>

                        <a href="tel:678-769-8511" className="text-light" style={{ textDecoration: "none" }}><BsTelephone /> (678) 769-8511</a>

                    </h6>
                </div>
                <ul className='nav ms-auto'>
                   <li>{auth.isAdmin && <Link className='btn btn-secondary me-2 ' to="/admin/items">Dashboard</Link>}</li> 
                   <li>{auth.isAdmin && <a href="/api/logout" className='btn btn-secondary  me-5' onClick={signOut}>Logout</a>}</li> 
                </ul>

            </div>

        </div>

    )
}