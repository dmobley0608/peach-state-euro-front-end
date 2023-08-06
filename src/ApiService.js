import { apiClient } from "./api/AuthenticationService"

const headers = {'Content-Type': 'multipart/form-data'}

//-----------------> Images <-------------------------------
export const getImages=()=> apiClient.get('images/')
export const deleteImage=(filename)=>apiClient.delete(`images/${filename}`)
export const addImage=(image)=>apiClient.post('images/', image, headers)
//----------------->Recent Mounts<---------------------------
export const getRecentMounts=()=>apiClient.get('recent-mounts/')
export const updateRecentMount=(mount)=>apiClient.put(`recent-mounts/update`, mount)
//-----------------> Catalog <------------------------------
export const getCatalogItems=()=>apiClient.get("items/")
export const updateItem=(id,item)=>apiClient.put(`items/update/${id}`, item)
export const addItem=(item)=>apiClient.post("items/add", item)
export const deleteItem=(id)=>apiClient.delete(`/items/delete/${id}`)
//----------------> Reviews <--------------------------------
export const getReviews=()=>apiClient.get("reviews/")
export const addReview=(review)=>apiClient.post("reviews/add", review)
export const deleteReview=(id)=>apiClient.delete(`reviews/${id}`)
//----------------> Email <--------------------------------
export const sendEmail = (email) => apiClient.post("email/send", email)
