import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { getReviews } from "../../ApiService";
import ReviewForm from "../../reviews/reviewForm";
import ReviewsPage from "../../reviews/reviews";




export default function AdminReviewPage(){
    const [reviews, setReviews] = useState([])
  
  

    const refreshReviews = () => {
        setReviews([])
        getReviews()
            .then(res => {setReviews(res.data)})
    }

    useEffect(() => {
        refreshReviews()
    }, [])

    return (
        <div className="">          
            <div className="container mt-5">               
                <div className="container">
                    {reviews.map(review => (
                        <div>
                            <ReviewForm review={review} refreshReviews={refreshReviews}/>
                        </div>
                    ))}
                </div>
            </div>


           
        </div>
    )
}