
import Card from 'react-bootstrap/Card';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import '../GlendeningPages/Glendening.css';




function Glendening(props) {






    
          const[glendeningfamilymember,setglendeningfamilymember] =useState([]);
           useEffect(() => {
                axios
                  .get("http://localhost:8080/findallGlendenings")
                  .then((response) => {
                    
                    setglendeningfamilymember(response.data);
                  })
                  .catch((e) => {
                    console.log(e);
      
                  });
           }, []);
      
      const renderGlendenings = () => {
           return glendeningfamilymember.map((glendeningfamilymember) => {



           return (
                    <section className="boydFamilyMemberBox">
                <div>{glendeningfamilymember.name} </div>
        <div>{glendeningfamilymember.dateofBirth}</div>
      
      <div>
      
       <a href={`Glendeningpages/${glendeningfamilymember.id}`}>
      
       <img src ={glendeningfamilymember.profilephoto} alt="profilephoto" 

           width="150px"
            height="150px"
           
           />
        </a>
      
      
      
      </div>
      </section>
                );
           });
      };
      
  
    return (


<section className='background'>

      <div>

<div>
<h1 className='Title'> Glendening Family established in America 1825 </h1>
<div>




<img src="./photos\grandma and family glendenings.jpg"  className="glendening" alt="younggrandma"
      width="1500"
      height="500" />
 

 </div>

 <div>


<h2 className='Title'>Family Lineage </h2>

 </div>
<div className='Glendeninglist'>

{renderGlendenings()} 

</div>

<div>



</div>

<div>   


    

</div>

    </div>
       
    <div>{glendeningfamilymember.name} </div>
  <div>{glendeningfamilymember.dateofBirth}</div>


 

<img src ={glendeningfamilymember.profilephoto} alt="profilephoto" 
     
    width="150px"
     height="150px"
     
     />
 


    

    
</div>


<div>

<Card style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}>

</Card>

<Card.Title className='cardtitle'>
     
    Glendening Story
     
     </Card.Title> 

<Card.Body>
    


<Card.Text>
The Glendening Family comes from Scotland possibly from Castle Douglas as members of Douglas clan close to Dumfries, Scotland and George Sr moved to Cumberland county England sometime in the late 1700s close to the village of Croglin on a farm.  James, George and Mary come over to america in 1825 and left liverpool England landed in Baltimore Maryland and went west to clark county Ohio.  After marying in Clark County  Ohio in 1837 James Glendening  settles in hartford township adams County Indiana.   His son Thomas came to  Clinton, Vanburen County arkansas sometime in the late 1800s.  His son John Henry Glendening briefly moved to indiana and then moved his family to Brosley, Missouri Butler County. 
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
 James Glendening becomes a naturalized citizen in J court on April the 27th 1847

 The Glendening were farmers for over 100 Years
</Card.Text>


</Card.Body>


</Card>



</div>

</section>
)
}



     
 
    
        
export default Glendening