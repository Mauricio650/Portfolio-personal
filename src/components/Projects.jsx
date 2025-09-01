import { CardProject } from "./Card";
import { RocketModel } from "./RocketModel";

export function Projects () {
    return (
        <article className="gap-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 fill justify-items-center">

                <CardProject arrSvg={['reactdark.svg','expressjsdark.svg','skilliconsmongodb.svg','skilliconshtml.svg','skilliconstailwindcssdark.svg']} pathImg={'img/invoNav2.webp'} title={'Invoice Navigator'} text={'Plataforma web para gestión de documentos electronicos. Permite visualizar, filtrar, descargar en PDF y gestionar estados de los documentos.'} linkWeb={'https://invo-navigator.vercel.app/login'} linkRepo={'https://github.com/Mauricio650/InvoNavigator'}  ></CardProject>
                <CardProject arrSvg={['reactdark.svg','skilliconshtml.svg','skilliconscss.svg']} pathImg={'img/catCoin.webp'} title={'CatCoinWatch'} text={'Página web para hacer seguimiento del precio de tus criptomonedas favoritas en tiempo real. Con una lista de las 100 criptomonedas mas populares en el momento, precios en euro o en dolares y actualizacion de precios cada poco tiempo gracias a la api de CoinGecko'} linkWeb={'https://mauricio650.github.io/CatCoinWatch/'} linkRepo={'https://github.com/Mauricio650/CatCoinWatch'}  ></CardProject>
                <CardProject arrSvg={['skilliconshtml.svg','skilliconscss.svg','pythondark.svg']} pathImg={'img/emailsender.webp'} title={'AutoMailSender'} text={'Este proyecto es una web de automatización para enviar correos electrónicos masivos a una lista de clientes definida en un archivo Excel. Es ideal para tareas administrativas, recordatorios, notificaciones o cualquier flujo de correo electrónico que necesite ser personalizado.'} linkRepo={'https://github.com/Mauricio650/AutoMailSender'} linkWeb={'https://github.com/Mauricio650/AutoMailSender'}  ></CardProject>
                <CardProject arrSvg={['reactdark.svg','skilliconshtml.svg','skilliconscss.svg']} pathImg={'img/damas.webp'} title={'Reto Damas'} text={'Desafío de programación en el que implementé el clásico juego de Damas empleando únicamente los fundamentos esenciales de React.'} linkRepo={'https://github.com/Mauricio650/Damas'} linkWeb={'https://mauricio650.github.io/Damas/'}></CardProject>
                <CardProject arrSvg={['pythondark.svg']} pathImg={'img/pokemonSnakeConsoleGame.webp'} title={'Reto juego de consola - SnakePokemon'} text={'Desafío de programación con python de crear un juego de consola que combina la mecánica clásica de Snake con el universo Pokémon.'} linkRepo={'https://github.com/Mauricio650/SnakePokemon'} linkWeb={'https://github.com/Mauricio650/SnakePokemon'}></CardProject>
                <CardProject arrSvg={['reactdark.svg','expressjsdark.svg','skilliconsmysqldark.svg','skilliconshtml.svg','skilliconstailwindcssdark.svg']} text={'ESTE PROYECTO ESTÁ EN CURSO.....'} pathImg={'img/ecommerceDonuts.webp'} title={'Ecommerce para una tienda de donuts'} linkRepo={'#'} linkWeb={'#'}></CardProject>
              
        </article>
    )
}