import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Create_Insert() {

  const navigate = useNavigate();

   const [info , setInfo] = useState({
     name : '',
     age : '',
     email : ''
   })

   const HandleChange = (e) =>{
          setInfo({...info , [e.target.name] : e.target.value})
   }

   
   const HandleSubmit = (e)=>{
            e.preventDefault();
            axios.post("https://643ce2d7f0ec48ce904bf9a3.mockapi.io/user/crud" ,info)
            .then(y=>
            {
                console.log(y.data)
                navigate('/')
            
            }).catch((err)=>{
               console.error(err);
            })
   }

  return (
    <div>
       <div className='row m-3'>
            <div className='col-md-4'>
               <div className='mb-2'>
                 <Link to='/'>
                    <button className='btn btn-outline-danger'>
                       Display(Read) Data</button>
                 </Link>
               </div>
              <div className='bg-secondary p-4 text-center'>
                     <h2> Insert Data</h2>
              </div>
              <form onSubmit={HandleSubmit}>
                  <div className='form-group'>
                        <label>Enter Name:</label>
                        <input type='text' name='name' value={info.name} 
                        placeholder='Enter Name' onChange={HandleChange}
                         className='form-control'
                        />
                  </div>
                  <div className='form-group'>
                        <label>Enter Age:</label>
                        <input type='number' name='age' value={info.age} 
                        placeholder='Enter Age' onChange={HandleChange}
                         className='form-control'
                        />
                  </div>
                  <div className='form-group'>
                        <label>Enter Email:</label>
                        <input type='email' name='email' value={info.email}
                        placeholder='Enter Email' onChange={HandleChange}
                         className='form-control'
                        />
                  </div>
                    <br/>
                  <div className='d-grid'>
                  <input type='submit' value='Submit' 
                  className='btn btn-secondary'/>
                  </div>
              </form>
              
           </div>
       </div>
    </div>
  )
}

export default Create_Insert