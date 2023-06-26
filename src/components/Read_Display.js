import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export default function Read_Display() {
     /* jo data humne creat_insert mai ek api mai store (post) kiya tha
     wo data ye component mai humne table format mai data display
      karvaya hai */

      const [apiData , setApiData] = useState([]);

     const getApiData = async()=>
     {
          try
          {
               const y = await axios.get("https://643ce2d7f0ec48ce904bf9a3.mockapi.io/user/crud")
               if(y.status == 200)
               {
                    setApiData(y.data);
                    console.log(y.data)
               }
     
          }
          catch(err)
          {
               console.error(err);
          }
     
     }

     // for delete the data from the table
    
     const handleDelete = async(id)=>
     {
         const t = await axios.delete(`https://643ce2d7f0ec48ce904bf9a3.mockapi.io/user/crud/${id}`)     
          
               getApiData(t.data);
     }    
     
     useEffect(()=>
     {
          getApiData();
     },[])  

    
  return (
    <div>
          <div className='row m-2'>
              <div className='col-md-12'>
                    <Link to='/Create_Insert'>
                       <button className='btn btn-primary mb-2'>
                            Create(Insert) New Dta</button>
                    </Link>
                     
                    <table className='table table-bordered table-striped 
                     table-hover table-dark'>
                          <thead className='text-center'>
                               <tr>
                                   <th>ID</th>
                                   <th>Name</th>
                                   <th>Age</th>
                                   <th>Email</th>
                                   <th>Edit</th>
                                   <th>Delete</th>
                               </tr>
                          </thead>

                          <tbody>
                              {
                                 apiData.map((value , index)=>{
                                     return(<>
                                        <tr key={index} className='text-center'>
                                             <td>{value.id}</td>
                                             <td>{value.name}</td>
                                             <td>{value.age}</td>
                                             <td>{value.email}</td>
                                             
                                             <td><button className='btn btn-success' 
                                             >Edit</button></td>
                                             
                                             {/* <td><button className='btn btn-danger' onClick={ ()=> handleDelete(value.id)}>Delete</button></td> */}
                                             
                                             
                                             <td><button className='btn btn-danger'
                                              onClick={ () => { if(window.confirm('Aru You Sure To Delete This Data ??') ) 
                                                                       {
                                                                           handleDelete(value.id)
                                                                       }  
                                                                     }  
                                                      } > Delete</button>
                                             </td>
                                        </tr>
                                     </>)
                                 })
                              }
                          </tbody>
                     </table>
              </div>
          </div>
    </div>
  )
}
