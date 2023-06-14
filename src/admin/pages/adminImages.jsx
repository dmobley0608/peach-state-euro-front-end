import { useEffect, useState } from "react";
import { deleteImage, getImages } from "../../ApiService";
import CloudinaryUploadWidget from "../components/imageUploadWidget";
import LoadingScreen from "../components/loading/loading";



export default function AdminImages(){
    const [images, setImages] = useState([]);
    const [show, setShow]= useState(false)
    const refreshImages = async()=>{
        setShow(true)
        await getImages()
        .then(res=>setImages(res.data.resources))       
       setShow(false)
    }

    const handleDelete=async(filename)=>{
       let choice = window.confirm("Are you sure? This can not be undone!")
       if(choice){
        setShow(true)
        await deleteImage(filename)
        await refreshImages()
        setShow(false)
        
       }
    }

    useEffect(()=>{
        refreshImages()
    },[])
    return(
        <div className="container-fluid">
            <div>
            <CloudinaryUploadWidget refreshImages={refreshImages}/>
            </div>
            <table className="table table-lg  table-striped text-start">
                <thead>
                    <tr>
                        <th></th>                        
                        <th ></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {images.map(image=>(
                        <tr key={image.public_id} className="align-bottom">
                            
                            <td><img src={image.secure_url} alt="" width="100px"/></td>                            
                            <td>{image.secure_url}</td>
                            <td><button className="btn btn-close delete-btn" title="Delete" onClick={()=>handleDelete(image.filename)}></button></td>
                                                       
                        </tr>
                    ))}
                </tbody>
            </table>  
            <LoadingScreen show={show}/>          
        </div>
    )
}