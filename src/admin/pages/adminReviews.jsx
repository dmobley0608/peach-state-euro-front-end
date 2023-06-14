import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { getReviews } from "../../ApiService";
import ReviewForm from "../../reviews/reviewForm";
import ReviewsPage from "../../reviews/reviews";




export default function AdminReviewPage(){
    const [reviews, setReviews] = useState([])
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const refreshReviews = () => {
        getReviews()
            .then(res => setReviews(res.data))
    }
    useEffect(() => {
        refreshReviews()
    }, [])
    return (
        <div className="">          
            <div className="container mt-5">               
                <div className="container">
                    {reviews.sort((a, b) => (a.date < b.date) ? 1 : -1).map(review => (
                        <div>
                            <ReviewForm review={review} refreshReviews={refreshReviews}/>
                        </div>
                    ))}
                </div>
            </div>


           
        </div>
    )
}