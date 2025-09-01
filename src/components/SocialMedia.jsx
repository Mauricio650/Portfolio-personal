import { GitHub, Instragram, Linkedin, Twitter } from './icons/Icons'

export function SocialMedia () {
    return (
        <article className='lg:mt-4 xl:mt-5 mt-10 flex justify-center items-center gap-2 max-w-xl'>
          <a href="https://github.com/Mauricio650" target='_blank' rel="noopener noreferrer"> <GitHub></GitHub></a>
          <a href="https://www.linkedin.com/in/mauricioibdev/" target='_blank' rel="noopener noreferrer"><Linkedin></Linkedin></a>
          <a href="https://tracker.gg/valorant/profile/riot/OTK%20%20MaUrOgOl%23MAU/overview?platform=pc&playlist=competitive&season=5adc33fa-4f30-2899-f131-6fba64c5dd3a" target='_blank' rel="noopener noreferrer"><img className='w-8' src="svg/valorant.svg" alt="" /></a>
        </article>
    )
}