import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import React from 'react';
import Hsrlogo from '../../assets/Hsrlogo.jpg';
import cloud2 from '../../assets/cloud2.png'
import { useNavigate } from 'react-router-dom';
import './login.css'
import Swal from 'sweetalert2';

const roles=[
  'Tele-calling','Sales Assistant','Business Manager','Sales Specialist'
]
const dashboardRoutes=['/tele-calling','/sales-assistant','/bussiness-manager','/sales-specalist']
function Login(){
    const [role, setRole] = React.useState('');
    const [name,setName]=React.useState('');
 const navigate=useNavigate();
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const handleClick=()=>{
    Swal.fire({
      icon:'success',
      title:'successfully logged in'
    })
    navigate(dashboardRoutes[role],{state:{name:name,stage:role,roleName:roles[role]}})
  }
  const handleChangeName=(e)=>{
      setName(e.target.value);
  }
    return(
        <div className="main">
            <div className="main1">
                <div className="pic">
                      <div className='hsrl'>
                        <img className='hsrimg' src={Hsrlogo}></img>
                      </div>
                      <div>
                        <img className='cloud2' src={cloud2}></img>
                      </div>
                </div>
                <div className="log">
                    <form onSubmit={handleClick}>

                    <div className="text">HSR MOTORS</div>
                    <div className="text1">Please provide the below information</div>
                    <div className="mail">
                    <TextField onChange={handleChangeName} type='email'required  className='TEmail' label="Username"  />
                    </div>
                    <div className="password">
                    <TextField className='pass' type='password' label="Password" required />
                    </div>
                        <div className='selector'>
                        <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" >Select Your Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-label"
          value={role}
          label="Select your Role"
          onChange={handleChange}
        >
          <MenuItem value={0}>Tele-calling category</MenuItem>
          <MenuItem value={1}>Sales Assistant</MenuItem>
          <MenuItem value={2}>Business Manager</MenuItem>
          <MenuItem value={3}>Sales Specialist</MenuItem>
        </Select>
      </FormControl>
                        </div>
               <div className='Logbutton'>
                <div className='Logbo'>
                <Button type='submit' style={{backgroundColor:'black',borderRadius:'20px',width:120,height:45}} variant="contained">Login</Button>
                </div>
                </div>

                    </form>

           
            </div>
            </div>
            
        </div>
    )
}
export default Login;