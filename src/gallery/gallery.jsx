import { CloudinaryContext, Image, Transformation } from 'cloudinary-react'
import { useEffect } from 'react'
import { getImages } from '../ApiService'


export default function GalleryPage({ images, setImages }) {
    let time = 0;
    useEffect(() => {
        if (images == null) {
            getImages()
                .then(res => setImages(res.data.resources))
        }
    })
    return (
        <div className='fill' >            
            <CloudinaryContext cloudName="dmobley0608" className="row">
                <div className='container row mt-4'>
                    {images ? images.map(image => {
                         time += .5
                        return(
                        <div className={` col-lg-4 col-md-6 mb-3 animate__animated animate__backInRight animate__delay-${time}s`} key={image.public_id}>
                            <div className="overflow-hidden">
                                <a target="_blank" rel="noreferrer" href={image.secure_url}>
                                    <Image  publicId={image.public_id} className={`rounded border border-dark border-2 `}>
                                        <Transformation
                                            crop="scale"
                                            width="auto"
                                            height="400"
                                            dpr="auto"
                                            responsive_placeholder="blank"
                                        />
                                    </Image>
                                </a>
                            </div>
                        </div>
                        )
                    }) : <div className='mx-auto'>Loading</div>}

                </div>


            </CloudinaryContext>
        </div>

    )

}