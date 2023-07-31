import { useEffect, useState } from "react"
import { getCatalogItems } from "../ApiService"



export default function PriceList() {
    const [items, setItems] = useState([]);
    
    
    const refreshItems = async()=>{
         await getCatalogItems()
        .then(res => {           
            setItems(res.data)          
        })
            
    }
   
    useEffect(() => {
       refreshItems();
       

    }, [])
    return (
        <div className="">            
            <div className="mx-auto row mt-5 ">
                <div>
                    <h2>Services We Offer</h2>
                    <h6>***We always like a challenge. Please contact us if you need a mount not listed below.***</h6>
                </div>

                {items.map((item) => (
                    item.imageurl ?
                        <div key={item.id} className="col-lg-4 mb-3 ">

                            <div>
                                <div className="border overflow-hidden mx-auto" style={{ width: "200px", height: '200px', borderRadius: "50%" }}>
                                    <img src={item.imageurl} alt="" style={{ width: "100%", height: "auto" }} />
                                </div>
                                <h3>{item.name}</h3>
                                <h5 className="col-lg-4 mx-auto">{item.description}</h5>
                                <h6>${item.price}.00</h6>
                            </div>
                        </div>
                        : ""
                ))}
            </div>

            <div className="container">
                {items.filter(item=>item.imageurl === null).length > 0 &&
                <div>
                    <h3>Other Services</h3>
                </div>
            }
                {items.filter(item=>item.imageurl === null).map(item => (
                    
                        <div key={item.id} className="row justify-content-center">
                            <h4 className="col-4">{item.name}</h4>
                            <h4 className="col-4">${item.price}.00</h4>
                        </div>
                       
                ))}
            </div>
        </div>
    )
}