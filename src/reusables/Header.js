import '../reusables/Header'
import { useNavigate, Link  } from 'react-router-dom';
import '../pages/css/header.css'



function Header(){
    return(

<section>
<section>



<div className='header-container' >


         <Link to="/">HOME</Link>
         <Link to="Aboutme">AboutMe</Link>
      

        
        

</div>


</section>




<section>


<div className='Admin'>
        <Link to="Admin">AdminPortal</Link>
        <Link to="Registration">Join/Signin</Link>
        
</div>


        

         
</section>
 
        
</section>


    )
}
export default Header