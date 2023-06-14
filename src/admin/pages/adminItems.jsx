import { useEffect, useState } from "react"
import { getCatalogItems } from "../../ApiService"
import ItemForm from "../forms/itemForm"
import { HiDocumentAdd } from 'react-icons/hi'
import { Modal } from "react-bootstrap"



export default function AdminItemsPage() {
    const [items, setItems] = useState([])
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const refreshItemList = async() => {        
        await getCatalogItems()
            .then(res => setItems(res.data))           
    }

    useEffect(() => {
        refreshItemList()

    }, [])

    return <>
        <button className="btn"><HiDocumentAdd className="fs-1" onClick={handleShow} />Add Item</button>
        {items.map(item => (
            <div key={item.id} className="mb-3">
                <ItemForm item={item} refreshItemList={refreshItemList} setShow={setShow} />
            </div>

        ))}

        <Modal show={show} onHide={handleClose} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered  >
            <Modal.Header closeButton>
                <Modal.Title>Add An Item</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <ItemForm refreshItemList={refreshItemList} setShow={setShow}/>
            </Modal.Body>
        </Modal>
    </>
}