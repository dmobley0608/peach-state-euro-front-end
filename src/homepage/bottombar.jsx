import { CloudinaryContext, Image, Transformation } from "cloudinary-react";

export default function BottomBar({ images }) {
  return (
    <div className="row d-none d-lg-flex ">
      {images.map((image) => (
        <div className="mt-3">
          <CloudinaryContext
            key={image.public_id}
            cloudName="dmobley0608"
            className=""
          >
            <Image className="rounded" publicId={image.public_id}>
              <Transformation
                crop="scale"
                width="auto"
                height="200"
                dpr="auto"
                responsive_placeholder="blank"
              />
            </Image>
          </CloudinaryContext>
        </div>
      ))}
    </div>
  );
}
