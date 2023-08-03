import { useEffect } from 'react'
import { getImages } from '../ApiService'
import "./styles.css"

export default function GalleryPage({ images, setImages }) {
   
    useEffect(() => {
        if (images == null) {
            getImages()
                .then(res => setImages(res.data))
        }
    })
    return (
        <div className='gallery' >            
            
                <div className='row mt-4'>
                    {images ? images.map(image => {                        
                        return(
                        <div className='image-container'>                            
                                <a target="_blank" rel="noreferrer" href={image.url}>
                                    <img src={image.url} alt="..."/>
                                </a>                           
                        </div>
                        )
                    }) : <div className='mx-auto'>Loading</div>}
                </div>


           
        </div>

    )

}