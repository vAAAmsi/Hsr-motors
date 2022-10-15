import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Avthar from '../../assets/Avthar.jpg'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import db from '../../firebase/firebase';
import { collection, getDocs,where,query,updateDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { async } from '@firebase/util';

const Dashboard=(props)=>{
    const {roleName}=props;
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])
 const fetchData=async()=>{
    const q = query(collection(db, "data"), where("stage", "==", 0));

    const querySnapshot = await getDocs(q);
        setData([]);
        querySnapshot.forEach((doc) => {
            setData(data=>[...data,doc.data()]);
            // console.log("id",doc.id)
        });
        // console.log("data is",data)
        // console.log("stage",q)
  }
  const Further=async(c)=>{
          console.log(c)
                //  const washingtonRef = doc(db, "cities", "DC");
                //   await updateDoc(washingtonRef, {
                //     capital: true
                //     });
                const querySnapshot = await getDocs(collection(db,"data"));
                    querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id,c);
                    });

  } 
        
  

    return(
        <div>
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
                            
                            <Tooltip title="Transfer to further">
                            <div onClick={()=>{
                                           Further(d);
                            }} className='Icon2'>
                                        <ArrowCircleRightOutlinedIcon/>
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

export default Dashboard;