import React from 'react'
import './components-style/CryptoStats.css'
import axios  from 'axios'
import { useState,useEffect } from 'react'
import {fetchHotCryptos} from '../cryptoApi/cryptoStatsApi'
import flame from '../assests/flame.jpg'
import { globalStats } from '../cryptoApi/cryptoStatsApi'

function CryptoStats() {
const [globalStats , setGlobalStats] =useState([])
const [hot,setHot]=useState([])
const [top,setTop]= useState([])
const [recentlyAdded,setRecentlyAdded]=useState([])

useEffect(() => {
    const fetchHot = async () => {
      const response = await fetchHotCryptos();
      const sortedHot = response.sort((a, b) => b.market_cap_change_percentage_24h - a.market_cap_change_percentage_24h);
      setHot(sortedHot);
    };

    fetchHot();
  }, [])
  return (
    
    <>






    <div className='crypto-stats-container'>
    <div className="hot">
     <div className='topic'>
     <img src={flame} alt="flame" className="flame" />
      <h2>Hot</h2>
      </div>
      {hot.slice(0, 3).map((crypto) => (
        <div className='crypto-info' key={crypto.id}>
          <img className='crypto-image' src={crypto.image} alt={crypto.name} />
          <h5>{crypto.name}</h5> 
        
        </div>
      ))}
    </div>
    <div className='recently-added'>Recently Added </div>
    <div className='top-cryptos'>Top Cryptos</div>
    </div>
    </>
  )
}

export default CryptoStats