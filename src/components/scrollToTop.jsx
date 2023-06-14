import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavbarComponent from "./navbar";

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);     
    }, [location]);  
    return <>
    {location.pathname !== "/" && <NavbarComponent setShow={props.setShow}/>}
    {props.children} 
    </>
  };
  
  export default ScrollToTop;