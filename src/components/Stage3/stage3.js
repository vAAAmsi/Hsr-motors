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
import './Stage3.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const Stage3=(props)=>{
    const location=useLocation();
    const {name,stage,roleName}=location.state;
    console.log(name,stage,roleName)
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])
 const fetchData=async()=>{
    // const q = query(collection(db, "purchased_items"), where("stage", "==", 0));
    const querySnapshot = await getDocs(collection(db, "purchased_items"));
    setData([]);
    querySnapshot.forEach((doc) => {
      setData(data=>[...data,{...doc.data(),id:doc.id}]);
    console.log("hellooo",doc.data())

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
                    <div className='stage3-card1'>
                     <div>
                        <div className='icon'>
                            <img className='stage3-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bx07Y1nnGrXLYfNHt6aVRBRbbwPajUr58w&usqp=CAU"></img>
                        
                        </div>
                        <div className='stage3-Inner'>
                        <div className='stage3-inner'>
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