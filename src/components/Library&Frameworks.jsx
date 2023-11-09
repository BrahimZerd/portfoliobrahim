import ReactjsLogo from '../assets/react.png'
import tailwindLogo from '../assets/tailwind.png'
import sass from '../assets/sass.png'


export const Library  = ({isFrench}) => {

    return(
       <div id="libanchor" className="flex flex-col w-full">
        <div className="flex h-[367px] bg-white m-auto">
            <div className="w-[50vw]  flex flex-col m-auto pl-[20%] ">
                <img src={ReactjsLogo} className='w-[114px] ml-[1%]' alt='react logo' />
                <span className='font-[Quicksand] pl-[2%] text-[24px] mt-[10px]'>React.JS </span>
                <span className="inline-block  w-[84px] ml-[3%] mt-[19px] bg-orange-brown h-[1px]"></span>

            </div>
            <div className="bg-orange-brown w-[50vw]">
                <div className='ml-[47px] flex mt-[37px] flex-col'>
                    <span className='text-white text-[24px] '>Library</span>
                    <span className="inline-block  w-[75px]  mt-[14px] bg-orange-y h-[2px]"></span>
                </div>
                {!isFrench ? 
                <p className='w-[398px] text-white m-auto text-center text-[14px] font-normal mt-[68.5px]'>
                After learning javascript, I had to continue my curve on a library currently expanding, and what could be better than react.js to develop using javascript, this library is well optimized and the management of components and different states linked to redux makes this library one of the most qualitative in terms of web app expectations.
                </p>
                : 
                <p className='w-[398px] text-white m-auto text-center text-[14px] font-normal mt-[68.5px]'>
                Après un apprentissage sur javascript, j'ai dû continuer ma courbe sur une library en cours d'expension, et quoi de mieux que react.js pour développer en utilisant du javascript, cette librairie est bien optimisée et la gestions des composants et des différents états liés à redux fait de cette librairie, une des plus qualitative en termes d'attentes web app.</p>}
            </div>
        </div>
        <div className="flex h-[367px] m-auto">
            <div className="bg-orange-brown w-[50vw]">
                <div className='ml-[47px] flex mt-[37px] flex-col'>
                    <span className='text-white text-[24px] '>Frameworks</span>
                    <span className="inline-block  w-[75px]  mt-[14px] bg-orange-y h-[2px]"></span>
                </div>
                {!isFrench ?
                <p className='w-[398px] text-white m-auto text-center text-[14px] font-normal mt-[68.5px]'>
                    Tailwind allow me to be more efficient on my dev management times, more productivity and more efficient.
                </p> 
                :
                <p className='w-[398px] text-white m-auto text-center text-[14px] font-normal mt-[68.5px]'>
                    Tailwind me permet d'être plus efficace dans l'avancement de mes projets, il me rend plus productif et me permet de visuellement comprendre sans chercher dans mes pages.
                </p> 
                }
                {!isFrench ?
                <p className='w-[398px] text-white m-auto text-center text-[14px] font-normal mt-[68.5px]'>
                    Sass is a must have if you need to do hard cap animations, i use it when necessary, usefull if you need to make some keyframes & manage your animations.
                </p>
                :
                <p className='w-[398px] text-white m-auto text-center text-[14px] font-normal mt-[68.5px]'>
                    Sass est nécessaire quand on veut faire des animations complexes, je l'utilise seulement si besoin, utile pour ses "keyframes" et la gestion des animations.
                </p>}
                
            </div>
            <div className="w-[50vw] mt-[5%] flex flex-col justify-around  ">
                <div className='flex justify-evenly '>
                    <img src={tailwindLogo} className='w-[118px] ml-[1%] ml-[1%]' alt='tailwind logo' />
                    <div className='flex flex-col'>
                        <span className='font-[Quicksand] text-center text-[24px] mt-[10px]'>Tailwind.css</span>
                
                        <span className="inline-block  w-[98px]  ml-[18px] mt-[19px] bg-orange-brown h-[1px]"></span>
                    </div>
                </div>
                <div className='flex justify-evenly'>
                    <img src={sass} className='w-[100px]  ml-[1%]' alt='sass logo' />
                    <div className='flex flex-col '>
                        <span className='font-[Quicksand] text-center text-[24px] mt-[10px]'>Sass</span>
                        <span className="inline-block  w-[98px] pl-[50px] mt-[17px] bg-orange-brown h-[1px]"></span>
                    </div>
                </div>
                

            </div>
        </div>
       </div>
    )
}