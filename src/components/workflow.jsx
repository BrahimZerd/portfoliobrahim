import Figma from '../assets/figma.png';
import Trello from '../assets/trello.png';
import Docker from '../assets/docker.png';


export const Workflow = ({isFrench}) => {
    return(

        <div className="h-[450px] w-screen   bg-grey">
            <div className="flex flex-col text-center mt-[40px] ">
                <span className="text-[32px] font-semibold ">My Workflow</span>
                <span className="inline-block  w-[44px]  m-auto bg-orange-brown h-[3px]"></span>
            </div>
            <div className='flex mt-[40px]'>
                <div className='flex flex-col m-auto'>
                    <img className="w-[64px] m-auto"src={Figma} alt="figma logo"/>
                    <span className='text-[24px] font-bold  mt-[10px] m-auto'>Figma</span>
                    {!isFrench ?
                    <p className='w-[213px] text-center  mt-[12px] text-[14px]'>My connector between me and the UX/UI designer, a clearly nice tool to develop and operate some changes before code.</p>
                    :
                    <p className='w-[213px] text-center  mt-[12px] text-[14px]'>Le moyen de collaborer avec le designer, un très bon outil pour développer et opérer des changements en terme de design avant le code final.</p>
                    }
                    </div>
                <div className='flex flex-col m-auto'>
                    <img className="w-[64px] m-auto "src={Trello} alt="trello logo"/>
                    <span className='text-[24px] font-bold m-auto mt-[10px]'>Trello</span>
                    {!isFrench ?
                    <p className='w-[213px] text-center mt-[12px] text-[14px]'>Used to manage my time, i need Trello to separate my tasks and have some expectations about  time to spend on coding.</p>
                    :
                    <p className='w-[213px] text-center mt-[12px] text-[14px]'>Je l'utilise pour gérer mon temps, j'en ai besoin pour distinguer les nombres tâches à effectuer afin de développer et pouvoir me projeter sur l'avancée d'un projet.</p>
                    }
                    </div>
                <div className='flex flex-col m-auto'>
                    <img className="w-[64px] m-auto "src={Docker} alt="docker logo"/>
                    <span className='text-[24px] font-bold  mt-[10px] m-auto'>Docker</span>
                    {!isFrench ?
                    <p className='w-[213px] text-center  mt-[12px] text-[14px]'>I use it to virtualize my database, working on local (at home) and necessary to simulate my production environnement services.</p>
                    :
                    <p className='w-[213px] text-center  mt-[12px] text-[14px]'>J'utilise Docker pour crée une database distante virtuelle à la maison, celà me permet de générer un "faux" environnement de production.</p>
                    }
                   </div>

            </div>
        </div>
    )
};