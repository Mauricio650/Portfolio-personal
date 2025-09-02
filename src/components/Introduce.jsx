import { SocialMedia } from "./SocialMedia";

export function Introduce () {
    return (
        <section className='flex flex-col justify-center items-center'>
        <article className='flex flex-col  lg:flex-row lg:gap-4 2xl:flex-col 2xl:gap-0 justify-center items-center'>
          <div className="flex justify-center items-center mt-2">
          <img className="img-container w-20 2xl:w-50" src="img/img.webp" alt="img of mauricio edited by SoraAI with 8-bit style" />
          </div>
          <article className='text-white text-center mt-2 sm:mt-5'>
          <h1 className='pixelify-sans-3 text-md sm:text-xl lg:text-2xl '>Mauricio <span className="text-green-500">Ibañez</span> <span className="text-red-600">Bermudez</span> </h1>
          <p className='pixelify-sans-3 text-yellow-300 text-xs sm:text-lg'>Desarrollador web</p>
          </article>
        </article>
        <article className='mt-10 lg:mt-3 xl:mt-5 flex flex-col items-center justify-center'>
        <article className='orbitron-1 text-[0.8rem] sm:text-[1rem]  text-white text-center max-w-xl'>
          <p>Hola, soy Mauricio,
             <span className="highlight "> curioso </span> y 
             <span className="highlight "> apasionado </span>
             por el desarrollo de software, dispuesto a transformar 
             <span className="highlight "> ideas en realidad.</span> </p>
        </article>
        <SocialMedia></SocialMedia>
        </article>           
      </section>
    )
}