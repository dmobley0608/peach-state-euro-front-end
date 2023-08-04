import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { getImages, getRecentMounts, updateRecentMount } from "../../ApiService";
import LoadingScreen from "../components/loading/loading";
import ImageDropdown from "../components/image-drop-down/imageDropdown";





export default function RecentMounts() {
    const [recentMounts, setRecentMounts] = useState([]);
    const [images, setImages] = useState([])
    const [show, setShow] = useState(false)
    
    
    const refreshMounts = async () => {
        await getRecentMounts()
            .then(res => {setRecentMounts(res.data)})        
    }

    const refreshImages=async()=>{
        setShow(true)
        await getImages()
        .then(res=>{setImages(res.data)})
        setShow(false)
    }

    const handleSubmit=async(values)=>{      
       await updateRecentMount(values)
       await refreshMounts()
       
    }

    useEffect(() => {
        refreshImages()
        refreshMounts()
    }, [])

    return (
        <div className="container">
            {recentMounts.map(mount => (
                <Formik key={mount.id} initialValues={mount} onSubmit={handleSubmit}>
                    {(props) => (
                        <Form className="d-flex mb-3 p-3">
                            <div className="col-lg-3">
                                <img src={mount.url} alt="" width="100px" />
                            </div>

                            <div className="col-lg-5">
                                <ImageDropdown mount={mount} images={images} handleSubmit={handleSubmit}/>
                            </div>                           
                        </Form>

                    )}

                </Formik>

            ))}
            <LoadingScreen show={show}/>
        </div>
    )
}