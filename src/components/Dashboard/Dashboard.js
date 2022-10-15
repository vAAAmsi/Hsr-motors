import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Avthar from '../../assets/Avthar.jpg'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import db from '../../firebase/firebase';
import { collection, getDocs,where,query,updateDoc,doc,deleteDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { async } from '@firebase/util';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from 'react-router-dom';
import Nav from '../../nav';
import './Dashboard.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Swal from 'sweetalert2'
const Dashboard=(props)=>{
    const location=useLocation();
    const {name,stage,roleName}=location.state;
    console.log(name,stage,roleName)
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])
 const fetchData=async()=>{
    const q = query(collection(db, "data"), where("stage", "==", 0));
    const querySnapshot = await getDocs(q);
        setData([]);
        querySnapshot.forEach((doc) => {
            setData(data=>[...data,{...doc.data(),id:doc.id}]);
            // console.log("id",doc.id)
        });
        // console.log("data is",data)
        // console.log("stage",q)
  }
  const Further=async(c)=>{
        const {id}=c;
         const docRef = doc(db, "data", id);
         await updateDoc(docRef, {
            stage: 1
          });
          Swal.fire({
            title: 'success',
            text: 'successfully transferred to sales assistent.',
            icon: 'success',
          })
          fetchData(); 
  } 
  const handleDelete=async(c)=>{
       const {id}=c;
       console.log("hello id is",id)
       await deleteDoc(doc(db, "data", id));
       Swal.fire({
        title: 'success',
        text: 'successfully deleted the user.',
        icon: 'success',
      })
       fetchData();

  }      
  

    return(
        <div>
           <div className='newNav' > <Nav name={name}  /></div>
             
           <div className='Wsearch'>
                <div className='Wsearch1'>
                     <TextField className='search-bar' 
                     InputProps={{
                        startAdornment:(
                            <div><SearchIcon/></div>
                        )
                     }}
                     label="Search" variant="outlined" />
                     <div>
                     <Button style={{backgroundColor:'black',color:' #FFFFFF',width:130,height:45}} >Search</Button>
                     </div>
                </div>
            </div>

            
            <div className='Page'>
                <div className='role-name' >Role : {roleName}</div>
                  <div className='page'>
                      {
                        data.map((d)=>{
                            return(
                                <div>
                    <div className='card1'>
                     <div>
                        <div className='icon'>
                            <img className='image' src={Avthar}></img>
                        
                        </div>
                        <div className='Inner'>
                        <div className='inner'>
                        <div className='name'>NAME:<div className='name1'>{d.name}</div></div>
                        <div className='cont'>CONTACT NO:<div className='cont1'>{d.contact}</div></div>
                        <div className='Mail1'>MAIL:<div className='mail1'>{d.mail}</div></div>
                        <div className='Icons'>
                            <Tooltip title="make a call to user" >
                            <div className='Icon1'>
                            <a href={`tel:+91 ${d.contact}`} style={{color:'white',marginTop:5}}><CallOutlinedIcon/></a>
                            </div>
                            </Tooltip>
                            <Tooltip title="Delete not intreseted user" >
                            <div className='Icon2'  onClick={()=>{
                                handleDelete(d)
                            }} >
                                <DeleteIcon/>
                            </div>
                            </Tooltip>
                            <Tooltip title="Transfer to Sales Assistant">
                            <div onClick={()=>{
                                           Further(d);
                            }} className='Icon2'>
                                        <ArrowCircleRightOutlinedIcon/>
                             </div>
                            </Tooltip>
                                
                            
                        </div>
                        </div>
                        </div>
                     </div>

                    </div>
                                    </div>
                            )
                        })
                      }
                    
                  
                  </div>

            </div>
        </div>
    )
}

export default Dashboard;