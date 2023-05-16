import React from 'react';
import { Table } from 'react-bootstrap';
import {FaTrash} from "react-icons/fa"
function CardDetails() {
    return ( 
    <>
    <div className='container mt-2'>
<h2 className='text-center'>Iteam Details Page</h2>
 
    <section className='container mt-3'>
        <div className='itemsdetails row'>
            <div className='items_img col-5'>
                <img src='https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp' alt='' style={{height:"300px"}}/>

            </div>
            <div className='details col-5'>
                <Table>
                    <tr>
                        <td>
                            <p><strong>Restaurent:</strong>Masala Theory</p>
                            <p><strong>Price:</strong>300 rs/-</p>
                            <p><strong>Dishes:</strong>North Indian ,Biryani,Mughalai</p>
                            <p><strong>Total:</strong>300 Rs/-</p>
                        </td>
                        <td>
                            <p><strong>Rating:</strong><span style={{background:"green"}}>3.5 ★</span></p>
                            <p><strong>Order Review:</strong><span>1111+ order placed from here recently</span></p>
                            <p><strong>Remove:</strong><span><FaTrash style={{color:"red"}}/></span></p>
                        </td>
                    </tr>
                </Table>

            </div>

        </div>

    </section>
    </div>
     </>);
} 

export default CardDetails;