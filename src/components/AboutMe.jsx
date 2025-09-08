import { BtnStarts } from "./BtnStarts";
import { HumanModel } from "./HumanModel";

export function AboutMe () {
    return (
        <section className="w-full flex justify-center items-center ">
            <article className=" relative  flex flex-col-reverse lg:flex-row justify-center items-center">
            <article className="retro-box text-center w-xs lg:w-xl p-2 relative  flex flex-col items-center gap-2">
                <p className="font-mono  text-white">Soy desarrollador especializado en Javascript, React, NodeJs y Express apasionado por crear aplicaciones web modernas, rápidas y funcionales. Me interesa el desarrollo backend y frontend, y mi objetivo es crecer como programador para aportar soluciones innovadoras en el mundo digital.</p>
                
                <a href="certificates/MyCvp.pdf" target="_blank" rel="noopener noreferrer"><BtnStarts content={'Descargar CV'}></BtnStarts></a>
            </article>
            <article className="lg:h-[400px] lg:w-[400px] w-[300px] h-[300px]">
                <HumanModel></HumanModel>
            </article>
            </article>
        </section>
    )
}