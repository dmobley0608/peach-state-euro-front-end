import { AiTwotoneStar } from 'react-icons/ai'

export default function StarRating({ rating }) {
    const filler = [];

    for (let i = 0; i < rating; i++) {
        filler.push(i)        
    }

    return (
        <div>
            {filler.map(x => (
                <AiTwotoneStar key={x} className="fs-2" style={{ color: "gold" }} />
            ))}

        </div>

    )
}