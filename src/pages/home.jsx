// react imports
import { useState } from 'react'

//component imports
import Header from '../components/header'

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
      </article>
    </>
  )
}

export default Home