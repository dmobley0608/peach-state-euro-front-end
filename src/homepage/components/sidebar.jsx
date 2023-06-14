import {CloudinaryContext, Image, Transformation } from 'cloudinary-react'


export default function SideBar({ images }) {
    return (
        <div className="row d-lg-flex " >
            {images.map(image => (
                <CloudinaryContext key={image.public_id}cloudName="dmobley0608" className='mb-1 col-6' >
                    <Image className='rounded mt-4' publicId={image.public_id}  style={{
            boxShadow: "1px 1px 10px black",
            backgroundColor: "rgba(0,0,0, .75)",
          }}>
                        <Transformation crop="scale"
                            width="auto"
                            height="200"
                            dpr="auto"
                            responsive_placeholder="blank" />
                    </Image>
                </CloudinaryContext>

            ))}
        </div>
    )
}