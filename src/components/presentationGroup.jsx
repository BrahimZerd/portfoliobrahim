import picture from '../assets/picture.png';
import social from '../assets/social.svg';


import React, { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.net.min";
import * as THREE from "three";





export const PresentationPicture = ({isFrench}) => {

    console.log(isFrench)
    return(
        <>
        <div  className="w-screen h-[480px] pt-[103px] z-1000 bg-grey flex justify-center">
            <div className='mr-[35%]'>
            <div className="text-6xl font-thin text-zerd">
                <span className="name">Brahim ZERD</span>
            </div>
            {!isFrench ? 
             <div className="text-orange-brown font-[Quicksand] font-normal text-[26px]">
                
             Front-End Developer,<br></br>
             I make websites
             
         </div> :
          <div className="text-orange-brown font-[Quicksand] font-normal text-[26px]">
                
          Developpeur Front end,<br></br>
          Je crée des sites !
          
      </div>
            }
           
            {!isFrench ?
                        <button className='bg-orange-brown w-[146px] mt-[35px] h-[38px] font-[Quicksand] font-bold text-[16px] text-center text-white' ><a href="mailto:brahimzerd@gmail.com?subject=About a job offer!">MEET ME</a></button>
                :
                <button className='bg-orange-brown w-[146px] mt-[35px] h-[38px] font-[Quicksand] font-bold text-[16px] text-center text-white' ><a href="mailto:brahimzerd@gmail.com?subject=About a job offer!">Contactez moi</a></button>

        }

            </div>
            <div className='relative bottom-4' >
                <img className="bg-orange-brown me rounded-full"src={picture} alt='me !' />
            </div>
        </div>
        <a href="https://www.linkedin.com/in/brahim-zerd-ba9485aa" >
        <div className='float-right hover:cursor-pointer mr-8 mt-[-20px]'>
            
            <img src={social} alt="contact me !" />
           
        </div>
        </a>
        </>

    );
};