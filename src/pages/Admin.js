import Card from 'react-bootstrap/Card';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"


function Admin(props) {
// const {savebohn, setSavebohn = useState([]);
// const navigator = useNavigate();


// const changeHandler = (event) => {
//   const name = event.target.name;
//   const value = event.target.value;
//   const tempUser = { ...props.user };
//   tempUser[name] = value;
//   props.setBohnfamilymember(tempUser);





  
return(

<section className='background'>


<div>

<h1>Welcome admin</h1>

<h1>Add Ancestors</h1>


</div>


<div className='d-flex flex-row'>


<Card className='card'style={{ width:'35rem' }}>
     <Card style={{height:'5rem'}}>

      </Card>
     <Card.Body>
        <Card.Title className='cardtitle'>
          Add Bohn
          </Card.Title>  
    </Card.Body>

     <ListGroup >
     <h4>NAME</h4>
       <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item> 
      <h4>LOCATION</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name'></input></ListGroup.Item>
      <h4>DEATHDATE</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>DATEOFBIRTH</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>BIRTHCITY</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>SPOUSE</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>PROPERTY</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>PASTTITMES</h4>
      <h4>EDUCATION</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>MARTIAL STATUS</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>INTERESTINGFACTS</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>GRAVELOCATION</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>STORY</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      </ListGroup>
     <Card.Body>
        <Card.Text>
        <Button variant="primary" >SaveAncestor</Button>
          <Button variant="primary" >UpdateAncestor</Button>
          <Button variant="primary" >DeleteAncestor</Button>
        </Card.Text>
        
      </Card.Body>


   </Card>




<Card style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}>

      </Card>
     <Card.Body>
        <Card.Title className='cardtitle'>
          
          Add Boyd
          
          </Card.Title>  
    </Card.Body>

     <ListGroup >
     <h4>NAME</h4>
       <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item> 
      <h4>LOCATION</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name'></input></ListGroup.Item>
      <h4>DEATHDATE</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>DATEOFBIRTH</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>BIRTHCITY</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>SPOUSE</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>PROPERTY</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>PASTTITMES</h4>
      <h4>EDUCATION</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>MARTIAL STATUS</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>INTERESTINGFACTS</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>GRAVELOCATION</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>STORY</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      </ListGroup>
     <Card.Body>
        <Card.Text>
        <Button variant="primary" >SaveAncestor</Button>
          <Button variant="primary" >UpdateAncestor</Button>
          <Button variant="primary" >DeleteAncestor</Button>
        </Card.Text>
        
      </Card.Body>


   </Card>


<Card style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}>

      </Card>
     <Card.Body>
        <Card.Title className='cardtitle'>
          
          Add Glendening
          
          </Card.Title>  
    </Card.Body>

     <ListGroup >
     <h4>NAME</h4>
       <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item> 
      <h4>LOCATION</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name'></input></ListGroup.Item>
      <h4>DEATHDATE</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>DATEOFBIRTH</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>BIRTHCITY</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>SPOUSE</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>PROPERTY</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>PASTTITMES</h4>
      <h4>EDUCATION</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>MARTIAL STATUS</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>INTERESTINGFACTS</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>GRAVELOCATION</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>STORY</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      </ListGroup>
     <Card.Body>
        <Card.Text>
        <Button variant="primary" >SaveAncestor</Button>
          <Button variant="primary" >UpdateAncestor</Button>
          <Button variant="primary" >DeleteAncestor</Button>
        </Card.Text>
        
      </Card.Body>


   </Card>


 

<Card style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}>

      </Card>
     <Card.Body>
        <Card.Title className='cardtitle'>
          
          Add Rowbottom
          
          </Card.Title>  
    </Card.Body>

     <ListGroup >
     <h4>NAME</h4>
       <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item> 
      <h4>LOCATION</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name'></input></ListGroup.Item>
      <h4>DEATHDATE</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>DATEOFBIRTH</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>BIRTHCITY</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>SPOUSE</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>PROPERTY</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>PASTTITMES</h4>
      <h4>EDUCATION</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>MARTIAL STATUS</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>INTERESTINGFACTS</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>GRAVELOCATION</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      <h4>STORY</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' ></input></ListGroup.Item>
      </ListGroup>
     <Card.Body>
        <Card.Text>
        <Button variant="primary" >SaveAncestor</Button>
          <Button variant="primary" >UpdateAncestor</Button>
          <Button variant="primary" >DeleteAncestor</Button>
        </Card.Text>
        
      </Card.Body>


   </Card>

</div>





<div className='bohnFamilyMemberBox height:100px width:25px'>
    <h4>artifacts</h4>
    
    <form action="/action_page.php">
      <input type="file" id="myFile" name="filename"/>
      <input type="submit"/>
    </form>
    
    
  

<div>

<Card style={{ width:'35rem'}}>
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
      <Card.Body>
      <Card.Text>
          <Button variant="primary" >SaveAncestor</Button>
          <Button variant="primary" >UpdateAncestor</Button>
          <Button variant="primary" >DeleteAncestor</Button>
<div className='photos'>


<form action="/action_page.php"/>
  <input type="file" id="myFile" name="filename"/>
  <input type="submit"/>
<form/>



    </div>
        </Card.Text>
        
      </Card.Body>
      </Card>


</div>




</div>





      
  


</section>

    
  


)


}


export default Admin