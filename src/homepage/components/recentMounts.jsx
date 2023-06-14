
import { useEffect, useState } from "react";
import { getRecentMounts } from "../../ApiService";



export default function RecentMounts({images}){
  const [recentMounts, setRecentMounts] = useState([]);
  const refreshMounts=async()=>{
    await getRecentMounts()
    .then(res=>setRecentMounts(res.data))
   
  }

 useEffect(()=>{
  refreshMounts()
 },[])
    return(
        
          <div className=" row mb-1 mt-5">
            <h6>RECENT MOUNTS</h6>
            {recentMounts.map(image => (               
               <div key={image.id} className="col-lg-6 mb-2">
                <img src={image.url} alt="" width="75%" className="rounded"/>
               </div>

            ))}         
          </div>
    )
}