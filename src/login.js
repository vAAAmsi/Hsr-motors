import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import React from 'react';
import Hsrlogo from './assets/Hsrlogo.jpg';
import cloud1 from './assets/cloud1.png';
import cloud2 from './assets/cloud2.png';
import circleImg from './assets/circle.png'
import { useNavigate } from 'react-router-dom';
const roles=[
  'Tele-calling','Sales Assistant','Business Manager','Sales Specialist'
]
function Login(){
    const [role, setRole] = React.useState('');
    const [name,setName]=React.useState('');
 const navigate=useNavigate();
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const handleClick=()=>{
     navigate('/dashboard',{state:{name:name,stage:role,roleName:roles[role]}})
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
                      {/* <div>
                        <img className='circle-imrole' src={circleImg}></img>
                      </div> */}
                      <div>
                        <img className='cloud2' src={cloud2}></img>
                      </div>
                </div>
                <div className="log">
                    <div className="text">HSR MOTORS</div>
                    <div className="text1">Please provide the below information</div>
                    <div className="mail">
                    <TextField onChange={handleChangeName}  className='TEmail' label="Username"  />
                    </div>
                    <div className="password">
                    <TextField className='pass' label="Password"  />
                    </div>
                        <div className='selector'>
                        <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" >Select Your Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
        //   className='selector'
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
                <Button onClick={handleClick} style={{backgroundColor:'black',borderRadius:'20px',width:120,height:45}} variant="contained">Login</Button>
                </div>
                </div>

           
            </div>
            </div>
            
        </div>
    )
}
export default Login;