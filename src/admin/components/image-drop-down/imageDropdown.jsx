import React from 'react'
import { useState } from 'react'
import "./styles.css"
import { useEffect } from 'react'
import { getImages } from '../../../ApiService'

export default function ImageDropdown({  handleAction, mount }) {
    const [showDropdown, setShowDropdown] = useState(false)
    const [images, setImages] = useState([])

    useEffect(()=>{
        getImages().then(res=>setImages(res.data))
    },[])
    return (
        <div className='image-dropdown'>
            {!showDropdown && <p onClick={() => setShowDropdown(!showDropdown)}>Click to select Image</p>}
            {showDropdown && <div className='images-container'>
                {images.map(image => (
                    <div key={image.fileId}
                        onClick={() => { setShowDropdown(!showDropdown); handleAction({ ...mount, url: image.url }) }}>
                        <img src={image.thumbnail} alt={image.fileId} />
                    </div>
                ))}
            </div>
            }

        </div >

    )
}
