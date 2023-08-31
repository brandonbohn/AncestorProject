import Card from 'react-bootstrap/Card';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';

import { useParams } from 'react-router';
function RowbottomPages(props){




  const params = useParams()
  const[rowbottom,setRowbottom] =useState({});   

useEffect(() => {
     axios
       .get(`http://localhost:8080/findRowbottomById/${params.id}`)
       .then((response) => {
         
         setRowbottom(response.data);
       })
       .catch((e) => {
         console.log(e);

       });
}, []);









return(


  <section>  

  <div>
    {rowbottom.name}
  </div>
<div className='photos'>


 <img src=".{bohnfamilymember.spousephoto}"  className="spouse" alt="spouse"
 width="250"
 height="250" />


 <h1> Kids</h1>
 <img src=".{bohnfamilymember.kidphoto}"  className="kidphoto1" alt="Kid1"
 width="250"
 height="250" />

<img src=".{bohnfamilymember.kidphot01}"  className="Kidphoto2" alt="kid2"
 width="250"
 height="250" />

<img src=".{bohnfamilymember.kidphoto2}"  className="kidphoto2" alt="kid2"
 width="250"
 height="250" />

<img src=".{bohnfamilymember.kidphoto3}"  className="kiphoto3" alt="kid3"
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
{rowbottom.dateofBirth}
{rowbottom.deathDate}
{rowbottom.birthCity}
{rowbottom.education}
{rowbottom.occupation}
{rowbottom.property}
{rowbottom.education}
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
{rowbottom.pastimes}


</Card.Text>


</Card.Body>


</Card>


<div>

<h1>{rowbottom.name}</h1>
<div className='profilephoto'>

<img src=".{bohnfamilymember.profilephoto}"  className="profilephoto" alt="bohnprofile"
 width="500"
 height="500" />
<div>




</div>
<h1>{rowbottom.graveLocation}</h1>
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
{rowbottom.story}
</Card.Text>
</Card.Body>
</Card>

</div>

<div>

<h1>Family</h1>


<h1>Spouse</h1>

 <h5>{rowbottom.spouse}</h5>
 <img src=".{bohnfamilymember.spousephoto}"  className="spouse" alt="spouse"
 width="250"
 height="250" />




 <h1>The Kids</h1>
 <img src=".{bohnfamilymember.kidphoto}"  className="child1" alt="kid1"
 width="250"
 height="250" />

<img src=".{bohnfamilymember.kidphot01}"  className="child2" alt="kid2"
 width="250"
 height="250" />

<img src=".{bohnfamilymember.kidphoto2}"  className="child3" alt="kid3"
 width="250"
 height="250" />

<img src=".{bohnfamilymember.kidphoto3}"  className="child4" alt="kid4"
 width="250"
 height="250" />
<img src=".{bohnfamilymember.kidphoto4}"  className="child5" alt="kid5"
 width="250"
 height="250" />

<img src=".{bohnfamilymember.kidphoto5}"  className="child6" alt="kid6"
 width="250"
 height="250" />

<img src=".{bohnfamilymember.kidphoto6}"  className="kidphoto6" alt="kid7"
 width="250"
 height="250" />

<img src=".{bohnfamilymember.kidphoto7}"  className="kidphoto7" alt="kid8"
 width="250"
 height="250" />

<img src=".{bohnfamilymember.kidphoto8}"  className="kidphoto8" alt="kid8"
 width="250"
 height="250" />





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








export default RowbottomPages