import React, { Component } from 'react'
import Title from '../components/Title'
import Quote from '../components/Quote'
import Category from '../components/Category';
import { getRandomQuote } from '../api/api';
import Hero from '../components/Hero';
import {TiRefresh} from 'react-icons/ti';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

   generateRandomQuote = async () => {
    const data = await getRandomQuote();
    this.setState({
      data
    })
  }

  componentDidMount() {
    this.generateRandomQuote();
  }

  render() {
    const {data} = this.state;
    return (
      <main className="Main">
        <Hero/>
        <Title title="Programming Quotes" />
        {
          data ?
          <>
            <Quote data={data} addToFavorites={this.addToFavorites}/>
            <Category category="" />
          </>
          : "Thinking..."
        }
        <div className="actions">
          <button type="button" className="Main__button-generate" onClick={this.generateRandomQuote}><TiRefresh size={32}/> Random quote</button>
        </div>
      </main>
    )
  }
}

export default Main
