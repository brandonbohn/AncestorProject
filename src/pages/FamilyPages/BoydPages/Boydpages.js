
import Card from 'react-bootstrap/Card';
import axios from "axios";
import React, { useState, useEffect } from 'react';


import { useParams } from 'react-router';



function Boydpages() {
    

     const params = useParams()
  
     const[boyd,setBoyd] =useState({});   
   
   useEffect(() => {
        axios
          .get(`http://localhost:8080/findBoydById/${params.id}`)
          .then((response) => {
            console.log(response.data)
            setBoyd(response.data);
          })
          .catch((e) => {
            console.log(e);
   
          });
   }, []);
   
   
        
        
        
        return(
        



<section>
<div>

<h1>{boyd.name}</h1>

</div>



<img src ={boyd.profilephoto} alt="profilephoto" 

      width="300px"
      height="450px"
     />



<div>

<Card style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}>

</Card>

<Card.Title className='cardtitle'>
     
    His Story
     
     </Card.Title> 

<Card.Body>
    


<Card.Text>
  
</Card.Text>


</Card.Body>


</Card>


</div>

<div>

<Card style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}>

</Card>

<Card.Title className='cardtitle'>
     
    Vital Statistics 
     
     </Card.Title> 

<Card.Body>
    


<Card.Text>
  
</Card.Text>


</Card.Body>


</Card>
    
</div>

<div>
<Card style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}>

</Card>

<Card.Title className='cardtitle'>
     
    His Story
     
     </Card.Title> 

<Card.Body>
    


<Card.Text>
  
</Card.Text>


</Card.Body>


</Card>


</div>


<div>
<Card style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}>

</Card>

<Card.Title className='cardtitle'>
     
    His Story
     
     </Card.Title> 

<Card.Body>
    


<Card.Text>
  
</Card.Text>


</Card.Body>


</Card></div>
</section>






    

)

}

export default Boydpages


    