

export const Footer = ({isFrench}) => {
    return(
        !isFrench  ?(
        <>
        <div className="h-[536px] bg-white ml-[69px] mt-[162px]">
            <span className="text-[64px] m-auto">Let’s keep in touch ! 👏</span>
            <p className="text-[32px] w-[610px]">Contact me for full-time employment, freelance or just to say hello. </p>
        </div>
        <div className="flex ml-[50%] justify-between">
            <span>2023 - Made with ❤️ </span>
            <span className="text-orange-brown">Privacy Policy</span>
        </div>
        </>)
        :
        (<>
        <div className="h-[536px] bg-white ml-[69px] mt-[162px]">
            <span className="text-[64px] m-auto">On se tient au courant ! 👏</span>
            <p className="text-[32px] w-[610px]">N'hésitez pas à me contacter pour un poste ou même du freelance, ou juste dire bonjour ! </p>
        </div>
        <div className="flex ml-[50%] justify-between">
            <span>2023 - Fait avec ❤️ </span>
            <span className="text-orange-brown">Privacy Policy</span>
        </div>
        </>)
        
    )
}