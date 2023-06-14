import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { getImages, getRecentMounts, updateRecentMount } from "../../ApiService";
import LoadingScreen from "../components/loading/loading";





export default function RecentMounts() {
    const [recentMounts, setRecentMounts] = useState([]);
    const [images, setImages] = useState([])
    const [show, setShow] = useState(false)

    const refreshMounts = async () => {
        await getRecentMounts()
            .then(res => setRecentMounts(res.data))        
    }

    const refreshImages=async()=>{
        setShow(true)
        await getImages()
        .then(res=>setImages(res.data.resources))
        setShow(false)
    }

    const handleSubmit=async(values)=>{
       await updateRecentMount(values);
       refreshMounts()
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
                                <Field as="select" name="url" className="form-control" >
                                    {images.map(image=>(
                                        <option value={image.secure_url}>
                                            {image.public_id}                                            
                                        </option>
                                    ))}
                                </Field>
                            </div>

                            <div className="col-lg-3">
                                <button type="submit" className="btn btn-success">Update</button>
                            </div>
                        </Form>

                    )}

                </Formik>

            ))}
            <LoadingScreen show={show}/>
        </div>
    )
}