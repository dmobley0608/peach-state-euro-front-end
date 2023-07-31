import { apiClient } from "./api/AuthenticationService"



//-----------------> Images <-------------------------------
export const getImages=()=> apiClient.get('gallery/images')
export const deleteImage=(filename)=>apiClient.post(`admin/images/delete/${filename}`)
//----------------->Recent Mounts<---------------------------
export const getRecentMounts=()=>apiClient.get('recent-mounts/')
export const updateRecentMount=(mount)=>apiClient.put(`admin/recent-mount/update`, mount)
//-----------------> Catalog <------------------------------
export const getCatalogItems=()=>apiClient.get("items/")
export const updateItem=(item)=>apiClient.put("items/update", item)
export const addItem=(item)=>apiClient.post("items/add", item)
export const deleteItem=(id)=>apiClient.delete(`/items/delete/${id}`)

//----------------> Reviews <--------------------------------
export const getReviews=()=>apiClient.get("reviews/")
export const addReview=(review)=>apiClient.post("reviews/add", review)
export const deleteReview=(id)=>apiClient.delete(`reviews/${id}`)