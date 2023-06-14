import { useEffect } from "react";
import banner from "../images/banner.png";
import alt_logo from "../images/alt_logo.png"
import Navbar from "./components/navbar";
import RecentMounts from "./components/recentMounts";




export default function Homepage({ images, setShow }) {




  useEffect(() => {

  }, []);

  return (
    <div className="w-100" style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <div className="row camo " style={{ height: "420px", paddingBottom: "475px" }} >
        <div className="mt-2 " style={{ height: "320px", overflow: "hidden", maxWidth: "100%" }}>
          <div className="row" >
            <div className="">
              <img id="banner" className="animate__animated animate__fadeIn" src={banner} alt="" />
            </div>
          </div>

        </div>
        <div className="container text-center  border-top border-3 col-lg-6 " style={{}}>
          <img className="mx-auto animate__animated animate__pulse" src={alt_logo} alt="" style={{ maxHeight: "130px", width: 'auto', maxWidth: '100%' }} />
        </div>

      </div>
      <div className="peach ">
        <Navbar setShow={setShow} />
        <div className="black row justify-content-center " >
          <div className="col-lg-4 mx-auto">
            <RecentMounts />
          </div>

          <div className="col-lg-4 mt-5 mx-auto">
            <h6>Located in Hall County, Ga</h6>
            <iframe title="hall_co_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210926.8004163632!2d-83.97945628538233!3d34.30639204443612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885f621ddbd3f249%3A0x93c8ce354711119e!2sHall%20County%2C%20GA!5e0!3m2!1sen!2sus!4v1674526263411!5m2!1sen!2sus" width="500px" height="590px" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div >
  );
}
