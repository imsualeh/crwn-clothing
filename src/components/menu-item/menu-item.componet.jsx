import React from "react";
import { useNavigate,  } from "react-router-dom";


import './menu-item.css';




const MeneItem = ({ title, imageUrl, size,linkUrl}) => {
    
    const navigate = useNavigate();
    function handleClick(){
        navigate(linkUrl)
    }

 return (
        
           <div className={`${size } menu-item`} onClick={handleClick}
         >  
        
                <div className='background-image'
                    style= {{

                        backgroundImage : `url(${imageUrl})`
                    }}
                />     
                <div className='content'>
                    <h1 className='title'>{ title.toUpperCase()} </h1>
                    
                  
                    
                    <span className='subtitle'>SHOP NOW </span>
                </div>

            </div>
) 
};
export default MeneItem;