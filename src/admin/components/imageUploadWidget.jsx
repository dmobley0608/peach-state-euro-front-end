import { useState } from "react";
import { addImage } from "../../ApiService";

export default function ImageUploadWidget({refreshImages}) {



  const onSubmit = async(e) => {
    e.preventDefault()  
    await addImage(e.target)
    await refreshImages()
  }
  return (
    <form onSubmit={onSubmit} enctype="multipart/form-data" method="post">
      <input type="file" name="media" accept="image/png, image/jpeg" required multiple />
      <button class="btn btn-success">Upload</button>
    </form>
  )
}



