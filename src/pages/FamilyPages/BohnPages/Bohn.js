import Card from 'react-bootstrap/Card';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import Bohnfamilymembers from './Bohnfamilytree';
import '../BohnPages/Bohnfamilymembers.css';
import '..//BohnPages/Bohn.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
function Bohn(props) {




    
    const[bohnfamilymember,setbohnfamilymember] =useState([]);
     useEffect(() => {
          axios
            .get("http://localhost:8080/findallBohns")
            .then((response) => {
              
              setbohnfamilymember(response.data);
            })
            .catch((e) => {
              console.log(e);

            });
     }, []);

const renderBohns = () => {
     return bohnfamilymember.map((bohnfamilymember) => {
          
     return (
          <section className="bohnFamilyMemberBox">

<div>{bohnfamilymember.name} </div>
  <div>{bohnfamilymember.dateofBirth}</div>

<div>

<a href={`Bohn/Bohnpages/${bohnfamilymember.id}`}> 

<img src ={bohnfamilymember.profilephoto} alt="profilephoto" 
     
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
 <section className='background' > 



<div>

<h1 className='Title'>The Bohn Family Established in America in 1850</h1>
</div>


<div className='photos'>


<img src="./photos/Bohnfamily.jpg"  className="BohnFamily" alt="Bohnfamily"
     
     width="1850px"
     height="650px"
     />

</div>

    
<h2 className='Title'>Bohn Family Lineage </h2>
<div className='Bohnslist'>

{renderBohns()} 



<div>

<h1 className='Title'>Bohn Ancestral House</h1>

<img src="./photos/bohnhousewhalen.jpg"  className="BohnFamily" alt="Bohnfamily"
     
     width="1850px"
     height="650px"
     />

</div>
<Card style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}/>
<Card className='test'></Card>
<Card.Title className='cardtitle'>  
    Bohn Story 
     </Card.Title> 
<Card.Body>
<Card.Text>
 The Bohn Family orginates from Hessen Germany and comes to america through two brothers who are cooking on a ship bound for new orleans they decided when the ship lands to get off the ship and settle in new orleans.  After a Few Years they decide to split up and go up the Mississippi River one brother lands in Lousiville Kentucky and the other Brother Lands in St louis Missouri Where the St louis Bohn's have resided to the present day. 
</Card.Text>
</Card.Body>
</Card>
<Card  className="test h100" style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}></Card>
<Card.Title className='cardtitle'>
     
    Interesting Family Facts 
     </Card.Title> 
<Card.Body>
<Card.Text>
 Marie Bohn moved to Brazil 
 George Henry Bohn stepped on a Landmine and had shrattenel that came from his hair until he died. 
The Bohn Family Farm that John Adam Bohn settled on is stilled own by the cousins of the George Bohn Jr. 
</Card.Text>
</Card.Body>
</Card>
<Card style={{ width:'35rem'}}>
 <Card style={{height:'5rem'}}>
</Card>
<Card.Title className='cardtitle'>   
    Interesting Family Members    
     </Card.Title> 
<Card.Body className='card2'>
<Card.Text>
Thomas Bohn was on the Battan Death March
John Adam Bohn was a Constable and politician 
</Card.Text>
</Card.Body>
</Card>
</div>
<div/>

<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



<div className='d-flex flex row'>

<Card className='postion'style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}>


    </Card>
     <Card.Body>
        <Card.Title className='card'>
          Add Family Photos
          </Card.Title>  
    </Card.Body>

     <ListGroup >
     <h4>NAME</h4>
       <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item> 
      <h4>ID</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>DEATHDATE</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>DATEOFBIRTH</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>BIRTHCITY</h4>
      </ListGroup>
      <Card.Body/>
      <Card.Text/>
          
          
          
         
          <div className='photos'>


<form action="/action_page.php"/>
  <input type="file" id="myFile" name="filename"/>
  <Button variant="primary" >Submitphoto</Button>
<form/>



</div>
          </Card>

          <Card style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}>


    </Card>
     <Card.Body>
        <Card.Title className='card'>
          Add Family artifacts
          </Card.Title>  
    </Card.Body>

     <ListGroup >
     <h4>NAME</h4>
       <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item> 
      <h4>ID</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>DEATHDATE</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>DATEOFBIRTH</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>BIRTHCITY</h4>
      </ListGroup>
      <Card.Body/>
      <Card.Text/>
          
       
          
         
          <div className='photos'>


<form action="/action_page.php"/>
  <input type="file" id="myFile" name="filename"/>
  <Button variant="primary" >Submitphoto</Button>
<form/>



</div>
          </Card>




<Card style={{ width:'35rem'}}/>
     <Card style={{height:'5rem'}}/>
<Card className='test'>




 <Card.Body>

        <Card.Title className='card'>
          Family Artifact Vault
          </Card.Title>  







        </Card.Body>
        





</Card>
</div>









        
       
        
        
        


<div>









</div>





</section>
)
}
export default Bohn