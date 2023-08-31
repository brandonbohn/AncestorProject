import Card from 'react-bootstrap/Card';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import '../GlendeningPages/Glendeningpages.css';
import '../GlendeningPages/Glendening';
import '../BoydPages/Boydpages.css';
import { useParams } from 'react-router';
function GlendeningPages(){

  const params = useParams()
  const[glendening,setGlendening] =useState({});   

useEffect(() => {
     axios
       .get(`http://localhost:8080/findGlendeningById/${params.id}`)
       .then((response) => {
         
         setGlendening(response.data);
       })
       .catch((e) => {
         console.log(e);

       });
}, []);




return(




<section>  

  <div>
    {glendening.name}
  </div>
<div className='photos'>


 <img src=".{glendening.spousephoto}"  className="spouse" alt="spouse"
 width="250"
 height="250" />


 <h1> Kids</h1>
 <img src=".{glendening.kidphoto}"  className="kidphoto1" alt="Kid1"
 width="250"
 height="250" />

<img src=".{glendening.kidphot01}"  className="Kidphoto2" alt="kid2"
 width="250"
 height="250" />

<img src=".{glendening.kidphoto2}"  className="kidphoto2" alt="kid2"
 width="250"
 height="250" />

<img src=".{glendening.kidphoto3}"  className="kiphoto3" alt="kid3"
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
{glendening.dateofBirth}
{glendening.deathDate}
{glendening.birthCity}
{glendening.education}
{glendening.occupation}
{glendening.property}
{glendening.education}
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
{glendening.pastimes}


</Card.Text>


</Card.Body>


</Card>


<div>

<h1>{glendening.name}</h1>
<div className='profilephoto'>

<img src=".{bohnfamilymember.profilephoto}"  className="profilephoto" alt="bohnprofile"
 width="500"
 height="500" />
<div>




</div>
<h1>{glendening.graveLocation}</h1>
<img src=".{bohnfamilymember.gravephoto}"  className="profilephoto" alt="bohnprofile"
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
{glendening.story}
</Card.Text>
</Card.Body>
</Card>

</div>

<div>

<h1>Family</h1>


<h1>Spouse</h1>

 <h5>{glendening.spouse}</h5>
 <img src=".{glendening.spousephoto}"  className="spouse" alt="spouse"
 width="250"
 height="250" />




 <h1>The Kids</h1>
 <img src=".{glendening.kidphoto}"  className="child1" alt="kid1"
 width="250"
 height="250" />

<img src=".{glendening.kidphot01}"  className="child2" alt="kid2"
 width="250"
 height="250" />

<img src=".{glendening.kidphoto2}"  className="child3" alt="kid3"
 width="250"
 height="250" />

<img src=".{glendening.kidphoto3}"  className="child4" alt="kid4"
 width="250"
 height="250" />
<img src=".{glendening.kidphoto4}"  className="child5" alt="kid5"
 width="250"
 height="250" />

<img src=".{glendening.kidphoto5}"  className="child6" alt="kid6"
 width="250"
 height="250" />

<img src=".{glendening.kidphoto6}"  className="kidphoto6" alt="kid7"
 width="250"
 height="250" />

<img src=".{glendening.kidphoto7}"  className="kidphoto7" alt="kid8"
 width="250"
 height="250" />

<img src=".{glendening.kidphoto8}"  className="kidphoto8" alt="kid8"
 width="250"
 height="250" />

<h1>The Grandkids</h1>


<div>
<img src=".{glendening.kidphoto4}"  className="kidphoto9" alt="kid9"
 width="250"
 height="250" />


</div>





</div>





</section>
)
}
export default GlendeningPages