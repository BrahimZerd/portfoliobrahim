import capture from '../assets/capture.PNG';
import mywebsite from '../assets/mywebsite.PNG'

export const Projects = ({isFrench}) => {
    return(
        <div id="project" className="h-[1050px] m-auto text-white bg-orange-y">
        <div className="flex flex-col m-auto">

            <span className="m-auto text-[32px] font-semibold mt-[50px]"> Most recent project</span>
            <span className="inline-block  w-[44px]  m-auto bg-yellow h-[3px]"></span>
        </div>
        <div className='flex justify-evenly mt-[60px] ml-[10%]'>
            <a href="https://app.everwave.xyz" >
            <img className='w-[206px] h-[398px] object-countain' src={capture} alt="screenshot project"/>
            </a>
            {!isFrench ?
            <div className='flex flex-col '>
                <span className='text-[32px] font-semibold'>Everwave</span>
                <span className='text-[16px] font-bold'>Front-end Developer / web 3 music application</span>
                <p className='font-normal text-[14px] mt-[13px] w-[462px] text-left '>In this project, i was in charge of  smalls bugs corrections and interface visual corrections, i had to integrate new features with a lead developer to help me and find ways to improve the user experiences with my team of 3 developers.<br></br>
                i was also in charge of the mobile visual interface, that was my solo project working in peer with a UX designer.</p>
                <span className='font-semibold text-[16px] mt-[5px]'>Technologies: Typescript / React.js / Docker / Trello / Figma / HTML / CSS</span>
                
            </div>
            :
            <div className='flex flex-col '>
                <span className='text-[32px] font-semibold'>Everwave</span>
                <span className='text-[16px] font-bold'>Developpeur front end / application musicale web 3</span>
                <p className='font-normal text-[14px] mt-[13px] w-[462px] text-left '>Dans ce projet, j'avais pour rôle de corriger les bugs d'interface & visuels, intégration de nouvelles fonctionnalitées en collaboration avec le développeur en chef pour m'aider. j'étais aussi en charge du développement de l'application mobile en collaboration avec un designer UI/UX et intégrer les fonctionnalitées relatives à celle ci.</p>
                <span className='font-semibold text-[16px] mt-[5px]'>Technologies: Typescript / React.js / Docker / Trello / Figma / HTML / CSS</span>
                
            </div>
            }
        </div>
        <div className='flex justify-evenly mt-[150px] ml-[10%]'>
           {!isFrench ? 
            <div className='flex flex-col ml-[3%] '>
                
                <span className='text-[32px] font-semibold'>My portfolio</span>
                <span className='text-[16px] font-bold'>Front-end Developer / myself</span>
                <p className='font-normal text-[14px] mt-[13px] w-[462px] text-left '>You r visiting it actually. :D </p>
                <span className='font-semibold text-[16px] mt-[5px]'>Technologies: React.js / Trello / Figma / HTML / CSS</span>
                
            </div>
            :
            <div className='flex flex-col ml-[3%] '>
                
                <span className='text-[32px] font-semibold'>Mon portfolio</span>
                <span className='text-[16px] font-bold'>Developpeur front end / moi-même</span>
                <p className='font-normal text-[14px] mt-[13px] w-[462px] text-left '>Vous êtes dessus. :D </p>
                <span className='font-semibold text-[16px] mt-[5px]'>Technologies: React.js / Trello / Figma / HTML / CSS</span>
                
            </div>
            }

            <a href="zz" >
            <img className='w-[356px] h-[250px] object-cover' src={mywebsite} alt="screenshot project"/>
            </a>
        </div>
        </div>
    )
}