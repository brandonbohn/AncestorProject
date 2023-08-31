import Card from 'react-bootstrap/Card';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import '../BoydPages/Boyd.css';



function  Boydfamilytree(props){
return(
<section className="boydFamilyMemberBox">

<div>{props.boydfamilymember.name} </div>
  <div>{props.boydfamilymember.dateofBirth}</div>

<div>



<img src ={props.boyd.profilephoto} alt="profilephoto" 
     
    width="150px"
     height="150px"
     
     />
 



</div>
</section>



)


}

export default Boydfamilytree

