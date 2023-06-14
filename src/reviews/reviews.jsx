import { useEffect, useState } from "react"
import { getReviews } from "../ApiService"
import ReviewCard from "./components/reviewCard"
import { MdOutlineRateReview } from 'react-icons/md'

import ReviewForm from "./reviewForm"
import { Modal } from "react-bootstrap"
import NavbarComponent from "../components/navbar"




export default function ReviewsPage() {
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
                <div className="bg-dark col-lg-6 mx-auto rounded mb-1">
                    <button className="btn text-white fs-4" onClick={handleShow}><MdOutlineRateReview /> Click To Leave A Review</button>
                </div>
                <div className="container">
                    {reviews.sort((a, b) => (a.date < b.date) ? 1 : -1).map(review => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </div>


            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered  >
                <Modal.Header closeButton>
                    <Modal.Title>Leave A Review</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <ReviewForm refreshReviews={refreshReviews} setShow={setShow} />
                </Modal.Body>
            </Modal>
        </div>
    )
}