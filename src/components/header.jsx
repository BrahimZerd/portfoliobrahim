import BugerMenu from '../assets/Burger Menu.svg';
import { useEffect, useState } from 'react';


export  const Header = ({setLanguage,language, toggle,notToggling}) => {

    const [isOpen, setIsOpen] = useState(false);

   

    

    useEffect(() => {
        const french = document.getElementById('fr');
        const english = document.getElementById('eng');
        const icon = document.getElementById('burger');
        const header = document.querySelector('.headerBloc');
            
            
        icon.addEventListener('click', function(){
                !isOpen? icon.style.rotate = '90deg' : icon.style.rotate = '180deg';
                !isOpen? header.style.borderBottom ="solid 1px orange" : header.style.borderBottom ="solid 0px white";
                setIsOpen(!isOpen);

            function frame() {
                for(let i = 20; i <= 100; i++) {
                    setTimeout(() => {
                    header.style.width = i + "%";}, 1000)}
            };

            if(!isOpen) {
                const aboutme = document.getElementById('aboutme');
                if(aboutme && !isOpen) {
                    setTimeout(()=> {
                        const  changePositionElement = (element,element1,element2,element3,element4,element5) => {
                            const arrayElements = [element,element1,element2,element3,element4,element5];

                            arrayElements.forEach((element) => {
                            const gotElement = document.getElementById(element)
                            
                            gotElement !== null ? gotElement.style.transform ="translateX(200px)" : console.log(null);
                            gotElement !== null ? gotElement.style.opacity = 1 : console.log(null);})
                        }
                        changePositionElement('aboutme','skills','library','projects','contacts');
                    },300) 
                    
                } 
            }

            frame();
        }); 
            
        if(language === true) {
                french.classList.add('text-orange-brown');
                english.classList.remove('text-orange-brown');
        }else {
                french.classList.remove('text-orange-brown');
                english.classList.add('text-orange-brown');
        }
    },)

    
    
    return(
        <>
        <header>
            <div  className="flex  relative justify-between p-[2%]">
                
                <div >
                    <img id="burger" className=" mt-1.5 duration-1000 w-[2rem] burger hover:cursor-pointer"src={BugerMenu} alt='menu' />
                </div>
                
                   {isOpen ? 
                   <div className='  font-thin uppercase font-[Quicksand] text-orange-brown burgerbloc flex '>
                   <a id="aboutme" href="#littleme" className='absolute left-[15%]'>About Me</a>
                    <a id="skills" href="#skill" className='absolute left-[25%]'>my Skills</a>
                    <a id="library" href="#libanchor" className='absolute left-[35%]'>Library & Frameworks</a>
                    <a id="projects" href="#project" className='absolute left-[52%]'>Projects</a>
                    <a id="contacts" href="mailto:brahimzerd@gmail.com" className='absolute left-[62%]'>Contacts</a>
                    </div>  : null}
                
                <div   className='flex text-2xl'>
                   
                    <span onClick={notToggling} id="eng" className='inline mr-[28px]  hover:cursor-pointer text-orange-brown'>EN</span>
                    <span onClick={toggle} id="fr" className='inline hover:cursor-pointer'>FR</span>
                </div>
            </div>
            <div className='headerBloc  w-screen'></div>

        </header>
        </>

    );

};