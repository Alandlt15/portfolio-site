// react imports
import { useState } from 'react'

//component imports
import Header from '../components/header'
import Footer from '../components/footer'
import htmlpic from '../assets/html-example.jpg'
import reactpic from '../assets/react-example.jpeg'

//style import
import '../styles/home.css'

function Home() {

  return (
    <>
      <Header/>
      <article className='card_one'>
        <div className='inner_card_one'>
          <h2>Creovant Serves Individuals and Local <br/>Companies</h2>
          <p>
            by providing web and mobile application services
          </p>
        </div>

        <div className='inner_card_one'>
          <h2>Affordable <br/> Community Oriented <br/> Modern Technologies</h2>
          <p>
            Something else here!
          </p>
        </div>

        <div className='inner_card_two'>
          <h2>We take your website from this</h2>
          <img src={htmlpic} alt="Image of a basic html page" className='img-styling'/>
        </div>
        <div className='inner_card_two'>
          <h2>To this</h2>
          <img src={reactpic} alt="Image of a basic html page" className='img-styling'/>
        </div>
      </article>
      <Footer/>
    </>
  )
}

export default Home