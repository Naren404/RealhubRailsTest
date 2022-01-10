import React, {useState} from "react";

const OrderItem = ({item}) => {

    const [status, setStatus] = useState(item.status.title);

    const handleChangeStatus = (e) =>{
        const newStatus = e.target.value;
        fetch(`https://www.realhubapp.com/api/v2/order_items/${item.id}.json?status=${newStatus}`,{
            method: 'PUT',
            headers: { 'x-api-token': process.env.API_KEY}
            })
            .then((response)=>{
                if(response.ok){
                    setStatus(newStatus)
                    e.target.value=""
                }
            })
            .catch((error) =>{
                //handle error
                console.log(error)
            })
            }

    return ( 
        <>
            <div className="order-items-name">
                            {item.title}
                        </div>
                        <div className="order-items-actions">
                            
                                {
                                    item.artwork && <span className="download-artwork">
                                                        <a href={item.artwork.links.download_url}>Download Artwork </a>
                                                    </span>
                                }
                                
                        
                            <select name="status" className="change-status-dropdown" onChange={handleChangeStatus}>
                                <option value="" readOnly>Change Status</option>
                                <option value="Processing">Processing</option>
                                <option value="Printed">Printed</option>
                                <option value="Packaged">Packaged</option>
                                <option value="Held">Held</option>
                                <option value="Processed">Processed</option>
                                <option value="Complete">Complete</option>
                                <option value="Dispatched">Dispatched</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Declined">Declined</option>
                            </select>
                                <span className={`order-status ${status}`}> | {status} </span>
                        </div>
        </>
     );
}
 
export default OrderItem;