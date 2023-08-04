import { Field, Form, Formik } from "formik";
import { addItem, deleteItem, updateItem } from "../../ApiService";
import ImageDropdown from "../components/image-drop-down/imageDropdown"
import { useState } from "react";

export default function ItemForm({ item, refreshItemList, setShow }) {
    const [image, setImage] = useState()
    const initialValues ={
        name:"",
        description:"",
        imageURL:"",
        price:""
    }
   
    const handleDelete=async()=>{
        let choice = window.confirm("Are you sure you want to delete this Item. This can not be undone?")
        if(choice){
            await deleteItem(item.id)
            .catch(err=> alert(err))
            alert("Item has been deleted")          
        }
        refreshItemList();

    }

    const handleSubmit = async (values) => {
        if(item){
            values.imageurl = image.url
            await updateItem(item.id,values)
            .then(res=>alert("Update Successful"))
            .catch(err=> alert(err));            
        }else{
            await addItem(values)
            .catch(err=> alert(err))            
            setShow(false)           
        }
        refreshItemList();      
        setImage(null) 
    }

    return (
        <div>
            <Formik initialValues={item ? item :initialValues} enableReinitialize='true' onSubmit={handleSubmit} >
                {(props) => (
                    <Form className="form-bg">
                        <div className="row  p-3 text-start">
                        <div className="col-lg-12">
                                <button type="button" className="btn btn-close float-end delete-btn" title="Delete" onClick={handleDelete}></button>
                            </div>
                            <div className="col-lg-4">
                                <label>Name:</label>
                                <Field typ="text" name="name" className="form-control" />
                            </div>
                            <div className="col-lg-4">
                            <label>Description:</label>
                                <Field as="textarea" name="description" className="form-control" />
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    <h6>Current Image</h6>
                                    <img className="item-image" src={item.imageurl} alt="" />
                                </div>
                                {image && <div>
                                    <h6>Selected Image</h6>
                                    <img className="item-image" src={image.url} alt="" />
                                </div>}
                            <label>Image:</label>
                                <ImageDropdown mount={image} handleAction={setImage} />
                            </div>
                            <div className="col-lg-3">
                            <label>Price:</label>
                                <Field typ="float" name="price" className="form-control" />
                            </div>
                            <div className="col-lg-2 ms-auto mt-2">
                                <button type="submit" className="btn btn-warning w-100" >{item?"Update" : "Add"}</button>
                            </div>
                            
                        </div>

                    </Form>

                )}
            </Formik>
        </div>
    )
}