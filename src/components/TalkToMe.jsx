import { Gmail, Whatsapp } from "./icons/Icons";

export function TalkToMe () {
    return (
        <article className="w-full p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-lg flex justify-center gap-3 items-center">
            <header className="text-center">
                <h1 className="pixelify-sans-3 text-[#FEE529] text-xl">Trabajemos juntos</h1>
            </header>
            <article className="flex gap-3 justify-center items-center">
                <a href="mailto:mauricioibanez650@gmail.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <Gmail></Gmail>
                </a>
                <a href="https://wa.me/573246674862" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <Whatsapp></Whatsapp>
                </a>
            </article>
        </article>
    )
}
