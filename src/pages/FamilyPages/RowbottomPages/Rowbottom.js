import Card from 'react-bootstrap/Card';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import '../RowbottomPages/RowbottomPages.css';

function Rowbottom(props) {





    
     const[rowbottomfamilymember,setrowbottomfamilymember] =useState([]);
     useEffect(() => {
          axios
            .get("http://localhost:8080/findallRowbottoms")
            .then((response) => {
              
              setrowbottomfamilymember(response.data);
            })
            .catch((e) => {
              console.log(e);

            });
     }, []);

const renderRowbottoms = () => {
     return rowbottomfamilymember.map((rowbottomfamilymember) => {



     return (
              <section className="rowbottomFamilyMemberBox">
          <div>{rowbottomfamilymember.name} </div>
  <div>{rowbottomfamilymember.dateofBirth}</div>

<div>

 <a href={`Rowbottompages/${rowbottomfamilymember.id}`}>

 <img src ={rowbottomfamilymember.profilephoto} alt="profilephoto" 

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

<h1 className='Title'>The Rowbottom Family Established at the beginning of America</h1>


<div className='photos'>


<img src="./photos/Rowbottom.jpg"  className="Rowbottom" alt="Rowbottom"
      width="750"
      height="750" />
 






<div className='Title'>{rowbottomfamilymember.name} </div>

<div>

<div>{rowbottomfamilymember.dateofBirth}</div>




<img src ={rowbottomfamilymember.profilephoto} alt="profilephoto" 
     
    width="150px"
     height="150px"
     
     />



</div>
 

</div>
<h2 className='Title'> Family Lineage </h2>
<div className='rowbottomlist'>   

{renderRowbottoms()} 
    


    
</div>


<div>

<Card style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}>

</Card>

<Card.Title className='cardtitle'> 
     
    Rowbottom Story
     
     </Card.Title> 

<Card.Body>
    


<Card.Text>
 The Rowbottom Family orginates from Manchester england and has many famous family members including Daniel Boone and english Nobles. 
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
 William Schalert owned a bar in soulard andf was assaulted died of injuries. 
</Card.Text>


</Card.Body>


</Card>



</div>
<Card style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}>

</Card>

<Card.Title className='cardtitle'>
     
    Interesting Family Members 
     
     </Card.Title> 

<Card.Body>
    


<Card.Text>
William Strode Was one of five people that Started the english civil war rebelling against King Charles 

Daniel Boone was married To a Bryant and helped settle this country

Sir Francis Bryant was a favorite of Henry the 8th



</Card.Text>


</Card.Body>


</Card>


</section>
)
}


export default Rowbottom