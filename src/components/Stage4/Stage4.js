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
import MailIcon from '@mui/icons-material/Mail';
import { useLocation } from 'react-router-dom';
import Nav from '../navbar/nav';
import './Stage4.css';
import TextField from '@mui/material/TextField';

const Stage4=(props)=>{
    const location=useLocation();
    const {name,stage,roleName}=location.state;
    const [data,setData]=useState([]);
    const [filtername,setFiltername] = useState('')

    useEffect(()=>{
        fetchData();
        
    },[])
 const fetchData=async()=>{
    const q = query(collection(db, "data"), where("stage", "==", 2));
    const querySnapshot = await getDocs(q);
        setData([]);
        querySnapshot.forEach((doc) => {
            setData(data=>[...data,{...doc.data(),id:doc.id}]);
        });
  }
      
  

    return(
        <div>
           <div className='newNav' > <Nav name={name}  /></div>
             
           <div className='Wsearch'>
                <div className='Wsearch1'>
                <TextField style={{width:'80%'}} label='Search' onChange={(e) => {
                        setFiltername(e.target.value)
                     }} ></TextField>
                     
                </div>
            </div>

            
            <div className='Page'>
                <div className='role-name' >Role : {roleName}</div>
                  <div className='page'>
                      {
                        data
                        .filter((item)=>{
                            if(item.name.length !==undefined){
                             return(
                                 
                                 item.name.toLowerCase().includes(filtername.toLowerCase())
                             )
                            }
                         })
                        .map((d,index)=>{
                            return(
                                <div key={index}>
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
                        <Tooltip title="Call to user and tell about offers">
                            <div className='Icon1'>
                            <a href={`tel:+91 ${d.contact}`} style={{color:'white',marginTop:5}}><CallOutlinedIcon/></a>
                            </div>
                            </Tooltip>
                            <Tooltip title="Mail to user and tell about offers">
                            <div className='Icon2'>
                            <a href={`mailto:${d.mail}`} style={{color:'white',marginTop:5}}><MailIcon/></a>
                                        
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

export default Stage4;