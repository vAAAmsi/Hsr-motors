import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Avthar from '../../assets/Avthar.jpg'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import db from '../../firebase/firebase';
import { collection, getDocs,where,query,updateDoc,doc,deleteDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from 'react-router-dom';
import Nav from '../navbar/nav';
import './Stage3.css';
import TextField from '@mui/material/TextField';


const Stage3=(props)=>{
    const location=useLocation();
    const {name,stage,roleName}=location.state;
    const [data,setData]=useState([]);
    const [filtername,setFiltername] = useState('')

    useEffect(()=>{
        fetchData();
    },[])
 const fetchData=async()=>{
    
    const querySnapshot = await getDocs(collection(db, "purchased_items"));
    setData([]);
    querySnapshot.forEach((doc) => {
      setData(data=>[...data,{...doc.data(),id:doc.id}]);

    });
  }
  const Further=async(c)=>{
        const {id}=c;
         const docRef = doc(db, "data", id);
         await updateDoc(docRef, {
            stage: 1
          });
          fetchData(); 
  } 
  const handleDelete=async(c)=>{
       const {id}=c;
       await deleteDoc(doc(db, "data", id));
       fetchData();
  }      
    
    return(
        <div>
           <div className='newNav' > <Nav name={name}  /></div>
             
           <div className='Wsearch'>
                <div className='Wsearch1'>
                     <TextField style={{width:'60%'}} label='Search' onChange={(e) => {
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
                    <div  className='stage3-card1'>
                     <div  >
                        <div className='icon'>
                            <img className='stage3-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bx07Y1nnGrXLYfNHt6aVRBRbbwPajUr58w&usqp=CAU"></img>
                        
                        </div>
                        <div className='stage3-Inner' >
                        <div className='stage3-inner' >
                        <div className='name'>CAR NAME:<div className='name1'>{d.carName}</div></div>
                        <div className='cont'>CAR MODEL:<div className='cont1'>{d.carModel}</div></div>
                        <div className='Mail1'>Sale Assistant name:<div className='mail1'>{d.saleAssisstentName}</div></div>
                      
                        </div>
                        <div className='stage3-inner'>
                        <div className='name'>CLIENT NAME:<div className='name1'>{d.name}</div></div>
                        <div className='cont'>CONTACT NO:<div className='cont1'>{d.contact}</div></div>
                        <div className='Mail1'>MAIL:<div className='mail1'>{d.mail}</div></div>
                      
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

export default Stage3;