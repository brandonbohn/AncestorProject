
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Registration(props) {


  const navigator = useNavigate()

    const RegistrationChangeHandler = (event) => {
      const name = event.target.name;
      let value;
      if (event.target.type === "checkbox") {
          value = event.target.checked;
      } else {
          value = event.target.value;
      }
      const tempUser = { ...props.user };
      tempUser[name] = value;
      props.setUser(tempUser);
  };

  const RegistrationsubmitHandler = () => {
    axios.post("http://localhost:8080/signUp", props.user)
      .then((response) => {
        localStorage.setItem("userId", response.data.id)
        props.setUser(response.data)
        navigator("/")
      })
      .catch((e) => {
        console.log(e)
      })
    }

  return (

<section className='background'>

<div className='card'>

<Card style={{ width:'35rem'}}>
     <Card style={{height:'5rem'}}>

      </Card>
     <Card.Body>
        <Card.Title className='cardtitle'>
          
          SIGNUP
          
          </Card.Title>  
    </Card.Body>
    <Card.Text>
      Welcome To Familty Tree Vault 
    </Card.Text>
     <ListGroup >
     <h4>NAME</h4>
       <ListGroup.Item> <input className="form-input" value={props.user.name}  name='name' type='name' onChange={(RegistrationChangeHandler)}></input></ListGroup.Item> 
      <h4>EMAIL</h4>
      <ListGroup.Item> <input className="form-input"  value={props.user.email} name='email' type='email'onChange={(RegistrationChangeHandler)}></input></ListGroup.Item>
      <h4>MAIDEN NAME</h4>
      <ListGroup.Item><input className="form-input" value={props.user.maidenname} name='maidenname' type='maidenname'onChange={(RegistrationChangeHandler)}></input></ListGroup.Item>
      <h4>ADDRESS</h4>
      <ListGroup.Item><input className="form-input" value={props.user.address} name='address' type='address'onChange={(RegistrationChangeHandler)}></input></ListGroup.Item>
      <h4>PHONE NUMBER</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.phonenumber} name='phonenumber' type='phonenumber'onChange={(RegistrationChangeHandler)}></input></ListGroup.Item>
      <h4>USERNAME</h4>
      <ListGroup.Item> <input className="form-input" value={props.user.Username} name='Username' type='Username'onChange={(RegistrationChangeHandler)}></input></ListGroup.Item>
      <h4>PASSWORD</h4>
      <ListGroup.Item><input className="form-input"value={props.user.password}  name='password' type='password'onChange={(RegistrationChangeHandler)}></input></ListGroup.Item>
      <ListGroup.Item><input type="checkbox" name="isAdmin" checked={props.user.isAdmin} onChange={RegistrationChangeHandler}/></ListGroup.Item>
      </ListGroup>
     <Card.Body>
       <Card.Text>
    Already Registered <Card.Link href="Login">Signin</Card.Link>

      </Card.Text>
        
        <Card.Text>
          <Button variant="primary" onClick={RegistrationsubmitHandler}>Signup</Button>
        </Card.Text>
        
      </Card.Body>


   </Card>
</div>







</section>


   
   
  );
}

export default Registration;

