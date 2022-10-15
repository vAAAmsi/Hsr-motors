import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Logo from './assets/Logo.jpg'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
function Nav(){
    const location=useLocation();
    const {name,stage,roleName}=location.state;
    console.log(name,stage,roleName)
    return(
        <div className='Bar'>
            <div className="bar">
                <div className="bar1">
                <div className="left">
                    <div>
                        <img className='Logo' src={Logo}></img>
                    </div>
                    <div className="cName">HSR MOTORS</div>
                </div>
                <div className='right'>
                <div className="right1">
                    <div>
                        < Person2OutlinedIcon className='person'/>
                    </div>
                    <div className='person'>{name}</div>
                    </div>
                    <div className='right2'>
                    <div className="logout"> Logout</div>
                    <div><LogoutOutlinedIcon className='person'/></div>
                    </div>
                </div>
                </div>
            </div>
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
            <Dashboard  roleName={roleName}   />
        </div>
    )
}
export default Nav;