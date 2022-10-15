import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Avthar from '../../assets/Avthar.jpg'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import db from '../../firebase/firebase';
import { collection, getDocs, where, query, updateDoc, doc, deleteDoc,addDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { async } from '@firebase/util';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from 'react-router-dom';
import Nav from '../../nav';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './Stage2.css'
import IconButton from '@mui/material/IconButton';
import Swal from 'sweetalert2';

import * as React from 'react';
const Stage2 = () => {
    const location = useLocation();
    const { name, stage, roleName } = location.state;
    // console.log(name, stage, roleName)
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [currentClicked,setCurrentClicked]=useState();
    const [carName, setCarName] = useState('');
    const [carModel, setCarModel] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        fetchData();
    }, [])
    const handleChangeCarName = (e) => { setCarName(e.target.value) };
    const handleChangeCarModel = (e) => { setCarModel(e.target.value) };
    const fetchData = async () => {
        const q = query(collection(db, "data"), where("stage", "==", 1));
        const querySnapshot = await getDocs(q);
        setData([]);
        querySnapshot.forEach((doc) => {
            setData(data => [...data, { ...doc.data(), id: doc.id }]);
        });
    }
    const handleDelete = async (c) => {
        const { id } = c;
        console.log("id is",id)
        await deleteDoc(doc(db, "data", id));
        Swal.fire({
            title: 'success',
            text: 'successfully deleted the user.',
            icon: 'success',
            confirmButtonText: 'okay'
          })
        fetchData();
    }
  const handleSaveAndTransfer=async()=>{
    const data={
        ...currentClicked,saleAssisstentName:name,carName,carModel
    }
    data.stage=2;
    const { id } = currentClicked;
      await addDoc(collection(db,"purchased_items"),data);
      const docRef = doc(db, "data", id);
      await updateDoc(docRef, {
         stage: 2
       });
       handleDelete();
       fetchData();
  }
    return (
        <div>
            <Nav name={name}  />  
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
                        data.map((d) => {
                            return (
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
                                                            <div className='Icon2' onClick={() => {
                                                                handleDelete(d)
                                                            }} >
                                                                <DeleteIcon />
                                                            </div>
                                                        </Tooltip>
                                                        <Tooltip title="Add Car details if the user need to purchase the car and transfer to bussiness manager">
                                                            <div className='Icon2' onClick={() => { setOpen(true);setCurrentClicked(d) }} >
                                                                <AddIcon />
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
                                                                <div className='addcarHeader'>
                                                                    Add Car Details
                                                                </div>
                                                                </DialogTitle>
                                                                <DialogContent>
                                                                    <div className='dialog-input' >
                                                                        <div>
                                                                            <TextField
                                                                                className='dialog-feild'
                                                                                variant='outlined'
                                                                                name='car-name'
                                                                                label="car name"
                                                                                placeholder='Add car name'
                                                                                onChange={handleChangeCarName}
                                                                            ></TextField>
                                                                        </div>
                                                                        <div>
                                                                            <TextField
                                                                             className='dialog-feild' 
                                                                             variant='outlined' 
                                                                             name='car-model'
                                                                             label="car model" 
                                                                             placeholder='Add car model'
                                                                             onChange={handleChangeCarModel}
                                                                               ></TextField>
                                                                        </div>
                                                                    </div>
                                                                </DialogContent>
                                                                <DialogActions>
                                                                <Tooltip title="Add card details and transfer to Businees manager">
                <Button style={{backgroundColor:'black',color:'white'}} onClick={handleSaveAndTransfer} >Save and Transfer</Button>
                </Tooltip>
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