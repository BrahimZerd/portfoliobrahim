


export const About = ({isFrench}) => {


    return(
        <>
        <div id="littleme" className="text-center bg-orange-brown w-screen flex flex-col  h-[582px]">
            <span className="inline-block mt-[50px] text-[32px] text-white">A little about me</span>
            <span className="inline-block place-items-center w-[44px] m-auto mt-[10px] bg-yellow h-[3px]"></span>
       
        <div className="m-auto mb-24 leading-8 font-[Quicksand] text-white text-left w-[669px] text-[20px]">
            {!isFrench ?
            <p>
                Hi! As you see, i'm Brahim, <br></br>young web developer passionnate of coding and web 3 universe.<br></br><br></br>
                After a great retraining, i'm now able to develop with Javascript and still practicing everyday, to be a better developer.
                My goal is to be a web 3 blockchain developer, so let me tell you : the way gonna be long! but i won't give up! 
                Actually, i'm a front-end developer which develops back end skills.<br></br>

                I'm now looking for a remote job or face-to-face job near Paris, so let me know if you are interested about me and my skills!
            </p> :
             <p>
             Salut, c'est Brahim! <br></br>je suis un jeune développeur passionné de code et de l'univers web 3.<br></br><br></br>
            Après une reconversion réussie, je suis dorénavant développeur javascript junior et je m'entraîne encore tous les jours afin d'être meilleur.
             Mon but étant de devenir blockchain developpeur, je me doute que le chemin va être long mais je m'accroche et travail dur pour celà.
             Mais à l'heure actuelle, je suis developpeur front end, je m'oriente actuellement vers du back end pour être full stack!<br></br>
            Je suis à la recherche d'un poste à distance ou en présentiel, non loin de Paris, alors si vous êtes intéressé, contactez moi ! 
         </p>}
        </div>
        </div>
        </>
    )
}