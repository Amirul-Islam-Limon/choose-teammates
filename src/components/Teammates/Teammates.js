import React, { useEffect, useState } from 'react';
import './Teammates.css'
import fakeData from '../../fakeData.json'
import Profile from '../Profile/Profile';

const Teammates = () => {
    const [items, setItem] = useState([])
    const [total, setTotal] = useState(0)
   const handleButton =(item)=>{
       const newItem = [...items, item]
       setItem(newItem);
       const totalAmount =newItem.reduce((total, items)=> Number(total) + Number(items.yearly_income),0)
       setTotal(totalAmount);
   }
       
   
   
   
    return (
        <div className="teammates">
            <h1>Our Workers</h1>
            <div className="profiles-chosenList">
            <div className="profiles">
                {
                    fakeData.map(item => <Profile key={item.id} handleButton={handleButton} item ={item}></Profile> )
                }
                
            </div>
            <div className="chosen-details">
                <h3>Your Teammates Information</h3>
                <div className="add-here">
                <h4>Total Add Item:{items.length}</h4>
            <h5>You need to pay total: ${total}</h5>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Teammates;