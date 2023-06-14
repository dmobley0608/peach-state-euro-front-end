
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { addReview, deleteReview } from "../ApiService";
import StarRatingForm from "./components/StarRatingForm";



export default function ReviewForm({ refreshReviews, setShow, review }) {
    const [rating, setRating] = useState(null)
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        review: "",
        rating: 0
    }
    const onSubmit = (values) => {
        if (rating === null) {
            alert("Please Select A Rating")
        }
        else {
            values.rating = rating
            addReview(values)
                .then(res => {
                    setShow(false)
                    refreshReviews();
                })
        }
    }

    const handleDelete=(review)=>{
        let choice = window.confirm("Are you sure? This can not be undone!")
        if(choice){
            deleteReview(review.id)
            refreshReviews()
        }
    }
    return (
        <Formik initialValues={review ? review : initialValues} onSubmit={onSubmit}>
            {(props) => (
                <Form className={review? "border row mb-2 container form-bg p-2":"row"}>
                    <div className="mb-3 col-lg-8">
                        <StarRatingForm setRating={setRating} />
                    </div>
                    {review && <div className="ms-auto  col-lg-2 ">
                        <button type="button" onClick={()=>handleDelete(review)} className="delete-btn btn btn-close float-end"></button>
                    </div>}
                    <div className="mb-3 col-lg-4">
                        <Field name="firstName" type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="mb-3 col-lg-4">
                        <Field name="lastName" type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="mb-3 col-lg-8">
                        <Field name="email" type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="mb-3 col-lg-8">
                        <Field name="review" as="textarea" className="form-control" placeholder="Write Your Review Here" />
                    </div>
                    {!review &&
                        <div className="mb-3 col-lg-8">
                            <input name="review" type='submit' value="Submit" className="btn btn-success float-start" />
                        </div>
                    }

                </Form>
            )}
        </Formik>
    )
}