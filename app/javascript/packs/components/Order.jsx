import React from 'react';
import OrderCard from './OrderCard';

const Order = ({orders}) => {
    console.log(orders)
    return ( 
        <>
            <div className="nav-bar">
                <div className="title">Orders</div>
            </div>
            <div className="order-container">
                <section>
                    <div className="order-cards">
                        {
                            orders.map((order,index)=>{
                                return <OrderCard key={index} order={order}/>
                            })
                        }
                    </div>
                </section>
            </div>
        </>
     );
}
 
export default Order;