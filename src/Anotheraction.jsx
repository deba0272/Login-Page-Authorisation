import React from 'react'
import img4 from './images/sense.jpg'
import { NavLink } from 'react-router-dom';
import './App.css'
function Anotheraction(){
    return(
        <div className="de">
            
            <div className="fr">
        
            </div>
        <div className="gh">
            <h2>Sensex</h2>
        </div>
        <div className="login9 card">
            <img src={img4} className="card-img-top"/>
<div class=" bod card-body">
    <h5 className=" tit card-title">Stock Exchange</h5>
    <p className=" tit2 card-text">Click on below button for proper explanation</p>
    <a href="#" className="primary">
    <NavLink to="/Pand">Expand</NavLink>
    </a>
</div>
        </div>
    </div>
        
    )
}
export default Anotheraction