import Card from 'react-bootstrap/Card';
import axios from "axios";
import React, { useState, useEffect } from 'react';







function  Rowbottomfamilytree(props){
    return(
    <section className="rowbottomMemberBox">
   
   <div>{props.rowbottomfamilymember.name} </div>
    <div>{props.rowbottomfamilymember.dateofBirth}</div>
   
    <div>
   
    
   
    <img src ={props.rowbottomfamilymember.profilephoto} alt="profilephoto" 
        
       width="150px"
        height="150px"
        
      />
   
   
   
   
    </div>
    </section>
   
   
   
    )
   
   
    }
   
    export default Rowbottomfamilytree
