import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Discover from '../components/Discover/Discover';
import Featured from '../components/Featured/Featured';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Popular from '../components/Popular/Popular';
import "./Home.css";

const Home = () => {
  return (
    <div className='home'>
         <Header/>
     <Featured/>
     <Discover/>
     <Popular/>
     <div className='deals'>
        <span className='dealsRowTitle'>Book cheap flights, hotels and car hire with Sun Travels  <FontAwesomeIcon icon={faChevronDown} /></span>
        <span className='dealsRow'>Join 100 million savvy travellers as you compare flights, hotels and cars from hundreds of providers. Here’s how  <FontAwesomeIcon icon={faChevronDown} /></span>
        <span className='dealsRow'>Our international sites  <FontAwesomeIcon icon={faChevronDown} /></span>
     </div>
     <Footer/>
    </div>
  )
}

export default Home