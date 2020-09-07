import React from 'react';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Profile = (props) => {
   
    const{first_name, last_name, email, phone, photo, yearly_income}= props.item
    return (
        <div className="profile">
            <img src={photo} alt=""/>
            <h3>Name:{first_name} {last_name}</h3>
            <h4>Email:{email}</h4>
            <h4>Phone:{phone}</h4>
            <h4>Yearly income: ${yearly_income}</h4>
            <button onClick={()=>props.handleButton(props.item)}><FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> Hire Me</button>
        </div>
    );
};

export default Profile;