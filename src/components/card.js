import React, { useState } from 'react';
import Cardsdata from './cardsdata';
function Cards() {
    const[data,setData]=useState(Cardsdata)
    console.log(data);
    return ( <div className='container mt-3'>
   

        <h2 className='text-center'>Add to Card projects</h2>
        <div className='row d-flex justify-content-center align-items-center'>
        {data.map((ele,index)=>{
           return(<>
            <div className="card" style={{width: "22rem",border:"none",className:"mx-2 mt-4 card_style"}}>
  <img className="card-img-top" src={ele.imgdata} style={{height:"16rem",margin:"5px"}} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{ele.rname}</h5>
    <p className="card-text">Price:{ele.price}  rs/-</p>
    <a href="#" className="btn btn-primary">Add to card</a>
  </div>
</div>
           </>)
        })}
       
        </div>
    </div> );
}

export default Cards;