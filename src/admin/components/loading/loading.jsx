import { Modal } from "react-bootstrap";
import loading from "../../../images/loading.gif"


export default function LoadingScreen({show}){

    return(
        <Modal show={show}  
            aria-labelledby=""
            centered  >           
                <img src={loading} alt="" />            
        </Modal>
    )
}