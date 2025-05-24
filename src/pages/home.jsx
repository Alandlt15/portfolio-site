// react imports
import { useState } from 'react'

//component imports
import Header from '../components/header'
import Footer from '../components/footer'
import htmlpic from '../assets/html-example.jpg'

//style import
import '../styles/home.css'

function Home() {

  return (
    <>
      <Header/>
      <article className='card_one'>
        <div className='inner_card_one'>
          <h2>Built on Trust</h2>
          <p>
            Let us take care of your website or mobile application needs!
          </p>
        </div>

        <div className='inner_card_one'>
          <h2>Built on Trust</h2>
          <p>
            Let us take care of your website or mobile application needs!
          </p>
        </div>

        <div className='inner_card_two'>
          <h2>Take your website from this</h2>
          <img src={htmlpic} alt="Image of a basic html page" className='img-styling'/>
        </div>
      </article>
      <Footer/>
    </>
  )
}

export default Home