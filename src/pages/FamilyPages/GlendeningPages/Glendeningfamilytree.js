
import Card from 'react-bootstrap/Card';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import '../Glendening/Glendeningfamilytree.css';







function  Glendeningfamilytree(props){
    return(
    <section className="glendeningFamilyMemberBox">
   
   <div>{props.glendeningfamilymember.name} </div>
    <div>{props.glendeningfamilymember.dateofBirth}</div>
   
    <div>
   
    
   
    <img src ={props.glendeningfamilymember.profilephoto} alt="profilephoto" 
        
       width="150px"
        height="150px"
        
      />
   
   
   
   
    </div>
    </section>
   
   
   
    )
   
   
    }
   
    export default Glendeningfamilytree