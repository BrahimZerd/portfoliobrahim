import cssLogo from '../assets/cssLogo.png';
import jsLogo from '../assets/jsLogo.png';
import htmlLogo from '../assets/htmlLogo.png';


export const Skills = ({isFrench}) => {

    return(
        <>
        <div id="skill" className="h-[655px] bg-grey text-black">
            <div className="flex flex-col">
             {!isFrench ?   
            <span className="inline-block mt-[50px] m-auto text-[24px]">Some skills to show up ...</span>
            :
            <span className="inline-block mt-[50px] m-auto text-[24px]">Quelques capacitées...</span>}

            <span className="inline-block  w-[308px] m-auto mt-[10px] bg-orange-brown h-[1px]"></span>
            </div>
            <div className='flex mt-20 justify-evenly'>
                <div className='flex flex-col'>
                    <img src={htmlLogo} className="w-[88px] ml-[40px]" alt='html logo' />
                    <span className='m-auto font-medium mt-[36px] text-[24px] leading-normal'>HTML 5</span>
                    <span className="inline-block  w-[84px] m-auto mt-[23px] bg-orange-brown h-[1px]"></span>
                    {!isFrench ?  
                    <p className='w-[171px] h-[119px] mt-[34px] text-center text-[14px]'>HTML5 is the first language that I learned to use, having initially trained myself as a self-taught person, I put this language into practice in order to build the "skeletons" of my websites</p>
                    :
                    <p className='w-[171px] h-[119px] mt-[34px] text-center text-[14px]'>HTML5 est le premier language que j'ai appris, appris en autodidacte, il me permet de mettre en pratique un code qui crée le squelette et les structures de mes sites.</p>
                    }
                </div>
                <div className='flex flex-col js-scroll fadeIn'>
                    <img src={jsLogo} className="w-[88px] ml-[40px]" alt='js logo' />
                    <span className='m-auto font-medium mt-[36px] text-[24px] leading-normal'>Javascript</span>
                    <span className="inline-block  w-[84px] m-auto mt-[23px] bg-orange-brown h-[1px]"></span>
                    {!isFrench ?
                    <p className='w-[171px] h-[119px] mt-[34px] text-center text-[14px]'> Javascript is my "main" skill, principaly used to make user oriented applications, i use it to make websites, new web applications.</p>
                    :
                    <p className='w-[171px] h-[119px] mt-[34px] text-center text-[14px]'> Javascript, c'est mon outil principal! Essentiellement utilisé pour faire les interractions avec les utilisateurs, je l'utilise aussi pour faire des actions complexes.</p>
                    }
                </div>
                <div className='flex flex-col js-scroll fadeIn'>
                    <img src={cssLogo} className="w-[50px] ml-[58px]" alt='css logo' />
                    <span className='m-auto font-medium mt-[36px] text-[24px] leading-normal'>CSS 3</span>
                    <span className="inline-block  w-[84px] m-auto mt-[23px] bg-orange-brown h-[1px]"></span>
                    {!isFrench ?
                    <p className='w-[171px] h-[119px] mt-[34px] text-center text-[14px]'> CSS3 is a must if you need to define your style and design your web application, make the user fall in love with your design styles.</p>
                    :
                    <p className='w-[171px] h-[119px] mt-[34px] text-center text-[14px]'> CSS3 est l'outil du bon goût, il te permet de définir du style et de rendre tes applications plus agréables visuellement.</p>
                    }
                </div>
            </div>
        </div>
        </>
    )
}