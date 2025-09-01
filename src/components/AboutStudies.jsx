import { BtnStarts } from "./BtnStarts";
import { TrophyModel } from "./TrophyModel";

export function AboutStudies () {
    return (
        <section className="w-full flex justify-center items-center">
            <article className=" relative flex flex-col lg:flex-row justify-center items-center">
            <article className="lg:h-[400px] lg:w-[400px] w-[300px] h-[300px]">
                <TrophyModel></TrophyModel>
            </article>
            <article className="retro-box text-center w-xs lg:w-xl p-2 relative   flex flex-col items-center gap-2">
                <p className="font-mono  text-white">Actualmente curso una formación profesional en Análisis y Desarrollo de Software. Me apasiona el aprendizaje continuo, aprovechar recursos digitales y aplicar mis conocimientos en proyectos propios, lo que me permite fortalecer mis habilidades técnicas día a día.</p>
                <a href="certificates/certificados.pdf" target="_blank" rel="noopener noreferrer"><BtnStarts content={'Certificados'}></BtnStarts></a>

            </article>
            </article>
        </section>
    )
}