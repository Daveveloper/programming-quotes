import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import Quote from '../components/Quote'
import { getRandomQuote } from '../api/api';
import Hero from '../components/Hero';
import {TiRefresh} from 'react-icons/ti';
import PropTypes from 'prop-types'


const Home = () => {
  const [state, setState] = useState({});

  const generateRandomQuote = async () => {
    const data = await getRandomQuote();
    setState(data);
    console.table(state);
  }

  useEffect(() => {
    generateRandomQuote();
  });

  const renderMainContent = () => {
    return state ? <Quote data={state}/> : "Thinking...";
  }

  return (
    <main className="Main">
      <Hero/>
      <Title title="Programming quote"/>
      {
        renderMainContent()
      }
       <div className="actions">
        <button
          type="button"
          className="Main__button-generate"
          onClick={generateRandomQuote}>
            <TiRefresh size={32}/> Random quote
        </button>
      </div>
    </main>
  )
}

export default Home
