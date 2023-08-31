import Card from 'react-bootstrap/Card';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import '../BoydPages/Boyd.css';
import '../BoydPages/BoydPage.css';



function Boyd(props) {


   




    
          const[boydfamilymember,setboydfamilymember] =useState([]);
           useEffect(() => {
                axios
                  .get("http://localhost:8080/findallBoyds")
                  .then((response) => {
                    
                    setboydfamilymember(response.data);
                  })
                  .catch((e) => {
                    console.log(e);
      
                  });
           }, []);
      
      const renderBoyds= () => {
           return boydfamilymember.map((boydfamilymember) => {
                
           return (
                <section className="boydFamilyMemberBox">
      
      <div>{boydfamilymember.name} </div>
        <div>{boydfamilymember.dateofBirth}</div>
      
      <div>
      
       <a href={`Boyd/Boydpages/${boydfamilymember.id}`}>
      
       <img src ={boydfamilymember.profilephoto} alt="profilephoto" 

           width="150px"
            height="150px"
           
           />
        </a>
      
      
      
      </div>
      </section>
                );
           });
      };
      
      
      return(
       <section > 
      
     

<h1 className='Title'>The Boyd Family an Early American Family established in the early 1700s </h1>

<div className='photos'>


<img src="./photos/BoydFamily.jpeg"  className="Boyd" alt="Boydfamily"
      width="1850"
      height="500" />

</div>
<h2 className='Title'>Boyd Family Lineage </h2>
<div className='Boydlist'>{renderBoyds()} </div>

<img src ={boydfamilymember.profilephoto} alt="profilephoto" 
     
    width="150px"
     height="150px"
     
     />

<div className='photos'>

<h2 className='Title'>The Boyd Family Castle </h2>
<img src="./photos/BoydAncesteralHome.jpg"  className="Boyd" alt="Boydfamily"
      width="1850"
      height="750" />




     
</div>









<div>

<Card style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}>

</Card>

<Card.Title className='cardtitle'>
     
    Boyd Story
     
     </Card.Title> 

<Card.Body>
    


<Card.Text>
The Boyd Family orginates from Kilmarnock Scotland and William Boyd  landed in Iredell county North Carolina in the early 1700s. The Family eventually crossed the Applachian Mountains and eventually came to Pine bluff Arkansas after moving throughout the midwest.  My Grandfathers side of the Family Moved from Pine Bluff Arkansas  to Peach Orchard Missouri and eventually made their way to Rombauer, Missouri.  
</Card.Text>


</Card.Body>


</Card>


</div>

<div>

<Card style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}>

</Card>

<Card.Title className='cardtitle'>
     
    Interesting Family Facts
     
     </Card.Title> 

<Card.Body>
    


<Card.Text>
 {boydfamilymember.Interestingfacts}
</Card.Text>


</Card.Body>


</Card>



</div>


</section>
)
}


export default Boyd