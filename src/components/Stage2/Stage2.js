import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Avthar from '../../assets/Avthar.jpg'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import db from '../../firebase/firebase';
import { collection, getDocs,where,query,updateDoc,doc,deleteDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { async } from '@firebase/util';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from 'react-router-dom';
import Nav from '../../nav';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import './Stage2.css'
import * as React from 'react';
const Stage2=()=>{
    const location=useLocation();
    const {name,stage,roleName}=location.state;
    console.log(name,stage,roleName)
    const [data,setData]=useState([]);
    const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    useEffect(()=>{
        fetchData();
    },[])
 const fetchData=async()=>{
    const q = query(collection(db, "data"), where("stage", "==", 1));
    const querySnapshot = await getDocs(q);
        setData([]);
        querySnapshot.forEach((doc) => {
            setData(data=>[...data,{...doc.data(),id:doc.id}]);
            // console.log("id",doc.id)
        });
        // console.log("data is",data)
        // console.log("stage",q)
  }
  
  const handleDelete=async(c)=>{
       const {id}=c;
       await deleteDoc(doc(db, "data", id));
       fetchData();
  }      
  

    return(
        <div>
            <Nav name={name}  />            
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
                            <div className='Icon1'>
                            <a href={`tel:+91 ${d.contact}`} style={{color:'white',marginTop:5}}><CallOutlinedIcon/></a>
                            </div>
                            <Tooltip title="Delete not intreseted user" >
                            <div className='Icon2'  onClick={()=>{
                                handleDelete(d)
                            }} >
                                <DeleteIcon/>
                            </div>
                            </Tooltip>
                            <Tooltip title="Transfer to further">
                            <div className='Icon2' onClick={()=>{setOpen(true)}} >
                                        <AddIcon/>
                             </div>
                            </Tooltip>
                            <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    
                >
                    <div className='dialog-container' >
        <DialogTitle id="alert-dialog-title">
          <div>
              Add Car details to the user and Transfer to Bussiness manager
          </div>
        </DialogTitle>
        <DialogContent>
           <div className='dialog-input' >
          <div>
          <TextField className='dialog-feild' variant='outlined' name='car-name' label="car name" placeholder='Add car name' ></TextField>
          </div>
           <div>
           <TextField  className='dialog-feild' variant='outlined' name='car-model' label="car model" placeholder='Add car model' ></TextField>
           </div>
           </div>
        </DialogContent>
        <DialogActions>
            <Button>Save and Transfer</Button>
        </DialogActions>
        </div>
      </Dialog>
                            
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

export default Stage2;