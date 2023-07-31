import StarRating from "./starRating";


export default function ReviewCard({review}){
    const date = new Date(review.date);    
    let year = date.getFullYear()
    let month = date.toLocaleString('default', {month: 'long'});
    let day = date.getDate();

    return(
        <div className="card text-dark text-start mb-3 col-lg-6 mx-auto" style={{textShadow:'none'}}>
            <div className="card-header">
                <StarRating rating={review.rating}/>
            </div>
            <div className="card-body ">
                <h5 className="card-title">{review.firstName} {review.lastName}</h5>
                <p className="card-text">{review.review}</p>
                <h6>{month} {day}, {year}</h6>
            </div>

        </div>
    )
}