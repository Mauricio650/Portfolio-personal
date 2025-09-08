import './App.css'
import { Analytics } from "@vercel/analytics/react"
import { AboutMe } from './components/AboutMe'
import { AboutStudies } from './components/AboutStudies'
import { Banner } from './components/Banner'
import { ContainerSvgAnimations } from './components/ContainerSvg'
import ContactFormEmail from './components/FormEmail'
import ContactFormWhatsApp from './components/FormWhatsapp'
import { Header } from './components/Header'
import { Introduce } from './components/Introduce'
import { ProjectBanner } from './components/ProjectBanner'
import { Projects } from './components/Projects'
import { RubikModel } from './components/RubikModel'
import { TechsContainers } from './components/TechsContainer'
import { BackGround } from './bg/BackGround'

export function App() {

  return (
    <BackGround>
      <Analytics/>
      <ContainerSvgAnimations></ContainerSvgAnimations>
      <section className='relative w-full flex justify-center items-center'>
        <Header></Header>
      </section>

      <div className='w-full h-screen p-2 sm:p-20 flex justify-center items-center '>
      <section className='w-full h-full flex flex-col justify-evenly items-center sm:gap-5 '>
          <Introduce></Introduce>
          <div className='w-full flex flex-col justify-center items-center'>
            <div>
            <RubikModel></RubikModel>
            </div>
            <TechsContainers></TechsContainers>
          </div>
      </section>
    </div>


    <div className='w-full p-5 flex justify-center items-center '>
      <section className='w-full h-full flex flex-col justify-evenly items-center'>
            <Banner text={'Acerca de mi'}></Banner>
          <AboutMe></AboutMe>
          <AboutStudies></AboutStudies>
      </section>
    </div>

    <div className='w-full p-5  flex justify-center items-center '>
      <section className='w-full h-full flex flex-col justify-evenly items-center'>
            <ProjectBanner></ProjectBanner>
          <Projects></Projects>
      </section>
    </div>


    <div className='w-full p-5  flex justify-center items-center '>
      <section className='w-full h-full flex flex-col justify-evenly items-center'>
            <Banner text={'Contáctame'}></Banner>
            <section className='flex flex-col justify-between items-center gap-2 p-3'>
              <ContactFormEmail></ContactFormEmail>
              <ContactFormWhatsApp></ContactFormWhatsApp>
            </section>
      </section>
    </div>


    </BackGround>
  )
}

