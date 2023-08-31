// import Card from 'react-bootstrap/Card';
// import axios from "axios";
// import React, { useState, useEffect } from 'react';
// import '../BohnPages/Bohnfamilymembers.css';



 function  Bohnfamilytree(props){
 return(
 <section className="bohnFamilyMemberBox">

<div>{props.bohnfamilymember.name} </div>
 <div>{props.bohnfamilymember.dateofBirth}</div>

 <div>

 

 <img src ={props.bohnfamilymember.profilephoto} alt="profilephoto" 
     
    width="150px"
     height="150px"
     
   />




// </div>
// </section>



 )


 }

 export default Bohnfamilytree