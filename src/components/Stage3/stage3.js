import { useLocation } from 'react-router-dom';
import Nav from '../../nav';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

function Stage3(){
    const location = useLocation();
    const { name, stage, roleName } = location.state;
    return(
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
           
        </div>
    )
   }

   export default Stage3;   