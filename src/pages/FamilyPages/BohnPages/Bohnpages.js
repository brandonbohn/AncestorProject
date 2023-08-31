
import Card from 'react-bootstrap/Card';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import Bohnfamilymembers from './Bohnfamilytree';
import '../BohnPages/Bohnfamilymembers.css';
import { useParams } from 'react-router';
function Bohnpages(props){


  const params = useParams()
  
  const[bohn,setBohn] =useState({});   

useEffect(() => {
     axios
       .get(`http://localhost:8080/findBohnById/${params.id}`)
       .then((response) => {
         console.log(response.data)
         setBohn(response.data);
       })
       .catch((e) => {
         console.log(e);

       });
}, []);


return(

<section>  
 
  <div>
    {bohn.name}
  </div>
<div className='photos'>

<h5>{bohn.spouse}</h5>
 <img src={bohn.spousephoto}  className="spouse" alt="spouse"
 width="250"
 height="250" />

 <img src={bohn.kidphoto}  className="kidphoto1" alt="Kid1"
 width="250"
 height="250" />

<img src={bohn.kidphoto1}  className="Kidphoto2" alt="kid2"
 width="250"
 height="250" />

<img src={bohn.kidphoto2} className="kidphoto2" alt="kid2"
 width="250"
 height="250" />

<img src={bohn.kidphoto3}  className="kiphoto3" alt="kid3"
 width="250"
 height="250" />



</div>

<Card className='test' style={{ width:'25rem'}}>

<Card.Title className='cardtitle'>

Vital Statistics

</Card.Title>

<Card style={{height:'20rem'}}>

<Card className='test'/>


</Card>




<Card.Text>
{bohn.dateofBirth}
{bohn.deathDate}
{bohn.birthCity}
{bohn.education}
{bohn.occupation}
{bohn.property}
{bohn.education}
</Card.Text>









</Card>



<Card style={{ width:'25rem'}}>
<Card style={{height:'5rem'}}>

</Card>

<Card.Title className='cardtitle'>

Passions 

</Card.Title> 







<Card.Body className='card2'>



<Card.Text>
{bohn.pastimes}


</Card.Text>


</Card.Body>


</Card>


<div>

<h1>{bohn.name}</h1>
<div className='dadphoto'>

<img src={bohn.profilephoto} className="profilephoto" alt="bohnprofile"
 width="500"
 height="500" />
<div>




</div>
<h1>{bohn.graveLocation}</h1>
<img src={bohn.gravephoto}  className="profilephoto" alt="bohnprofile"
 width="250"
 height="250" />
</div>


<Card style={{ width:'75rem'}}>
<Card style={{height:'5rem'}}>

</Card>

<Card.Title className='cardtitle'>

Thier Story

</Card.Title> 

<Card.Body>
<Card.Text>
{bohn.story}
</Card.Text>
</Card.Body>
</Card>

</div>

<div>

<h1>Family</h1>


<h1>Spouse</h1>

 <h5>{bohn.spouse}</h5>
 <img src={bohn.spousephoto}  className="spouse" alt="spouse"
 width="250"
 height="250" />


 <h1>His Kids</h1>
 
<img src={bohn.spousephoto}  className="child" alt="kid"
 width="250"
 height="250" />


 <h1>The Kids</h1>
 <img src={bohn.kidphoto}  className="child1" alt="kid1"
 width="250"
 height="250" />

<img src={bohn.kidphot01} className="child2" alt="kid2"
 width="250"
 height="250" />

<img src={bohn.kidphoto2}  className="child3" alt="kid3"
 width="250"
 height="250" />

<img src={bohn.kidphoto3}  className="child4" alt="kid4"
 width="250"
 height="250" />
<img src={bohn.kidphoto4}  className="child5" alt="kid5"
 width="250"
 height="250" />

<img src={bohn.kidphoto5}  className="child6" alt="kid6"
 width="250"
 height="250" />

<img src={bohn.kidphoto6}  className="kidphoto6" alt="kid7"
 width="250"
 height="250" />

<img src={bohn.kidphoto7}  className="kidphoto7" alt="kid8"
 width="250"
 height="250" />

<img src={bohn.kidphoto8} className="kidphoto8" alt="kid8"
 width="250"
 height="250" />

<h1>The Grandkids</h1>


<div>
<img src={bohn.kidphoto4}  className="kidphoto9" alt="kid9"
 width="250"
 height="250" />


</div>


</div>

<div>




</div>

<div>




</div>




<div>

</div>





</section>
)
}
export default Bohnpages