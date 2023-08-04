import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Logo from '../../assets/Logo.jpg'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './nav.css'
function Nav({name}){
    const navigate = useNavigate()
    
    const LogoutHandle = () => {
        navigate('/')
        Swal.fire({
            icon:'success',
            title:'successfully logged out'
        })
    }
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
                    <div  className='right2' onClick={() => LogoutHandle()}>
                    <div className="logout"> Logout</div>
                    <div><LogoutOutlinedIcon className='person'/></div>
                    </div>
                    
                </div>
                <div  className='right2-hidden' onClick={() => LogoutHandle()}>
                    {/* <div className="logout"> Logout</div> */}
                    <div><LogoutOutlinedIcon className='person'/></div>
                </div>
                </div>
            </div>
            
        </div>
    )
}
export default Nav;