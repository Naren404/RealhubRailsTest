import React from "react";
import OrderItem from "./OrderItem";

const OrderCard = ({order}) => {
    return ( 
        <>
            <div className="order-card">
                <div className="agency-name">
                    {order.agency.title} - {order.campaign.address},{order.campaign.suburb_name}
                </div>
                <div className="order-items-container">
                    {
                        order.items.map((item)=>{
                            return <OrderItem item={item} key={item.id} />
                        })
                    }
                </div>
            </div>
        </>
     );
}
 
export default OrderCard;